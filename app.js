```javascript
(() => {
  const topics = window.TEST_TOPICS || [];
  const $ = id => document.getElementById(id);

  const els = {
    hero: $('hero'),
    studentPanel: $('studentPanel'),
    topicPanel: $('topicPanel'),
    topicGrid: $('topicGrid'),
    quizPanel: $('quizPanel'),
    resultPanel: $('resultPanel'),
    adminPanel: $('adminPanel'),

    totalQuestions: $('totalQuestions'),
    totalTopics: $('totalTopics'),
    topicCount: $('topicCount'),
    quizTopicLabel: $('quizTopicLabel'),
    questionCounter: $('questionCounter'),
    progressPercent: $('progressPercent'),
    progressFill: $('progressFill'),
    questionTag: $('questionTag'),
    questionText: $('questionText'),
    answers: $('answers'),
    feedback: $('feedback'),
    checkButton: $('checkButton'),
    backToTopics: $('backToTopics'),

    resultIcon: $('resultIcon'),
    resultTitle: $('resultTitle'),
    resultSubtitle: $('resultSubtitle'),
    scoreCircle: $('scoreCircle'),
    scorePercent: $('scorePercent'),
    correctCount: $('correctCount'),
    wrongCount: $('wrongCount'),
    scoreTotal: $('scoreTotal'),
    retryButton: $('retryButton'),
    topicsButton: $('topicsButton'),
    footerYear: $('footerYear'),

    firstName: $('studentFirstName'),
    lastName: $('studentLastName'),
    group: $('studentGroup'),
    timer: $('timerDisplay'),
    details: $('detailResults'),

    adminOpen: $('adminOpen'),
    adminClose: $('adminClose'),
    adminSummary: $('adminSummary'),
    adminResults: $('adminResults'),
    saveResult: $('saveResultButton'),
    exportResults: $('exportResultsButton'),
    clearResults: $('clearResultsButton')
  };

  const STORAGE_KEY = 'protest_saved_results_v1';
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  let topicIndex = 0;
  let questionIndex = 0;
  let selectedIndex = null;
  let checked = false;
  let correct = 0;
  let answersLog = [];
  let currentStudent = null;
  let lastResult = null;
  let secondsLeft = 900;
  let timerInterval = null;
  let finished = false;

  const totalQuestions = topics.reduce(
    (sum, topic) => sum + topic.questions.length, 0
  );

  els.totalQuestions.textContent = totalQuestions;
  els.totalTopics.textContent = topics.length;
  els.topicCount.textContent = `${topics.length} MAVZU`;
  els.footerYear.textContent = `© ${new Date().getFullYear()} ProTest`;

  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[ch]);
  }

  function readResults() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }

  function saveResults(results) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
      return true;
    } catch {
      alert('Natijani saqlab bo‘lmadi. Brauzer xotirasini tekshiring.');
      return false;
    }
  }

  function showView(view) {
    const visibility = {
      topics: ['hero', 'studentPanel', 'topicPanel'],
      quiz: ['quizPanel'],
      result: ['resultPanel'],
      admin: ['adminPanel']
    };

    [
      'hero', 'studentPanel', 'topicPanel',
      'quizPanel', 'resultPanel', 'adminPanel'
    ].forEach(id => {
      if (els[id]) {
        els[id].classList.toggle(
          'hidden',
          !(visibility[view] || []).includes(id)
        );
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderTopics() {
    els.topicGrid.innerHTML = '';

    topics.forEach((topic, index) => {
      const card = document.createElement('button');
      card.className = 'topic-card';
      card.type = 'button';

      card.innerHTML = `
        <span class="topic-number">${String(index + 1).padStart(2, '0')}</span>
        <span>
          <h3>${escapeHTML(topic.title)}</h3>
          <p>${topic.questions.length} ta savol · Testni boshlash</p>
        </span>
        <span class="topic-arrow">↗</span>
      `;

      card.addEventListener('click', () => startTopic(index));
      els.topicGrid.appendChild(card);
    });
  }

  function startTopic(index) {
    const first = els.firstName.value.trim();
    const last = els.lastName.value.trim();
    const group = els.group.value.trim();

    if (!first || !last || !group) {
      alert('Testni boshlash uchun ism, familiya va guruhni kiriting.');
      els.studentPanel.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      return;
    }

    currentStudent = {
      firstName: first,
      lastName: last,
      group
    };

    topicIndex = index;
    questionIndex = 0;
    selectedIndex = null;
    checked = false;
    correct = 0;
    answersLog = [];
    finished = false;
    secondsLeft = 900;

    showView('quiz');
    renderQuestion();
    startTimer();
  }

  function stopTimer() {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimer() {
    const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
    const seconds = String(secondsLeft % 60).padStart(2, '0');

    els.timer.textContent = `${minutes}:${seconds}`;
    els.timer.classList.toggle('timer-warning', secondsLeft <= 60);
  }

  function startTimer() {
    stopTimer();
    updateTimer();

    timerInterval = setInterval(() => {
      secondsLeft = Math.max(0, secondsLeft - 1);
      updateTimer();

      if (secondsLeft === 0) {
        stopTimer();
        finishByTimeout();
      }
    }, 1000);
  }

  function renderQuestion() {
    const topic = topics[topicIndex];
    const item = topic.questions[questionIndex];

    selectedIndex = null;
    checked = false;

    els.quizTopicLabel.textContent = topic.title.toUpperCase();
    els.questionCounter.textContent =
      `Savol ${questionIndex + 1} / ${topic.questions.length}`;

    const percent = Math.round(
      questionIndex / topic.questions.length * 100
    );

    els.progressPercent.textContent = `${percent}%`;
    els.progressFill.style.width = `${percent}%`;
    els.questionTag.textContent =
      `SAVOL ${String(questionIndex + 1).padStart(2, '0')}`;

    els.questionText.textContent = item.q;
    els.answers.innerHTML = '';
    els.feedback.className = 'feedback hidden';
    els.feedback.textContent = '';

    item.a.forEach((answer, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-option';

      button.innerHTML = `
        <span class="answer-letter">${letters[index] || index + 1}</span>
        <span>${escapeHTML(answer)}</span>
      `;

      button.addEventListener('click', () => {
        if (checked) return;

        selectedIndex = index;

        [...els.answers.children].forEach((el, i) => {
          el.classList.toggle('selected', i === index);
        });

        els.checkButton.disabled = false;
      });

      els.answers.appendChild(button);
    });

    els.checkButton.disabled = true;
    els.checkButton.innerHTML =
      'Javobni tekshirish <span>→</span>';
  }

  function recordAnswer() {
    const item = topics[topicIndex].questions[questionIndex];
    const isCorrect = selectedIndex === item.c;

    if (isCorrect) correct++;

    answersLog.push({
      question: item.q,
      chosen: selectedIndex === null
        ? 'Javob berilmadi'
        : item.a[selectedIndex],
      correctAnswer: item.a[item.c],
      isCorrect
    });

    return isCorrect;
  }

  function checkAnswer() {
    const item = topics[topicIndex].questions[questionIndex];

    if (!checked) {
      if (selectedIndex === null) return;

      checked = true;

      [...els.answers.children].forEach((button, index) => {
        button.disabled = true;

        if (index === item.c) button.classList.add('correct');

        if (index === selectedIndex && selectedIndex !== item.c) {
          button.classList.add('incorrect');
        }
      });

      const isCorrect = recordAnswer();

      els.feedback.textContent = isCorrect
        ? 'To‘g‘ri! Barakalla.'
        : `Noto‘g‘ri. To‘g‘ri javob: ${item.a[item.c]}`;

      els.feedback.className =
        `feedback ${isCorrect ? 'good' : 'bad'}`;

      els.checkButton.innerHTML =
        questionIndex === topics[topicIndex].questions.length - 1
          ? 'Natijani ko‘rish <span>→</span>'
          : 'Keyingi savol <span>→</span>';

      const percent = Math.round(
        (questionIndex + 1) / topics[topicIndex].questions.length * 100
      );

      els.progressPercent.textContent = `${percent}%`;
      els.progressFill.style.width = `${percent}%`;
      return;
    }

    if (questionIndex < topics[topicIndex].questions.length - 1) {
      questionIndex++;
      renderQuestion();
    } else {
      showResults('completed');
    }
  }

  function finishByTimeout() {
    if (finished) return;

    const questions = topics[topicIndex].questions;

    while (answersLog.length < questions.length) {
      const item = questions[answersLog.length];

      answersLog.push({
        question: item.q,
        chosen: 'Vaqt tugadi — javob berilmadi',
        correctAnswer: item.a[item.c],
        isCorrect: false
      });
    }

    showResults('timeout');
  }

  function showResults(reason = 'completed') {
    if (finished) return;

    finished = true;
    stopTimer();

    const total = topics[topicIndex].questions.length;
    const percent = Math.round(correct / total * 100);
    const wrong = total - correct;

    lastResult = {
      firstName: currentStudent.firstName,
      lastName: currentStudent.lastName,
      group: currentStudent.group,
      topic: topics[topicIndex].title,
      total,
      correct,
      wrong,
      percent,
      secondsUsed: 900 - secondsLeft,
      reason,
      date: new Date().toISOString(),
      details: [...answersLog]
    };

    const results = readResults();
    results.push(lastResult);
    saveResults(results);

    els.scorePercent.textContent = `${percent}%`;
    els.correctCount.textContent = correct;
    els.wrongCount.textContent = wrong;
    els.scoreTotal.textContent = `${correct}/${total}`;

    els.scoreCircle.style.background = `
      radial-gradient(circle at center, #121a31 58%, transparent 59%),
      conic-gradient(var(--purple) ${percent}%, #ffffff14 ${percent}%)
    `;

    els.resultIcon.textContent =
      percent >= 80 ? '✓' : percent >= 50 ? '★' : '↻';

    els.resultTitle.textContent =
      percent >= 80 ? 'Ajoyib natija!'
      : percent >= 50 ? 'Yaxshi harakat!'
      : 'Mashq qilishda davom eting!';

    els.resultSubtitle.textContent =
      `${currentStudent.firstName} ${currentStudent.lastName} · ` +
      `${currentStudent.group} · ${topics[topicIndex].title}` +
      (reason === 'timeout' ? ' · Vaqt tugadi' : '');

    els.details.innerHTML = `
      <h3>Batafsil natijalar</h3>
      <div class="detail-list">
        ${lastResult.details.map((item, index) => `
          <div class="detail-row ${item.isCorrect ? 'detail-good' : 'detail-bad'}">
            <strong>${index + 1}.</strong>
            <div>
              <p>${escapeHTML(item.question)}</p>
              <small>Sizning javobingiz: ${escapeHTML(item.chosen)}</small>
              <small>To‘g‘ri javob: ${escapeHTML(item.correctAnswer)}</small>
            </div>
            <span>${item.isCorrect ? '✓' : '✕'}</span>
          </div>
        `).join('')}
      </div>
    `;

    showView('result');
  }

  function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function downloadCurrentResult() {
    if (!lastResult) return;

    downloadFile(
      'protest_natija.json',
      JSON.stringify(lastResult, null, 2),
      'application/json;charset=utf-8'
    );
  }

  function openAdmin() {
    const password = prompt('Admin parolini kiriting:');

    if (password === null) return;

    if (password !== 'protest123') {
      alert('Parol noto‘g‘ri.');
      return;
    }

    renderAdmin();
    showView('admin');
  }

  function renderAdmin() {
    const results = readResults();

    const average = results.length
      ? Math.round(
          results.reduce((sum, item) => sum + item.percent, 0) /
          results.length
        )
      : 0;

    const students = new Set(
      results.map(item =>
        `${item.firstName} ${item.lastName} ${item.group}`
      )
    ).size;

    els.adminSummary.innerHTML = `
      <div class="admin-stat">
        <strong>${results.length}</strong><span>Jami test</span>
      </div>
      <div class="admin-stat">
        <strong>${students}</strong><span>O‘quvchilar</span>
      </div>
      <div class="admin-stat">
        <strong>${average}%</strong><span>O‘rtacha natija</span>
      </div>
    `;

    els.adminResults.innerHTML = results.length
      ? [...results].reverse().map(item => `
          <tr>
            <td>${escapeHTML(item.firstName)} ${escapeHTML(item.lastName)}</td>
            <td>${escapeHTML(item.group)}</td>
            <td>${escapeHTML(item.topic)}</td>
            <td>${item.correct}/${item.total} (${item.percent}%)
