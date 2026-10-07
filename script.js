const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const categoryGroup = document.getElementById('categoryGroup');
const difficultyGroup = document.getElementById('difficultyGroup');
const countGroup = document.getElementById('countGroup');
const startBtn = document.getElementById('startBtn');
const bestScoreBox = document.getElementById('bestScoreBox');

const progressFill = document.getElementById('progressFill');
const questionCounter = document.getElementById('questionCounter');
const streakDisplay = document.getElementById('streakDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const questionCategory = document.getElementById('questionCategory');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');

const resultEmoji = document.getElementById('resultEmoji');
const resultScore = document.getElementById('resultScore');
const resultAccuracy =document.getElementById('resultAccuracy');
const resultBest = document.getElementById('resultBest');
const categoryBreakdown = document.getElementById('categoryBreakdown');
const playAgainBtn = document.getElementById('playAgainBtn');
const changeSettingsBtn = document.getElementById('changeSettingsBtn');

let selectedCategory = 'All';
let selectedDifficulty = 'all';
let selectedCount = 10;

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let maxStreak = 0;
let correctCount = 0;
let timer = null;
let timeLeft = 20;
const TIME_PER_QUESTION = 20;
let breakdown = {}

function setupPillGroup(group, callback) {
    group.querySelectorAll('.pill').forEach(btn => {
        btn.addEventListener('click', () => {
            group.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            callback(btn.dataset.value);
        });
    });
}

setupPillGroup(categoryGroup, (val) => selectedCategory = val);
setupPillGroup(difficultyGroup, (val) => selectedDifficulty = val);
setupPillGroup(countGroup, (val) => selectedCount = parseInt(val));

function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
[arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getBestScoreKey() {
    return `codequiz_best_${selectedCategory}_${selectedDifficulty}_${selectedCount}`;
}

function showBestScore() {
    const key = getBestScoreKey();
    const best = localStorage.getItem(key);
    bestScoreBox.textContent = best ? `Best score for this setup: ${best}/${selectedCount}` : '';
}

categoryGroup.addEventListener('click', showBestScore);
difficultyGroup.addEventListener('click', showBestScore);
countGroup.addEventListener('click', showBestScore);
showBestScore();

startBtn.addEventListener('click', startQuiz);
playAgainBtn.addEventListener('click', startQuiz);
changeSettingsBtn.addEventListener('click', () => showScreen(startScreen));

function startQuiz() {
    let pool = QUESTION.filter(q => {
        const catMatch = selectedCategory === 'All' || q.category === selectedCategory;
        const diffMatch = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
        return catMatch && diffMatch;
    });

    pool = shuffle(pool);
    quizQuestions = pool.slice(0, Math.min(selectedCount, pool.length));

    currentIndex = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;
    correctCount = 0;
    breakdown = {};

    showScreen(quizScreen);
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    timeLeft = TIME_PER_QUESTION;
    updateTimerDisplay();

    const q = quizQuestions[currentIndex];
    questionCounter.textContent = `Question ${currentIndex + 1}/${quizQuestions.length}`;
    streakDisplay.textContent = `🔥 ${streak}`;
    questionCategory.textContent = `${q.category} · ${q.difficulty}`;
    questionText.textContent = q.question;

    const progressPct = (currentIndex / quizQuestions.length) * 100;
    progressFill.style.width = progressPct + '%';

    optionsContainer.innerHTML = '';

    // Options ko original index ke saath jodo, fir shuffle karo
    // taaki sahi jawab har baar alag position (A/B/C/D) par aaye
    let optionsWithIndex = q.options.map((opt, idx) => ({ opt, originalIndex: idx }));
    optionsWithIndex = shuffle(optionsWithIndex);

    optionsWithIndex.forEach(({ opt, originalIndex }) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.dataset.index = originalIndex;
        btn.addEventListener('click', () => selectAnswer(originalIndex, q));
        optionsContainer.appendChild(btn);
    });

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectAnswer(-1, q);
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = `⏱ ${timeLeft}`;
    timerDisplay.classList.remove('warning', 'danger');
    if (timeLeft <= 5) timerDisplay.classList.add('danger');
    else if (timeLeft <= 10) timerDisplay.classList.add('warning');
}

function selectAnswer(chosenIdx, question) {
    clearInterval(timer);
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.classList.add('disabled'));

    const isCorrect = chosenIdx === question.answer;

    allBtns.forEach(b => {
        const idx = parseInt(b.dataset.index);
        if (idx === question.answer) {
            b.classList.add('correct');
        } else if (idx === chosenIdx) {
           b.classList.add('wrong');
        }
 });

    if (!breakdown[question.category]) {
        breakdown[question.category] = { correct: 0, total: 0 };
    }
    breakdown[question.category].total++;

    if (isCorrect) {
        score += 10 + (streak * 2);
        streak++;
        correctCount++;
        maxStreak = Math.max(maxStreak, streak);
        breakdown[question.category].correct++;
    } else {
        streak = 0;
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 900);
}

function showResults() {
    progressFill.style.width = '100%';
    const accuracy = Math.round((correctCount / quizQuestions.length) * 100);

    let emoji = '🙂';
    if (accuracy >= 90) emoji = '🏆';
    else if (accuracy >= 70) emoji = '🎉';
    else if (accuracy >= 50) emoji = '👍';
    else emoji = '📚';

    resultEmoji.textContent = emoji;
    resultScore.textContent = `Score: ${score}`;
    resultAccuracy.textContent = `${correctCount}/${quizQuestions.length} correct · ${accuracy}% accuracy · Best streak: ${maxStreak}`;

      const key = getBestScoreKey();
      const prevBest = parseInt(localStorage.getItem(key) || '0');
  if (correctCount > prevBest) {
         localStorage.setItem(key, correctCount);
         resultBest.textContent = '🎉 New best score for this setup!';
  } else {
resultBest.textContent = `Best for this setup: ${prevBest}/${quizQuestions.length}`;
         }

categoryBreakdown.innerHTML = '';
    Object.keys(breakdown).forEach(cat => {
      const item = breakdown[cat];
      const div = document.createElement('div');
            div.className = 'breakdown-item';
            div.innerHTML = `<span>${cat}</span><span>${item.correct}/${item.total}</span>`;
            categoryBreakdown.appendChild(div);
        });

           showScreen(resultScreen);
 }