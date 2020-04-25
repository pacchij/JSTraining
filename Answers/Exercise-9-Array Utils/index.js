
function getValidArray(inputList) {
  var numbers = inputList.trim(); //Good Practice not to tamper input variable from function
  //if it is string?
  numbers = numbers.split(' '); 
  if (!(numbers instanceof Array)) {
    return [];
  }
  
  //make sure we get only numbers
  numbers = numbers.filter(function(number) {   // ==> Use of filter to reduce array elements for numbers only
    return !isNaN(number); 
  });

  numbers = numbers.map(function(number) {   //==> convert every element to number equivalent
    return Number(number);
  });

  return numbers;
}

function isPrime(number) {
  for(var i = 2; i <= number/2; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function getPrimes() {
  var num1 = document.getElementById('arr1');
  //get the array of numbers
  var inputList = getValidArray(num1.value);
  if (inputList.length > 0) {
    inputList = inputList.filter(isPrime);   //Function is defined outside
  }
  //make resulting array as single text for display
  var result = inputList.join(' ');

  var primeResultElement = document.getElementById('primeList');
  primeResultElement.innerHTML = result;
}

function sortNumbers(a, b) {
  return a-b;
}
function getSecondSmallest() {
  var num1 = document.getElementById('arr1');
  //get the array of numbers
  var inputList = getValidArray(num1.value);
  var result = "";
  if (inputList.length > 1) {
    inputList = inputList.sort(sortNumbers);  //sort to get the numbers in order
    result = inputList[1];
  } else {
    result = inputList.length ? inputList[0] : Number.MIN_VALUE;
  }

  var primeResultElement = document.getElementById('smallResult');
  primeResultElement.innerHTML = result;
}