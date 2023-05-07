const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const inputOperator = document.getElementById('inputOperator');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const calculate = document.getElementById('calculate');
const output = document.getElementById('output');

let operator;

add.addEventListener('click', () => {
  operator = '+';
  inputOperator.innerText = '+';
});

subtract.addEventListener('click', () => {
  operator = '-';
  inputOperator.innerText = '-';
});

multiply.addEventListener('click', () => {
  operator = '*';
  inputOperator.innerText = 'x';
});

divide.addEventListener('click', () => {
  operator = '/';
  inputOperator.innerText = ':';
});

calculate.addEventListener('click', () => {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Tidak ada operator yang dipilih';
  }

  output.innerText = `${result}`;
});

function reset() {
  input1.value = '';
  input2.value = '';
  output.innerText = '';
  inputOperator.innerText = '';
}
