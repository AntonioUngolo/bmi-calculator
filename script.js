'use strict';

const radioMetric = document.getElementById('metric');
const radioImperial = document.getElementById('imperial');
const inputHeight = document.getElementById('height');
const inputWeight = document.getElementById('weight');
const noResults = document.getElementById('no-results');
const results = document.getElementById('results');
let bmi = document.getElementById('bmi');

let heightMetric;
let weightMetric;

function checkInput() {
  if (inputHeight.value !== '' && inputWeight.value !== '') {
    // console.log('Inputs contains values:', inputHeight.value, inputWeight.value);
    results.classList.remove('hidden');
    results.classList.add('flex');
    noResults.classList.add('hidden');
    calcBmiMetric();
  } else {
    // console.log('Input is empty.');
    noResults.classList.remove('hidden');
    results.classList.add('hidden');
    results.classList.remove('flex');
  }
}

function calcBmiMetric() {
  heightMetric = heightMetric / 100;
  const BMI = weightMetric / (heightMetric * heightMetric);
  console.log(BMI.toFixed(2));
  return (bmi.textContent = BMI.toFixed(2));
}

inputHeight.addEventListener('blur', function (event) {
  // console.log(event.target.value);
  heightMetric = event.target.value;
  checkInput();
});

inputWeight.addEventListener('blur', function (event) {
  // console.log(event.target.value);
  weightMetric = event.target.value;
  checkInput();
});
