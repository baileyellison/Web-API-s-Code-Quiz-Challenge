// Get all Elements
const startBtn = document.querySelector(".startBtn button");
const infoCard = document.querySelector(".infoCard");
const Exit_btn = infoCard.querySelector(".buttons .Exit");
const Continue = infoCard.querySelector(".buttons .Continue");
const quizBox = document.querySelector(".quizBox");
const submitBtn = document.querySelector(".Save");
const initialsText = document.querySelector(".form");
var existing = localStorage.getItem('results');
existing = existing ? existing.split(',') : [];
var queCount = 0;
var counter = 60;
var score = 0;

// Starting Button
startBtn.onclick = () => {
    function countdown() {
        counter--;
        if (counter === 0) {
            clearInterval(startCountdown)
            quizEnd()
        };
        let timeRemaining = document.querySelector(".timerSeconds");
        let timeTag = "<span>Time Remaining: " + counter + "</span>"
        timeRemaining.innerHTML = timeTag;
    };
    var startCountdown = setInterval(countdown, 1000);
    infoCard.classList.add("activeInfo");
    quizBox.classList.remove("activeInfo")
}

// Exit Button
Exit_btn.onclick = () => {
    infoCard.classList.remove("activeInfo");
}

// Show Quiz Box
Continue.onclick = () => {
    infoCard.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
}

let questionCount = 0;
let questionNumber = 1;

// Next button
const nextBtn = quizBox.querySelector(".nextBtn")

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        questionNumber++;
        showQuestions(questionCount);
        queCounter(questionNumber);
    } else (
        console.log("Questions complete!")
    )
}


// Question functions
function showQuestions(index) {
    if (queCount >= 10) {
        return;
    }
    const context = document.querySelector(".context");
    const optionList = document.querySelector(".answersList");
    let queTag = '<span>' + questions[index].num + "." + questions[index].question + '</span>';
    let answerTag = '<div class="option">' + questions[index].options[0] + '<span></span><span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span><span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span><span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span><span></span></div>';
    context.innerHTML = queTag;
    optionList.innerHTML = answerTag;
    const option = optionList.querySelectorAll("");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    if (queCount >= 10) {
        return;
    }
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    if (userAns == correctAns) {
        console.log("Correct!");
        const response = document.querySelector("#response");
        response.innerHTML = '<div id="response"><span>Correct!</span></div>';
        setTimeout(nextQuestion, 500)
        score += 1

    } else {
        console.log("Wrong :(");
        const response = document.querySelector("#response");
        response.innerHTML = '<div id="response"><span>Wrong!</span></div>';
        setTimeout(nextQuestion, 500)
        counter -= 10
    }
}
function nextQuestion() {
    queCount++;
    if (queCount == 10) {

        quizEnd()
    };
    showQuestions(queCount);
    const response = document.querySelector("#response");
    response.innerHTML = '<div id="response"><span></span></div>';
}


// bottom question counter
function questionCounter(index) {
    const questionNum = quizBox.querySelector("questionCount");
    let questionCountTag = '<span><p><b>' + index + '</b></p><p>of</p><p><b>' + questions.length + '</b></p><p>Questions</p><span></div>';
    questionNumber.innerHTML = questionCountTag
}


// timer
var timerNumber = document.querySelector(".timeSeconds")

var count = 60;
var myTimer;

var myClock = function () {
    count--
    timerNumber.innerHTML = count;
    if (count === 0) {
        clearInterval(myTimer);
    }
}

function clock() {
    instructions.classList.add('hide')
    questionContainer.classList.remove('hide')
    myTimer = setInterval(myClock, 1000);
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        element.addEventListener('click', () => {
            clearInterval(myTimer)
            timerNumber.innerHTML = count - 10
            myTimer = setInterval(myClock, 1000);
        })
    }
}

submitBtn.onclick = () => {
    let initials = initialsText.value;


    //Store Initials and Score in Local Storage
    var resultsDataObj = {
        initials: initials,
        score: score
    }
    localStorage.setItem((localStorage.length + 1), JSON.stringify(resultsDataObj));
    initialsText.value = ""
    location.reload();
}

// End of Quiz
function quizEnd() {
    quizBox.classList.add("activeInfo");
    endBox.classList.remove("activeInfo");
    const scoreText = document.querySelector(".finalScore");
    let scoreTag = '<h3 class="score"> Your score was ' + score + ' out of 5!</h3>';
    scoreText.innerHTML = scoreTag;
}
