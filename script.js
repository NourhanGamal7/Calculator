let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
  if (currentNumber.length >= 12) return;
  currentNumber += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') calculate();
  operation = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr === 0 ? 'Error' : prev / curr;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operation = null;
  previousNumber = '';
  updateDisplay();
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentNumber || '0';
}
