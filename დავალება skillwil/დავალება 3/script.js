function calculate(a, b, operation) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }

  let result;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      return false;
  }

  return result;
}