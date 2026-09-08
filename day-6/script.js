
// day 6 task

// 1. Write a Function to Convert Celsius to Fahrenheit

// let temperatureInCelsius = 40;
function temperatureConverter(temperatureInCelsius) {
    console.log(`${temperatureInCelsius} Temperature in Fahrenheit =`, (temperatureInCelsius * 9/5) +32);
}
temperatureConverter(23);

//2. Create a Function to Find the Maximum of Two Numbers

// let num1 =30;
// let num2 = 40;

function findMax(num1, num2){
    if (num1 >num2) {
        console.log(`${num1} is the maximum between(${num1} and ${num2}).`);
    }else if(num2 > num1){
        console.log(`${num2} is the maximum between(${num1} and ${num2}).`);
    }else{
        console.log(`${num1} and ${num2} are equal number.`);
    }
};
findMax(-45, 34);

// 3. Function to Check if a String is a Palindrome

function isPalindrome(str){
    let reverse = str.split("").reverse().join("");
    if(str === reverse){
        console.log(`(${str}) is palindrome`);
    }else{
        console.log(`(${str}) is not palindrome`);
    }
}
isPalindrome('level');
isPalindrome('Mahedi');


//4. Write a Function to Find Factorial of a Number

let numberInput = 8;
let makeFactorial = 1;
function factorialF(){
    for(let n = 1; n<=numberInput; n++){
        // console.log(n);
        makeFactorial = makeFactorial *n;
    }
    console.log(`Factorial of(!${numberInput}) =`, makeFactorial);
}
factorialF();


// 5. Write a function to Count Vowels in a String

function vowelCounting(str){
    let lowerCase = str.toLowerCase();  // to convert the string in lowerCase. 
    let vowelStore = '';
    // console.log(lowerCase); // for testing
    for(let m = 0; m<=lowerCase.length-1; m++){
        // console.log(lowerCase[m]); // for testing
        if('aeiou'.includes(lowerCase[m])){
            vowelStore += lowerCase[m];
            // vowelStore = vowelStore + lowerCase[m];
        }
    }
    console.log(str);
    console.log(`Vowels are(${vowelStore.length}) = ${vowelStore}`);
}
vowelCounting('Mahedi Hasan');


// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// I have to took help from AI for this task
function capitalizeFirstWord(str){
    // console.log(seperateStr);
    let saveUpdatedStr =[];
    let seperateStr = str.split(" ");
    for(let m of seperateStr){
        let upperCase = m[0].toUpperCase() + m.slice(1);
        saveUpdatedStr.push(upperCase);
    }
    let finalStr = saveUpdatedStr.join(" ");
    console.log(`"this is mahedi" ${finalStr}`);
}
capitalizeFirstWord('this is mahedi');


// 7. Use an IIFE to Print “Hello, JavaScript!”
(function(text){
    console.log(`Hello, ${text}!`);
})('JavaScript');

// 8. Create a Simple Callback Function

function greet(name, callback){
    console.log(`"By parameter and argument"- ${name} ${callback}.`);
}
greet('Mahedi', 'is trying to be a frontend developer');

// 9. Create Call Stack Execution Diagram for this flow
// This task is in github repository as an image.

// 10. Create Call Stack Execution Diagram for this flow
// This task is in github repository as an image.