'use strict';

const metricUnits = document.getElementById('metricUnits');
const imperialUnits = document.getElementById('imperialUnits');
const radioMetric = document.getElementById('metric');
const radioImperial = document.getElementById('imperial');
const inputHeight = document.getElementById('height');
const inputWeight = document.getElementById('weight');
const noResults = document.getElementById('no-results');
const results = document.getElementById('results');
let bmi = document.getElementById('bmi');

let heightMetric;
let weightMetric;

function checkUnits() {
  radioMetric.addEventListener('click', function () {
    if (this.checked) {
      console.log('Metric Units');
      metricUnits.classList.remove('hidden');
      imperialUnits.classList.add('hidden');
    }
  });

  radioImperial.addEventListener('click', function () {
    if (this.checked) {
      console.log('Imperial Units');
      metricUnits.classList.add('hidden');
      imperialUnits.classList.remove('hidden');
    }
  });

  if (radioMetric.checked) {
    console.log('Metric Units');
  } else if (radioImperial.checked) {
    console.log('Imperial Units');
  }
}
checkUnits();

function checkInput() {
  if (inputHeight.value !== `` && inputWeight.value !== ``) {
    heightMetric = parseFloat(inputHeight.value);
    weightMetric = Number(inputWeight.value);
    results.classList.remove(`hidden`);
    results.classList.add(`flex`);
    noResults.classList.add(`hidden`);
    calcBmiMetric();
  } else {
    noResults.classList.remove(`hidden`);
    results.classList.add(`hidden`);
    results.classList.remove(`flex`);
  }
}

function calcBmiMetric() {
  heightMetric = heightMetric / 100;
  const BMI = weightMetric / (heightMetric * heightMetric);
  console.log(BMI.toFixed(2));
  return (bmi.textContent = BMI.toFixed(2));
}

inputHeight.addEventListener('blur', function (event) {
  checkInput();
});

inputWeight.addEventListener('blur', function (event) {
  checkInput();
});
