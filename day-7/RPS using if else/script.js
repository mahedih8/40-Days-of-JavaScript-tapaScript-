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
// prevent defoult form begavior
let formSelect = document.querySelector('form');
formSelect.addEventListener('submit', function (event){
    event.preventDefault();
})

// html selection
let btnSelect = document.getElementById('btn'); // play button
let resultUpdate =document.getElementById('result');
let ifoText = document.querySelector('.result_info');
let cleanBtn = document.getElementById('play_again_btn'); // clean button
let resultImageUpdate = document.getElementById('resultImage');
let gameInfoSelection = document.getElementById('game_info');


// main function
function rpsGame(){
    // collecting user's choice by radio type input
    let userChoiceInput = document.querySelector('input[name="select_one"]:checked');
    let userChoiceSelect = userChoiceInput.value;

    // computer choice generate
    let randomN = Math.ceil(Math.random()*3); // because maximum 3 possibilities ca be
    let computerChoice;

    // relating random numbers with game values
    if(randomN === 1){
        computerChoice = 'rock';
    }else if(randomN === 2){
        computerChoice = 'paper';
    }else{
        computerChoice = 'scissors';
    }

    // comparison according to the game conditions
    // in this case user will be the winner
    if(  
        (userChoiceSelect === 'rock' && computerChoice ==='scissors') ||
        (userChoiceSelect === 'paper' && computerChoice ==='rock') ||
        (userChoiceSelect === 'scissors' && computerChoice ==='paper') 
    ){
        resultUpdate.textContent='You are the winniner😉'; // announcement
        ifoText.textContent = `Computer is selected ${computerChoice}.`
        resultImageUpdate.src = 'img/congratulation.gif';  // image update
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

    // fro game conditon update
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
cleanBtn.addEventListener('click', function(){  
    location.reload();
});
