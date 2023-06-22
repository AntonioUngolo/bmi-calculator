'use strict';

const radioMetric = document.getElementById('metric');
const radioImperial = document.getElementById('imperial');
const inputHeight = document.getElementById('height');
const inputWeight = document.getElementById('weight');
const noResults = document.getElementById('no-results');
const results = document.getElementById('results');

function checkInput() {
  if (inputHeight.value !== '' && inputWeight.value !== '') {
    console.log('Inputs contains values:', inputHeight.value, inputWeight.value);
    results.classList.remove('hidden');
    results.classList.add('flex');
    noResults.classList.add('hidden');
  } else {
    console.log('Input is empty.');
    noResults.classList.remove('hidden');
    results.classList.add('hidden');
    results.classList.remove('flex');
  }
}

checkInput();

inputHeight.addEventListener('input', function (event) {
  console.log(event.target.value);
  checkInput();
});

inputWeight.addEventListener('input', function (event) {
  console.log(event.target.value);
  checkInput();
});
