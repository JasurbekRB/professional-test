(() => {
  const topics = window.TEST_TOPICS || [];
  const $ = (id) => document.getElementById(id);
  const els = {
    hero: $('hero'), topicPanel: $('topicPanel'), topicGrid: $('topicGrid'), quizPanel: $('quizPanel'), resultPanel: $('resultPanel'),
    totalQuestions: $('totalQuestions'), totalTopics: $('totalTopics'), topicCount: $('topicCount'), quizTopicLabel: $('quizTopicLabel'),
    questionCounter: $('questionCounter'), progressPercent: $('progressPercent'), progressFill: $('progressFill'), questionTag: $('questionTag'),
    questionText: $('questionText'), answers: $('answers'), feedback: $('feedback'), checkButton: $('checkButton'), backToTopics: $('backToTopics'),
    resultIcon: $('resultIcon'), resultTitle: $('resultTitle'), resultSubtitle: $('resultSubtitle'), scoreCircle: $('scoreCircle'), scorePercent: $('scorePercent'),
    correctCount: $('correctCount'), wrongCount: $('wrongCount'), scoreTotal: $('scoreTotal'), retryButton: $('retryButton'), topicsButton: $('topicsButton'), footerYear: $('footerYear')
  };
  let topicIndex = 0, questionIndex = 0, selectedIndex = null, checked = false, correct = 0;
  const letters = ['A','B','C','D','E','F'];
  const totalQuestions = topics.reduce((sum, topic) => sum + topic.questions.length, 0);
  els.totalQuestions.textContent = totalQuestions;
  els.totalTopics.textContent = topics.length;
  els.topicCount.textContent = `${topics.length} MAVZU`;
  els.footerYear.textContent = `© ${new Date().getFullYear()} ProTest`;

  function renderTopics() {
    els.topicGrid.innerHTML = '';
    topics.forEach((topic, index) => {
      const card = document.createElement('button');
      card.className = 'topic-card'; card.type = 'button';
      card.innerHTML = `<span class="topic-number">${String(index + 1).padStart(2,'0')}</span><span><h3>${escapeHTML(topic.title)}</h3><p>${topic.questions.length} ta savol · Testni boshlash</p></span><span class="topic-arrow">↗</span>`;
      card.addEventListener('click', () => startTopic(index));
      els.topicGrid.appendChild(card);
    });
  }
  function escapeHTML(value) { return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
  function showView(view) {
    els.hero.classList.toggle('hidden', view !== 'topics');
    els.topicPanel.classList.toggle('hidden', view !== 'topics');
    els.quizPanel.classList.toggle('hidden', view !== 'quiz');
    els.resultPanel.classList.toggle('hidden', view !== 'result');
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  function startTopic(index) { topicIndex = index; questionIndex = 0; selectedIndex = null; checked = false; correct = 0; showView('quiz'); renderQuestion(); }
  function renderQuestion() {
    const topic = topics[topicIndex], item = topic.questions[questionIndex];
    selectedIndex = null; checked = false;
    els.quizTopicLabel.textContent = topic.title.toUpperCase();
    els.questionCounter.textContent = `Savol ${questionIndex + 1} / ${topic.questions.length}`;
    const percent = Math.round((questionIndex / topic.questions.length) * 100);
    els.progressPercent.textContent = `${percent}%`; els.progressFill.style.width = `${percent}%`;
    els.questionTag.textContent = `SAVOL ${String(questionIndex + 1).padStart(2,'0')}`;
    els.questionText.textContent = item.q; els.answers.innerHTML = '';
    els.feedback.className = 'feedback hidden'; els.feedback.textContent = '';
    item.a.forEach((answer, index) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'answer-option';
      button.innerHTML = `<span class="answer-letter">${letters[index] || index + 1}</span><span>${escapeHTML(answer)}</span>`;
      button.addEventListener('click', () => { if (checked) return; selectedIndex = index; [...els.answers.children].forEach((el, i) => el.classList.toggle('selected', i === index)); els.checkButton.disabled = false; });
      els.answers.appendChild(button);
    });
    els.checkButton.disabled = true; els.checkButton.innerHTML = 'Javobni tekshirish <span>→</span>';
  }
  function checkAnswer() {
    const item = topics[topicIndex].questions[questionIndex];
    if (!checked) {
      if (selectedIndex === null) return;
      checked = true;
      const buttons = [...els.answers.children];
      buttons.forEach((button, index) => { button.disabled = true; if (index === item.c) button.classList.add('correct'); if (index === selectedIndex && selectedIndex !== item.c) button.classList.add('incorrect'); });
      const isCorrect = selectedIndex === item.c;
      if (isCorrect) correct++;
      els.feedback.textContent = isCorrect ? 'To‘g‘ri! Barakalla.' : `Noto‘g‘ri. To‘g‘ri javob: ${item.a[item.c]}`;
      els.feedback.className = `feedback ${isCorrect ? 'good' : 'bad'}`;
      els.checkButton.innerHTML = questionIndex === topics[topicIndex].questions.length - 1 ? 'Natijani ko‘rish <span>→</span>' : 'Keyingi savol <span>→</span>';
      els.progressPercent.textContent = `${Math.round(((questionIndex + 1) / topics[topicIndex].questions.length) * 100)}%`;
      els.progressFill.style.width = `${((questionIndex + 1) / topics[topicIndex].questions.length) * 100}%`;
    } else {
      if (questionIndex < topics[topicIndex].questions.length - 1) { questionIndex++; renderQuestion(); }
      else showResults();
    }
  }
  function showResults() {
    const total = topics[topicIndex].questions.length, percent = Math.round(correct / total * 100), wrong = total - correct;
    els.scorePercent.textContent = `${percent}%`; els.correctCount.textContent = correct; els.wrongCount.textContent = wrong; els.scoreTotal.textContent = `${correct}/${total}`;
    els.scoreCircle.style.background = `radial-gradient(circle at center,#121a31 58%,transparent 59%),conic-gradient(var(--purple) ${percent}%,#ffffff14 ${percent}%)`;
    els.resultIcon.textContent = percent >= 80 ? '✓' : percent >= 50 ? '★' : '↻';
    els.resultTitle.textContent = percent >= 80 ? 'Ajoyib natija!' : percent >= 50 ? 'Yaxshi harakat!' : 'Mashq qilishda davom eting!';
    els.resultSubtitle.textContent = `“${topics[topicIndex].title}” mavzusi bo‘yicha natijangiz.`;
    showView('result');
  }
  els.checkButton.addEventListener('click', checkAnswer);
  els.backToTopics.addEventListener('click', () => showView('topics'));
  els.topicsButton.addEventListener('click', () => showView('topics'));
  els.retryButton.addEventListener('click', () => startTopic(topicIndex));
  document.addEventListener('keydown', (event) => {
    if (els.quizPanel.classList.contains('hidden')) return;
    const key = event.key.toUpperCase();
    const index = letters.indexOf(key);
    if (index >= 0 && index < els.answers.children.length && !checked) els.answers.children[index].click();
    if (event.key === 'Enter' && !els.checkButton.disabled) els.checkButton.click();
  });
  renderTopics();
})();
