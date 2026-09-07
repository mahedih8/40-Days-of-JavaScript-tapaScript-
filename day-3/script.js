
// Day 3 Tasks
// 1. Odd or Even?

let num = 23; // it can be a random number
if (num %2 ===0) { // checking is it an Even or Not.
    console.log(`It's an Even Number`); // console output
}else{
    console.log(`It's an Odd Number.`); // console output
}

//2. Do you have a Driving License?
let age = 19;
if(age >= 18){ // here this conditon will check the age is equal or bigger than 18.
    console.log(`You are elligible for a driving license.`);
}else{
    console.log(`You are not elligible.`);
}

// 3. Calculate CTC with a Bonus
let monthlySalary = 12300;
let annualBonus = ((monthlySalary *12)/100)*20; // 20% of annual
console.log(`CTC:`, monthlySalary*12 + annualBonus); // CTC

// 4. Write a program for the Traffic Light Simulation.

let color = 'red';
if(color === 'red'){
    console.log(`STOP`);
}else if(color === 'green'){
    console.log(`GO`);
};

//5. Create an Electricity Bill Calculator
let usedUnits = 70;
let perUnitCost = 150;
let monthlyCost = usedUnits*perUnitCost;
console.log(`Monthly charge approximate:`, monthlyCost );
let annualPaymentWithDiscount = monthlyCost*12 - (monthlyCost*12)/100*20; // Neat payable amount without discount.
console.log(`Annual Payment:`, annualPaymentWithDiscount);

// // 6. Leap Year Checker   “যদি বছরটি 400 দিয়ে নিঃশেষে বিভাজ্য হয়, অথবা 4 দিয়ে বিভাজ্য হয় কিন্তু 100 দিয়ে বিভাজ্য না হয়—তাহলে Leap Year।”

let year = 2020;
if((year %4 ===0) || (year %4 === 0 && year %100 !==0)){
    console.log(`${year} is a leap year.`);
}else{
    console.log(`${year} is not a leap year.`);
}

//7. Max of Three Numbers

let p = 30;
let q = 45;
let r = 20;

if(p>q && p>r){
    console.log(`${p} is the bigger number.`);
}else if(r>q && r>p){
    console.log(`${r} is the bigger number.`);
}else{
    console.log(`${q} is the bigger number.`);
}