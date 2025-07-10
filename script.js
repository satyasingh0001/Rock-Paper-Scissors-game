// Modular way of programming meaning making multiple function, that can be use in future projects.

const choices = document.querySelectorAll(".choice");
const msgCont = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let uScore = 0;
let cScore = 0; 


choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        let userChoose = choice.getAttribute("id");
        console.log("you choose =", userChoose);
        randomChoose(userChoose);
    });
});

const showWinner = (win) =>{
    if(win){
        console.log("You win");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
        uScore++;
        userScore.innerText = uScore;
    }
    else{
        console.log("Computer win");
        msg.innerText = "Computer Win";
        msg.style.backgroundColor = "red";
        cScore++;
        compScore.innerText = cScore;
    }
};

const checkWinner = (userChoose, rps) => {
    if(userChoose===rps){
        console.log("Game Draw");
        msg.innerText = "Game Draw";
        msg.style.backgroundColor = "grey";
    }else {
        let win = true;
        if(userChoose==="rock"){
            //paper, scissor
            win = rps === "scissor" ? true : false ; 
        }else if(userChoose==="paper"){
            //rock, scissor
            win = rps === "rock" ? true : false ; 
        }else if(userChoose==="scissor"){
            //paper, rock
            win = rps === "paper" ? true : false ; 
        }
        showWinner(win);
    }
};

const compChoose = (compNum, userChoose) => {
    let rps;
    if (compNum===0){
        console.log("comp choose = rock");
        rps="rock";
    }else if(compNum===1){
        console.log("comp choose = paper");
        rps="paper";
    }else if(compNum===2){
        console.log("comp choose = scissor");
        rps="scissor";
    }
    checkWinner(userChoose, rps);
};

const randomChoose = (userChoose) => {
    let compNum = Math.floor(Math.random()*3);
    compChoose(compNum, userChoose);
};