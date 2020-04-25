
function addNumbers() {
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');

  //var sum = Number(num1.value) + Number(num2.value);
  _add(Number(num1.value), Number(num2.value))

  var result = document.getElementById('result');
  result.innerHTML = sum;
}

function _add(num1, num2) {
  return num1+num2;
}