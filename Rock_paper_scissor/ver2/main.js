function machinePlay() {
    let randomizer = Math.floor(Math.random() * 3);
    if(randomizer == 0) {
        return "rock";
    }
    else if (randomizer == 1 ) {
        return "paper";
    }
    else return "scissor";
}

function playRound(playerSelection, computerSelection) {
    if((playerSelection=="rock" &&  computerSelection=="scissor") ||
        (playerSelection=="paper" && computerSelection=="rock") ||
        (playerSelection=="scissor" && computerSelection=="paper")) {
        return 1;
    }
    else if(playerSelection==computerSelection) {
        return 0;
    }
    else return -1;
}



function updateScoreBoard(integer1,integer2,playerScore,machineScore,Score) {
    if(Score===1) {
        playerScore.textContent = "Player's score: " + integer1;
    }
    else if (Score===0) {
        
    }
    else {
        machineScore.textContent = "Machine's score: " + integer2;
    }
}
function updateJudgeBoard(judgeMessage,score) {
    if(score === 1) {
        judgeMessage.textContent = "You win this round";
    }
    else if (score===0) {
        judgeMessage.textContent = "You tie this round";
    }
    else {
        judgeMessage.textContent = "Machine wins this round";
    }
}

const playerScoreBoard = document.querySelector(".playerScore");
const machineScoreBoard = document.querySelector(".machineScore");

const playerScore = document.createElement("h1");
let _playerScore = 0;

const machineScore = document.createElement("h1");
let _machineScore = 0;

playerScore.textContent = "Player's score: " + _playerScore;
machineScore.textContent = "Machine's score: " + _machineScore;

playerScoreBoard.appendChild(playerScore);
machineScoreBoard.appendChild(machineScore);



const judgeBoard = document.querySelector(".judgeBoard");
const message = document.createElement("h2");
message.textContent = "Press one of the 3 buttons to start the game";
judgeBoard.appendChild(message);
playerSelection = "";
machineSelection = "";
const rockButton = document.querySelector("#rock");
const buttons = document.querySelectorAll(".gameButton");
buttons.forEach(button => button.addEventListener("click", function () {
        playerSelection = button.textContent.toLowerCase();
        console.log(playerSelection);
        machineSelection = machinePlay();
        console.log(machineSelection);
        score = playRound(playerSelection,machineSelection);
        if(score === 1) _playerScore++;
        else if(score === -1) _machineScore++;
        updateScoreBoard(_playerScore,_machineScore,playerScore,machineScore,score);
        updateJudgeBoard(message,score);
}));











