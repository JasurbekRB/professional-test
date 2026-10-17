
(() => {
  'use strict';

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
    timerDisplay: $('timerDisplay'),

    resultIcon: $('resultIcon'),
    resultTitle: $('resultTitle'),
    resultSubtitle: $('resultSubtitle'),
    scoreCircle: $('scoreCircle'),
    scorePercent: $('scorePercent'),
    correctCount: $('correctCount'),
    wrongCount: $('wrongCount'),
    scoreTotal: $('scoreTotal'),
    detailResults: $('detailResults'),
    retryButton: $('retryButton'),
    topicsButton: $('topicsButton'),
    saveResultButton: $('saveResultButton'),

    adminOpen: $('adminOpen'),
    adminClose: $('adminClose'),
    adminSummary: $('adminSummary'),
    adminResults: $('adminResults'),
    exportResultsButton: $('exportResultsButton'),
    clearResultsButton: $('clearResultsButton'),

    firstName: $('studentFirstName'),
    lastName: $('studentLastName'),
    group: $('studentGroup'),
    footerYear: $('footerYear')
  };

  const ADMIN_PASSWORD = 'ProTest2026';
  const STORAGE_KEY = 'protest_results_v1';
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const TEST_DURATION = 15 * 60;

  let topicIndex = 0;
  let questionIndex = 0;
  let selectedIndex = null;
  let checked = false;
  let correct = 0;
  let secondsLeft = TEST_DURATION;
  let timer = null;
  let finished = false;
  let selectedAnswers = [];
  let currentStudent = {};
  let currentResult = null;

  const totalQuestions = topics.reduce(
    (sum, topic) => sum + (topic.questions || []).length,
    0
  );

  els.totalQuestions.textContent = totalQuestions;
  els.totalTopics.textContent = topics.length;
  els.topicCount.textContent = `${topics.length} MAVZU`;
  els.footerYear.textContent = `© ${new Date().getFullYear()} ProTest`;

  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[char]);
  }

  function readResults() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  function writeResults(results) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
      return true;
    } catch {
      alert('Natijalarni saqlab bo‘lmadi. Brauzer xotirasini tekshiring.');
      return false;
    }
  }

  function stopTimer() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

 
