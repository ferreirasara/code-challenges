/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    const minSum = arr.slice(0, 4).reduce((accum, curr) => accum + curr);
    const maxSum = arr.slice(1).reduce((accum, curr) => accum + curr);
    
    console.log(`${minSum} ${maxSum}`)
}