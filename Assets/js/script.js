// Get all Elements
const startBtn = document.querySelector (".startBtn button");
const infoCard = document.querySelector (".quizBox");
const Exit = infoCard.querySelector (".buttons .Exit");
const Restart = infoCard.querySelector (".buttons .Restart");

// Starting Button
startBtn.oneclick = ()=>{
    infoCard.classList.add("activeInfo");
}

// Exit Butotn
Exit.oneclick = ()=>{
    infoCard.classList.remove("activeInfo");
}




