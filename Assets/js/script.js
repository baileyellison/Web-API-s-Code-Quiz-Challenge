// Get all Elements
const startBtn = document.querySelector (".startBtn button");
const infoCard = document.querySelector (".infoCard");
const Exit_btn = infoCard.querySelector (".buttons .Exit");
const Continue = infoCard.querySelector (".buttons .Continue");
const quizBox = document.querySelector (".quizBox");

// Starting Button
startBtn.onclick = ()=>{
    infoCard.classList.add("activeInfo");
}

// Exit Button
Exit_btn.onclick = ()=>{
     infoCard.classList.remove("activeInfo");
}

// Show Quiz Box
Continue.onclick = ()=>{
    infoCard.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestions();
}

let questionCount = 0;

// Question functions
function showQuestions() {
    const context = document.querySelector(".context");
    let queTag = '<span>'+ questions[2].question +'</span>';
    context.innerHTML = queTag;
}



