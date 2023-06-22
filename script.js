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
let bmi = document.getElementById('bmi');

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
}
checkUnits();

function calcBmiImperial() {
  weightInPounds = Number(stValue.value * 14 + lbsValue.value);
  heightInInches = Number(ftValue.value * 12 + inValue.value);
  const bmi = (weightInPounds / (heightInInches * heightInInches)) * 703;
  console.log(bmi);
}

ftValue.addEventListener('blur', function () {
  calcBmiImperial();
});

inValue.addEventListener('blur', function () {
  calcBmiImperial();
});
stValue.addEventListener('blur', function () {
  calcBmiImperial();
});
lbsValue.addEventListener('blur', function () {
  calcBmiImperial();
});

calcBmiImperial();

function checkInput() {
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

function calcBmiMetric() {
  heightMetric = heightMetric / 100;
  const BMI = weightMetric / (heightMetric * heightMetric);
  console.log(BMI.toFixed(2));
  return (bmi.textContent = BMI.toFixed(2));
}

inputHeight.addEventListener('blur', function () {
  checkInput();
});

inputWeight.addEventListener('blur', function () {
  checkInput();
});
