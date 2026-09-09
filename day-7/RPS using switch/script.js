'use strict';

// assumptions ........................
// 1. html selections
// 2. main function start and user's choice collect
// 3. computer's choice generate
// 4. condition apply to compare
// 5. winning announcement
// 6. again play / reset

// ........................ 
// start
// prevent form begavior
let formSelect = document.querySelector('form');
formSelect.addEventListener('submit', function (event){
    event.preventDefault();
})
// html selection
let btnSelect = document.getElementById('btn');
let resultUpdate =document.getElementById('result');
let ifoText = document.querySelector('.result_info');
let playAgainbtn = document.getElementById('play_again_btn');
let resultImageUpdate = document.getElementById('resultImage');
let gameInfoSelection = document.getElementById('game_info');

// main function
function rpsGame(){
    // collecting user's choice by using radio type input
    let userChoiceInput = document.querySelector('input[name="select_one"]:checked'); 
    let userChoiceSelect = userChoiceInput.value;
    
    // computer choice generate
    let randomN = Math.ceil(Math.random()*3);

    // relating random numbers with game values
    switch(randomN){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
        default:
            console.log(`Nothing`);
    }

    // compare according to the game conditions
    // in this case user will be the winner
    if(
        (userChoiceSelect === 'rock' && computerChoice ==='scissors') ||
        (userChoiceSelect === 'paper' && computerChoice ==='rock') ||
        (userChoiceSelect === 'scissors' && computerChoice ==='paper') 
    ){
        resultUpdate.textContent='You are the winniner😉';
        ifoText.textContent = `Computer is selected ${computerChoice}.`
        resultImageUpdate.src = 'img/congratulation.gif';
    }

    // in this case the game will be tie
    else if(userChoiceSelect === computerChoice){
        resultUpdate.textContent='The game is tie😎';
        ifoText.textContent = `Both are the same.`
        resultImageUpdate.src = 'img/tie.jfif';
    }

    // in this case computer will be the winner
    else if(
        (userChoiceSelect === 'rock' && computerChoice ==='paper') ||
        (userChoiceSelect === 'paper' && computerChoice ==='scissors') ||
        (userChoiceSelect === 'scissors' && computerChoice ==='rock') 
    ){
        resultUpdate.textContent='Computer is winner😒';
        ifoText.textContent = `Computer is selected ${computerChoice}.`
        resultImageUpdate.src = 'img/onemore.webp';

    }
    // for game conditon update
    // for rock winning
    if(
        (userChoiceSelect === 'rock' && computerChoice ==='scissors')||
        (userChoiceSelect === 'scissors' && computerChoice ==='rock')
    )
    {
        gameInfoSelection.textContent = 'Rock crushes Scissors → Rock wins';
    }
    // for paper winning
    else if(
        (userChoiceSelect === 'paper' && computerChoice ==='rock')||
        (userChoiceSelect === 'rock' && computerChoice ==='paper')
    ){
        gameInfoSelection.textContent = 'Paper wraps Rock → Paper wins';
    }
    // for the game tie
    else if(userChoiceSelect === computerChoice){
        gameInfoSelection.textContent = `Hahaha🤣 Computer is also selected ${computerChoice}`;
    }
    // for scissor winning
    else{
        gameInfoSelection.textContent = 'Scissors cuts Paper → Scissors wins';
    }
}

// main function calling
btnSelect.addEventListener('click', rpsGame); 

// reset / clean button
playAgainbtn.addEventListener('click', function(){  
    location.reload();
});