function startTimer() {
  stopTimer();

  secondsLeft = 15 * 60;
  updateTimer();

  timer = window.setInterval(() => {
    if (finished) {
      stopTimer();
      return;
    }

    secondsLeft = Math.max(0, secondsLeft - 1);
    updateTimer();

    if (secondsLeft === 0) {
      stopTimer();
      finishTest(true);
    }
  }, 1000);
}

  }

  function updateTimer() {
    els.timerDisplay.textContent = formatTime(secondsLeft);
    els.timerDisplay.style.color = secondsLeft <= 60 ? '#ff7777' : '';
  }

  function showView(view) {
    const visibility = {
      topics: ['hero', 'studentPanel', 'topicPanel'],
      quiz: ['quizPanel'],
      result: ['resultPanel'],
      admin: ['adminPanel']
    };

    Object.entries({
      hero: els.hero,
      studentPanel: els.studentPanel,
      topicPanel: els.topicPanel,
      quizPanel: els.quizPanel,
      resultPanel: els.resultPanel,
      adminPanel: els.adminPanel
    }).forEach(([key, element]) => {
      if (element) {
        element.classList.toggle(
          'hidden',
          !(visibility[view] || []).includes(key)
        );
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderTopics() {
    els.topicGrid.innerHTML = '';

    topics.forEach((topic, index) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'topic-card';

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
      alert('Iltimos, ism, familiya va guruhni kiriting.');
      els.firstName.focus();
      return;
    }

    if (!topics[index]?.questions?.length) {
      alert('Bu mavzuda savollar topilmadi.');
      return;
    }

    stopTimer();

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
    finished = false;
    selectedAnswers = [];
    currentResult = null;

    showView('quiz');
    renderQuestion();
    startTimer();
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

      const letter = letters[index] || String(index + 1);

      button.innerHTML = `
        <span class="answer-letter">${letter}</span>
        <span>${escapeHTML(answer)}</span>
      `;

      button.addEventListener('click', () => {
        if (checked || finished) return;

        selectedIndex = index;

        [...els.answers.children].forEach((element, i) => {
          element.classList.toggle('selected', i === index);
        });

        els.checkButton.disabled = false;
      });

      els.answers.appendChild(button);
    });

    els.checkButton.disabled = true;
    els.checkButton.innerHTML = 'Javobni tekshirish <span>→</span>';
  }

  function checkAnswer() {
    if (finished) return;

    const topic = topics[topicIndex];
    const item = topic.questions[questionIndex];

    if (!checked) {
      if (selectedIndex === null) return;

      checked = true;

      const isCorrect = selectedIndex === item.c;

      if (isCorrect) correct++;

      selectedAnswers[questionIndex] = selectedIndex;

      [...els.answers.children].forEach((button, index) => {
        button.disabled = true;

        if (index === item.c) {
          button.classList.add('correct');
        }

        if (index === selectedIndex && !isCorrect) {
          button.classList.add('incorrect');
        }
      });

      els.feedback.textContent = isCorrect
        ? 'To‘g‘ri! Barakalla.'
        : `Noto‘g‘ri. To‘g‘ri javob: ${item.a[item.c]}`;

      els.feedback.className =
        `feedback ${isCorrect ? 'good' : 'bad'}`;

      const percent = Math.round(
        (questionIndex + 1) / topic.questions.length * 100
      );

      els.progressPercent.textContent = `${percent}%`;
      els.progressFill.style.width = `${percent}%`;

      els.checkButton.innerHTML =
        questionIndex === topic.questions.length - 1
          ? 'Natijani ko‘rish <span>→</span>'
          : 'Keyingi savol <span>→</span>';

    } else {
      if (questionIndex < topic.questions.length - 1) {
        questionIndex++;
        renderQuestion();
      } else {
        finishTest(false);
      }
    }
  }

  function finishTest(timeExpired) {
    if (finished) return;

    finished = true;
    stopTimer();

    const topic = topics[topicIndex];
    const total = topic.questions.length;
    const wrong = total - correct;
    const percent = Math.round(correct / total * 100);

    currentResult = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      firstName: currentStudent.firstName,
      lastName: currentStudent.lastName,
      group: currentStudent.group,
      topic: topic.title,
      correct,
      wrong,
      total,
      percent,
      timeExpired,
      date: new Date().toLocaleString('uz-UZ'),
      answers: topic.questions.map((item, index) => ({
        question: item.q,
        chosen: selectedAnswers[index] ?? null,
        correct: item.c,
        options: item.a
      }))
    };

    const results = readResults();
    results.push(currentResult);
    writeResults(results);

    els.scorePercent.textContent = `${percent}%`;
    els.correctCount.textContent = correct;
    els.wrongCount.textContent = wrong;
    els.scoreTotal.textContent = `${correct}/${total}`;

    els.scoreCircle.style.background =
      `radial-gradient(circle at center,#121a31 58%,transparent 59%),` +
      `conic-gradient(var(--purple) ${percent}%,#ffffff14 ${percent}%)`;

    els.resultIcon.textContent =
      percent >= 80 ? '✓' : percent >= 50 ? '★' : '↻';

    els.resultTitle.textContent =
      percent >= 80 ? 'Ajoyib natija!' :
      percent >= 50 ? 'Yaxshi harakat!' :
      'Mashq qilishda davom eting!';

    els.resultSubtitle.textContent =
      `${currentStudent.firstName} ${currentStudent.lastName} — ` +
      `${topic.title} mavzusi.` +
      (timeExpired ? ' Vaqt tugadi.' : '');

    els.detailResults.innerHTML = topic.questions.map((item, index) => {
      const chosen = selectedAnswers[index];
      const isCorrect = chosen === item.c;

      return `
        <div class="detail-result">
          <p><strong>${index + 1}. ${escapeHTML(item.q)}</strong></p>
          <p>Javobingiz: ${
            chosen === undefined
              ? '<em>Javob berilmadi</em>'
              : escapeHTML(item.a[chosen])
          }</p>
          <p>To‘g‘ri javob: ${escapeHTML(item.a[item.c])}</p>
          <p>${isCorrect ? '✓ To‘g‘ri' : '✗ Noto‘g‘ri'}</p>
        </div>
      `;
    }).join('');

    showView('result');
  }

  function openAdmin() {
    const password = prompt('Admin parolini kiriting:');

    if (password === null) return;

    if (password !== ADMIN_PASSWORD) {
      alert('Parol noto‘g‘ri!');
      return;
    }

    stopTimer();
    showView('admin');
    renderAdmin();
  }

  function renderAdmin() {
    const results = readResults();

    const average = results.length
      ? Math.round(
          results.reduce((sum, item) => sum + item.percent, 0) /
          results.length
        )
      : 0;

    els.adminSummary.innerHTML = `
      <div class="stat">
        <strong>${results.length}</strong>
        <span>Jami testlar</span>
      </div>
      <div class="stat">
        <strong>${average}%</strong>
        <span>O‘rtacha natija</span>
      </div>
    `;

    els.adminResults.innerHTML = '';

    if (!results.length) {
      els.adminResults.innerHTML =
        '<tr><td colspan="5">Hozircha natijalar yo‘q.</td></tr>';
      return;
    }

    [...results].reverse().forEach(result => {
      const row = document.createElement('tr');

      [
        `${result.firstName} ${result.lastName}`,
        result.group,
        result.topic,
        `${result.correct}/${result.total} (${result.percent}%)`,
        result.date
      ].forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value ?? '';
        row.appendChild(cell);
      });

      els.adminResults.appendChild(row);
    });
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
    if (!currentResult) {
      alert('Yuklab olish uchun natija topilmadi.');
      return;
    }

    const result = currentResult;

    const lines = [
      'ProTest — TEST NATIJASI',
      `O‘quvchi: ${result.firstName} ${result.lastName}`,
      `Guruh: ${result.group}`,
      `Mavzu: ${result.topic}`,
      `Sana: ${result.date}`,
      `Natija: ${result.percent}%`,
      `To‘g‘ri: ${result.correct}`,
      `Noto‘g‘ri: ${result.wrong}`,
      `Umumiy: ${result.correct}/${result.total}`,
      '',
      'SAVOLLAR TAHLILI',
      ...result.answers.map((item, index) => [
        `${index + 1}. ${item.question}`,
        `Javobingiz: ${
          item.chosen === null ? 'Javobsiz' : item.options[item.chosen]
        }`,
        `To‘g‘ri javob: ${item.options[item.correct]}`,
        ''
      ].join('\n'))
    ];

    downloadFile(
      'ProTest-natija.txt',
      lines.join('\n'),
      'text/plain;charset=utf-8'
    );
  }

  function exportCSV() {
    const results = readResults();

    if (!results.length) {
      alert('Eksport qilish uchun natijalar yo‘q.');
      return;
    }

    const columns = [
      'Ism',
      'Familiya',
      'Guruh',
      'Mavzu',
      'Togri javob',
      'Noto‘g‘ri javob',
      'Jami savol',
      'Foiz',
      'Sana'
    ];

    const csvEscape = value =>
      `"${String(value ?? '').replace(/"/g, '""')}"`;

    const rows = results.map(result => [
      result.firstName,
      result.lastName,
      result.group,
      result.topic,
      result.correct,
      result.wrong,
      result.total,
      `${result.percent}%`,
      result.date
    ]);

    const csv = '\uFEFF' +
      [columns, ...rows]
        .map(row => row.map(csvEscape).join(','))
        .join('\r\n');

    downloadFile(
      'ProTest-natijalar.csv',
      csv,
      'text/csv;charset=utf-8'
    );
  }

  function clearResults() {
    if (!confirm(
      'Barcha saqlangan natijalarni o‘chirmoqchimisiz? Bu amalni qaytarib bo‘lmaydi.'
    )) return;

    if (writeResults([])) {
      renderAdmin();
      alert('Natijalar o‘chirildi.');
    }
  }

  els.checkButton.addEventListener('click', checkAnswer);

  els.backToTopics.addEventListener('click', () => {
    stopTimer();
    showView('topics');
  });

  els.topicsButton.addEventListener('click', () => {
    stopTimer();
    showView('topics');
  });

  els.retryButton.addEventListener('click', () => {
    startTopic(topicIndex);
  });

  els.adminOpen.addEventListener('click', openAdmin);

  els.adminClose.addEventListener('click', () => {
    showView('topics');
  });

  els.saveResultButton.addEventListener(
    'click',
    downloadCurrentResult
  );

  els.exportResultsButton.addEventListener('click', exportCSV);
  els.clearResultsButton.addEventListener('click', clearResults);

  document.addEventListener('keydown', event => {
    if (els.quizPanel.classList.contains('hidden')) return;

    const index = letters.indexOf(event.key.toUpperCase());

    if (
      index >= 0 &&
      index < els.answers.children.length &&
      !checked
    ) {
      els.answers.children[index].click();
    }

    if (event.key === 'Enter' && !els.checkButton.disabled) {
      els.checkButton.click();
    }
  });

  if (!topics.length) {
    els.topicGrid.textContent =
      'Mavzular topilmadi. questions.js faylini tekshiring.';
  } else {
    renderTopics();
  }
})();
