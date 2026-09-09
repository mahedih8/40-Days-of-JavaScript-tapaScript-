//2. Build the Secret Number Guessing Game

// assumptions:
// 1. collecting user input
// 2. generate random numbers based on user's level
// 3. collect and compare user's guessing number inputs
// 4. shoing results 
// 5. play again option

// start here

// main function
function nmbrGuessingGame(){
    // variables
    let randomNumber;
    let attempt =0;
    let maxAttempt;
    let range;

    // user input collect
    let guessingLevelCollect = prompt(`Choose a guessing difficulty level(easy, medium or hard).`).toLowerCase();

    // difficulty level recive
    switch(guessingLevelCollect){
        case 'easy':
            maxAttempt = 5;
            range = 10;
            randomNumber = Math.ceil(Math.random()*10);
            console.log(randomNumber); // for testing, it will be removed / deactive in the final stage.
            break;
        case 'medium':
            maxAttempt = 7;
            range = 20;
            randomNumber = Math.ceil(Math.random()*20);
            console.log(randomNumber); // for testing, it will be removed / deactive in the final stage.
            break;
        case 'hard':
            maxAttempt = 5;
            range = 30;
            randomNumber = Math.ceil(Math.random()*30);
            console.log(randomNumber); // for testing, it will be removed / deactive in the final stage.
            break;
        default:
            console.error(`Enter a valid level(easy, medium or hard).`);
    }
    // condition checking
    while(attempt < maxAttempt){
        let guessingNumberCollect = parseInt(prompt(`Choose a number between 1 and ${range}, You have ${maxAttempt - attempt} ${maxAttempt - attempt ===1 ? 'attempt':'attempts'} left.`));
        
        // conditon
        if(randomNumber ===  guessingNumberCollect){
            console.log(`Congratulations! You won this game in ${attempt} ${attempt === 1? 'attempt':'attempts'}.`);
            break;
        }
        else if(randomNumber < guessingNumberCollect){
            console.log(`You guessed a bigger number, choose an smaller than you entered.`);
        }
        else{
            console.log(`You guessed an smaller number, choose a bigger one than you entered.`);
        }
        // 
        if(attempt === maxAttempt){
            console.log(`You have ran out of all attempts and the number was ${randomNumber}.`);
        }
        attempt++;
    }
}
nmbrGuessingGame();