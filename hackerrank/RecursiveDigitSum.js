/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

const recursiveFunc = (number) => {
  if (number.length === 1) return number;

  const digits = number.split('').map(cur => parseInt(cur));
  const sum = digits.reduce((accum, curr) => accum + curr);
  return recursiveFunc(sum.toString());
}

export function superDigit(n, k) {
  // Write your code here
  const superDigit = recursiveFunc(n);
  return recursiveFunc(new Array(k).fill(superDigit).join(''));
}