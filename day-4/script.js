// day - 4 task

// 1. What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

// here output will be "it's a normal day." Because case is dosn't extact match so it will execute defoult.

// 2. Build an ATM Cash Withdrawal System

let withdrawalAmount = 255;
    // withdrawalAmount = 200; // it will work.
if (withdrawalAmount %100 === 0) {
    console.log(`${withdrawalAmount} taka is Withdrawal successful.`);
}else{
    console.log(`${withdrawalAmount} is invalid amount please enter a amount that multiples of 100.`);
}

//3. Build a Calculator with switch-case

let num1 = 10;
let num2 = 15;
let calculateWith = '%';
switch(calculateWith){
    case '+':
        console.log(num1 + num2, 'Sum Value');
        break;
    case '-':
        console.log(num1 - num2, 'Substraction Value');
        break;
    case '*':
        console.log(num1 * num2, 'Multipication Value');
        break;
    case '/':
        console.log(num1 / num2, 'Division Value');
        break;
    case '%':
        console.log(num1 % num2, 'Remainder Value');
        break;
    default:
        console.log(`Please enter a valid operator((+, -, , /, %)`);
}

// 4. Pay for your movie ticket
let customerAge = 25;
if(customerAge >= 60){
    console.log(`You are a senior person so you need to pay $8 for a ticket.`);
}else if(customerAge >= 18){
    console.log(`You are an adult, so you need to pay $10 for a ticket.`);
}else{
    console.log(`You are a child, so you need to pay $3 for a ticket.`);
}

// 5. Horoscope Sign Checker

let userBirthMonth = 'may';
switch(userBirthMonth){
    case 'january':
        console.log(`Capricorn`);
        break;
    case 'february':
        console.log(`Aquarius`);
        break;
    case 'march':
        console.log(`Pisces`);
        break;
    case 'april':
        console.log(`Aries`);
        break;
    case 'may':
        console.log(`Taurus`);
        break;
    case 'june':
        console.log(`Gemini`);
        break;
    case 'july':
        console.log(`Cancer`);
        break;
    case 'august':
        console.log(`Leo`);
        break;
    case 'september':
        console.log(`Virgo`);
        break;
    case 'october':
        console.log(`Libra`);
        break;
    case 'november':
        console.log(`Scorpio`);
        break;
    case 'december':
        console.log(`Sagittarius`);
        break;
    default:
    console.error(`Please enter a valid birth month.`);
    
}

// 6. Which Triangle?
let triangleSides = prompt(`Define triangle sides to know what is it.`).toLowerCase();

switch(triangleSides){
    case 'two sides equal':
        console.log(`It's an Isosceles Triangle.`);
        break;
    case 'all sides equal':
        console.log(`It's an Equilateral Triangle.`);
        break;
    case 'all sides different':
        console.log(`It's a Scalene Triangle.`);
        break;
}