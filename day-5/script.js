// day - 5

// 1. Generate a Pyramid Pattern using Nested Loop

// I took help from AI  ////////////

for(let i = 1; i<=5; i++){
    let star = '';
    for(let m=1; m<=i; m++){
        star = star + '*';
    }
    console.log(star);
}


//2. Craete Multiplication Table (Using for loop)
let numb = 5;
for(let num = 1; num<=10; num++){
    let multiply = num*numb;
    // console.log(multiply);
    console.log(`${num} x ${numb} = ${multiply}`);
}

//3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let toGenerateSummation = 0;
for(let num=1; num<=500; num++){
    // console.log(num);
    if (num%2===0+1) {
        // console.log(num);
        toGenerateSummation = toGenerateSummation + num;
    }
}
console.log(`Summation of(odd 1-500)= ${toGenerateSummation}`);

// 4. Skipping Multiples of 3
for(let num = 1; num<=20; num++){
    if(num%3===0) continue;
    console.log(num);
}


// I can't solve it, but took help from AI

// 5. Reverse Digits of a Number (Using while loop) 
// let numberInput = 6789;

// while(numberInput%10){
//     console.log(numberInput);
//     numberInput++;
// }
// console.log(k);

let number = 6789;
let reverse = 0;
while (number > 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}
console.log(reverse);



// 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.

// FLOWCHART is in repository aj a jpg image.

// For: When we know how many times the loop will run, in this case for loop is better.

// While: When we don't know how many times the loop will run, but have a condition.

// Do while: When we have a condition, but we still need to run, we must be once. In this case, we can use do while.
