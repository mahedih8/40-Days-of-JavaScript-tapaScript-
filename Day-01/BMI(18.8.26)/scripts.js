//selection
let form = document.getElementById('form');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.querySelector('button');
let score = document.getElementById('score');
let result = document.getElementById('result');


button.addEventListener('click', function(){
    // customize variables
    let newHeight = parseFloat(height.value)/100;
    let sqrHeight = newHeight *newHeight;
    let newWeight = parseFloat(weight.value);
    let calculateBMI = newWeight / sqrHeight;
    result.textContent = calculateBMI.toFixed(2);
    if(calculateBMI <18.6){
        result.style.color = 'orange';
    }
    else if(calculateBMI <24.9){
        result.style.color = 'green';
    }
    else{
        result.style.color = 'red';

    }
});


form.addEventListener('submit', function(m){
    m.preventDefault();
});

// if(calculateBMI < 18.6){
//     result.style.color = 'orange';
//     suggestionText.textContent = 'Your BMI is lower than standard range, take care yourself to maintain a good health.';
// }
// else if(calculateBMI < 24.9){
//     result.style.color = 'green';
//     suggestionText.textContent = 'Your BMI is in standard range, take care yourself to maintain a good health.';
// }
// else{
//     result.style.color = 'red';
//     suggestionText.textContent = 'Your BMI is heigher than standard range, take care yourself to maintain a good health.';

// }