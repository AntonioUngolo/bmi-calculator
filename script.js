'use strict';

const metricUnits = document.getElementById('metricUnits');
const imperialUnits = document.getElementById('imperialUnits');
const radioMetric = document.getElementById('metric');
const radioImperial = document.getElementById('imperial');
// Metric Value
const inputHeight = document.getElementById('height');
const inputWeight = document.getElementById('weight');
let heightMetric;
let weightMetric;

// Imperial Value
const ftValue = document.getElementById('ft');
const inValue = document.getElementById('in');
const stValue = document.getElementById('st');
const lbsValue = document.getElementById('lbs');
let weightInPounds;
let heightInInches;

const noResults = document.getElementById('no-results');
const results = document.getElementById('results');
let bmiResult = document.getElementById('bmi');

const weightResults = document.getElementById('weight');

function checkUnits() {
  radioMetric.addEventListener('click', function () {
    if (this.checked) {
      console.log('Metric Units');
      metricUnits.classList.remove('hidden');
      imperialUnits.classList.add('hidden');
      calcBmiMetric();
    }
  });

  radioImperial.addEventListener('click', function () {
    if (this.checked) {
      console.log('Imperial Units');
      metricUnits.classList.add('hidden');
      imperialUnits.classList.remove('hidden');
      calcBmiImperial();
    }
  });
}

checkUnits();

function calcBmiMetric() {
  heightMetric = heightMetric / 100;
  const BMI = weightMetric / (heightMetric * heightMetric);
  console.log(BMI.toFixed(2));
  return (bmiResult.textContent = BMI.toFixed(2));
}

function calcBmiImperial() {
  weightInPounds = Number(lbsValue.value);
  heightInInches = parseInt(ftValue.value * 12) + parseInt(inValue.value);
  const bmi = (weightInPounds / (heightInInches * heightInInches)) * 703;
  console.log(bmi.toFixed(2));
  return (bmiResult.textContent = bmi.toFixed(2));
}

function checkResults() {
  console.log('check results working');
  bmiResult = bmiResult;
  console.log(parseFloat(bmiResult.textContent));
  if (parseFloat(bmiResult.textContent) < 18.5) {
    weightResults.textContent = 'Underweight';
  } else {
    weightResults.textContent = 'Normal';
  }
}

function checkInputMetric() {
  if (inputHeight.value !== '' && inputWeight.value !== '') {
    heightMetric = Number(inputHeight.value);
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

ftValue.addEventListener('blur', function () {
  checkInputImperial();
});

inValue.addEventListener('blur', function () {
  checkInputImperial();
});
lbsValue.addEventListener('blur', function () {
  checkInputImperial();
});

function checkInputImperial() {
  if (ftValue.value !== '' && inValue.value !== '' && lbsValue.value !== '') {
    results.classList.remove(`hidden`);
    results.classList.add(`flex`);
    noResults.classList.add(`hidden`);
    calcBmiImperial();
  } else {
    noResults.classList.remove(`hidden`);
    results.classList.add(`hidden`);
    results.classList.remove(`flex`);
  }
}

inputHeight.addEventListener('blur', function () {
  checkInputMetric();
  checkResults();
});

inputWeight.addEventListener('blur', function () {
  checkInputMetric();
  checkResults();
});
