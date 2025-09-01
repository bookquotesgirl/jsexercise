let humanScore=0;
let computerScore=0;
const buttons=document.querySelectorAll("button");
const resultDiv=document.getElementById("results");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const humanChoice=button.id;
        playRound(humanChoice,getComputerChoice());
    });
})
function getComputerChoice(){
const choices=["rock","paper","scissors"];
const random=Math.floor(Math.random()*choices.length);
    return choices[random];
}

function playRound(humanChoice,computerChoice){
    let result="";
    if((humanChoice=="paper" && computerChoice=="rock")||(humanChoice=="scissors" && computerChoice=="paper")||(humanChoice=="rock" && computerChoice=="scissors")){
        humanScore++;
        result=`You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if((computerChoice==humanChoice)){
        result= `It's a tie! You both chose ${humanChoice}`;    
    }
    else{
        result=`You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    updateResults(result);
    checkWinner();
    }
    function updateResults(message){
        resultDiv.textContent=`${message} | Score: You ${humanScore}-Computer ${computerScore}`;
    }
function checkWinner(){
   if(humanScore===5||computerScore===5){

    if(humanScore>computerScore){
        resultDiv.textContent=`Congratulations, you win the game! Final Score: You ${humanScore}-Computer ${computerScore}`;
    }
     else{
        resultDiv.textContent=`Computer wins! Final Score: You ${humanScore} - Computer ${computerScore}`;
    } 
    disableButtons();
}
}
function disableButtons(){
    buttons.forEach(button=>button.disabled=true);
}
