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

/*-------------------------------- Functions --------------------------------*/
play();

function getComputerChoice ()
{
    // 1. generate a random number 0-2
    const randomIndex = Math.floor(Math.random()*choices.length);
    console.log('Random Index:', randomIndex);
    // 2. select the item from the array
   return choices[randomIndex];
}

function play ()
{
    computerChoice = getComputerChoice();
    console.log('computer choice:' , computerChoice);

    //after updating state, render to html
    render();
}

//updates html directly
function render ()
{

}

/*----------------------------- Event Listeners -----------------------------*/
