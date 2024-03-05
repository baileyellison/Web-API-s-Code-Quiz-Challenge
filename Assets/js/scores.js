const finalScoresText = document.querySelector("finalScores");
let finalScoresTag = '';


for (let i = 0; i < localStorage.length; i++) {
finalScoreData = JSON.parse(localStorage.getItem(i+1));
finalScoresTag = highScoresTag.concat('</br><div class=finalScores">'+ finalScoreData.initials + " "+"-"+" " + finalScoreData.score +'</div>');
};

finalScoresText.innerHTML = finalScoresTag;