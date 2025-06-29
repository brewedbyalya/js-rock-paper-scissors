/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];


/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice; 
let msg;


/*------------------------ Cached Element References ------------------------*/
const rockBtnEl = document.querySelector('#rock');
const paperBtnEl = document.querySelector('#paper');
const scissorsBtnEl = document.querySelector('#scissors');
const resultDisplayEl = document.querySelector('#result-display');

/*-------------------------------- Functions --------------------------------*/
function getComputerChoice ()
{
    // 1. generate a random number 0-2
    const randomIndex = Math.floor(Math.random()*choices.length);
    // 2. select the item from the array
   return choices[randomIndex];
}

function play (event)
{
    computerChoice = getComputerChoice();
    playerChoice = event.target.id;

    compare();
    //after updating state, render to html
    render();
}

function compare ()
{
   if (playerChoice === computerChoice)
    {
        msg = "It's a tie!";
    } 
    else if (playerChoice === choices[0] && computerChoice === choices[2])
    {
        msg = "You win!";
    }
    else if (playerChoice === choices [1] && computerChoice === choices[0])
    {
        msg = "You win!";
    }
    else if (playerChoice === choices [2] && computerChoice === choices[1])
    {
        msg = "You win!";
    }
    else { msg = "You lost. Try again?"};
}

//updates html directly
function render ()
{
    resultDisplayEl.textContent = `Computer chose ${computerChoice},
    and you chose ${playerChoice}. ${msg}`;
}

/*----------------------------- Event Listeners -----------------------------*/
rockBtnEl.addEventListener('click', play);
paperBtnEl.addEventListener('click', play);
scissorsBtnEl.addEventListener('click', play);