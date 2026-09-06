
// Day 2 Tasks

//Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
let personInfo = {
    name: 'Mahedi Hasan',
    age: 26,
    isStudent: 'Yes',
    favoriteProgrammingLanguage: 'javaScript'
};

//  Task 2: Print the values to the console.
console.log(personInfo);

//  Task 3: Try reassigning values

let name = 'Mahedi';
name = 'Hasan';
console.log(name); // let allows to reassign and will print Hasan in console.

const firstName = 'Mahedi';
console.log(firstName); // printed Mahedi.

// firstName ='Md. Mahedi'; // const dosn't allow to reassinging for that shows an error 'Uncaught TypeError'.
console.log(firstName);


//Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

let fruitsArray = ['banana', 'mango', 'apple', 'jackfruit'];
let assingingArray = fruitsArray; // assigning and modifying 
assingingArray.push = 'pineapple'; // pineapple will be added in the main array 
console.log(assingingArray);

let infoObject = {
    name: 'Mahedi',
    age: 26,
    country: 'Bangladesh',
    role: 'Frontend Developer'
};

let updatedInfoObject = infoObject;
updatedInfoObject.favoriteProgrammingLanguage = 'JavaScript'; // javasript will be added in the main object.
console.log(updatedInfoObject);


