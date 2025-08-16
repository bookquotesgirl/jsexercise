let humanScore=0;
let computerScore=0;
function getComputerChoice(){
const game=["rock","paper","scissors"];
const random=Math.floor(Math.random()*game.length);
    return game[random];
}
function getHumanChoice(){
    const answer=prompt("Rock,paper,Scissors");
    return answer.toLowerCase();
}
function playRound(humanChoice,computerChoice){
    let result="";
    if((humanChoice=="paper" && computerChoice=="rock")||(humanChoice=="scissors" && computerChoice=="paper")||(humanChoice=="rock" && computerChoice=="scissors")){
       result= "You win!" + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else if((computerChoice=="paper" && humanChoice=="rock")||(computerChoice=="scissors" && humanChoice=="paper")||(computerChoice=="rock" && humanChoice=="scissors")){
        result="You lose!" + computerChoice + " beats " + humanChoice;
        computerScore++;
        
    }
    else{
        result= "It's a tie! You both chose " + humanChoice;
    }
   console.log(result);
   alert(result);
    }
function playGame(){
   
       
    for(let i=0;i<5;i++){
        let humanSelection=getHumanChoice();
        let computerSelection=getComputerChoice();
playRound(humanSelection,computerSelection);
    }
    console.log("Final Score:");
    console.log("You: " + humanScore + " Computer: " + computerScore);
    if(humanScore>computerScore){
        console.log("Congratulations, you win the game!");
    }
    else if(computerScore>humanScore){
        console.log("Computer won the game!");
    }
    else{
        console.log("It's a tie");
    } 
}

playGame();

