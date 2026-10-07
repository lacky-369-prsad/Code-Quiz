const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const categoryGroup = document.getElementById('categoryGroup');
const difficultyGroup = document.getElementById('difficultyGroup');
const countGroup = document.getElementById('countGroup');
const startBtn = document.getElementById('startBtn');
const bestScoreBox = document.getElementById('bestScoreBox');

const progressFill = document.getElementById('progress');
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
    
} 