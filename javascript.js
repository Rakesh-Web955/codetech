const questions = [{
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        answer: 0
    },
    {
        question: "What is the correct syntax for an arrow function?",
        options: [
            "function => ()",
            "() => {}",
            "() -> {}"
        ],
        answer: 1
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            "font-style",
            "text-size",
            "font-size"
        ],
        answer: 2
    },
    {
        question: "Which language is used for web apps?",
        options: [
            "PHP",
            "Python",
            "JavaScript"
        ],
        answer: 2
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const current = questions[currentIndex];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    nextBtn.classList.add("hidden");

    current.options.forEach((option, i) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(i, btn);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, selectedBtn) {
    const correctIndex = questions[currentIndex].answer;
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctIndex) btn.classList.add("correct");
        if (index === selectedIndex && index !== correctIndex) {
            btn.classList.add("wrong");
        }
    });

    if (selectedIndex === correctIndex) {
        feedbackEl.textContent = "✅ Correct!";
        score++;
    } else {
        feedbackEl.textContent = "❌ Incorrect!";
    }

    nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}

loadQuestion();