/*PROBLEM : Add arithmetic operators (add, subtract, multiply, divide) to make the
following expressions true. You can use any parentheses you’d like.

3 1 3 9 = 12*/

//SOLUTION
const operators = ['+', '-', '*', '/'];
const numbers = [3, 1, 3, 9];
const target = 12;

function solveExpression(numbers, target) {
  const n = numbers.length;

  for (let i = 0; i < Math.pow(4, n - 1); i++) {
    let expression = numbers[0].toString();

    for (let j = 0; j < n - 1; j++) {
      const operatorIndex = Math.floor(i / Math.pow(4, j)) % 4;
      expression += ' ' + operators[operatorIndex] + ' ' + numbers[j + 1];
    }

    if (eval(expression) === target) {
      return expression + ' = ' + target;
    }
  }

  return 'No solution found.';
}

const solution = solveExpression(numbers, target);
console.log(solution);
