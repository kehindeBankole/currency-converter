//RECURSIVE APPROACH
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive call to calculate the sum of the previous two Fibonacci numbers
}

// Generate and print the Fibonacci series up to a given limit
function generateFibonacciSeries(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(fibonacci(i));
  }
}

generateFibonacciSeries(10);

//ITERATIVE APPROACH
function generateIterativeFibonacciSeries(limit) {
  const series = [0, 1]; // Initialize the series with the first two Fibonacci numbers

  for (let i = 2; i <= limit; i++) {
    const nextNumber = series[i - 1] + series[i - 2]; // Calculate the next Fibonacci number
    series.push(nextNumber); // Add the next number to the series
  }

  return series
}

// Example usage

const fibonacciSeries = generateIterativeFibonacciSeries(10);
console.log(fibonacciSeries);
