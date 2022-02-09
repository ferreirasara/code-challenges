/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export function plusMinus(arr) {
    // Write your code here
    const arrLength = arr.length;
    const positives = arr.filter(cur => cur > 0);
    const negatives = arr.filter(cur => cur < 0);
    const zeros = arr.filter(cur => cur === 0);
    
    console.log(positives.length / arrLength, '\n', negatives.length / arrLength, '\n', zeros.length / arrLength);
    // console.log(negatives.length / arrLength);
    // console.log(zeros.length / arrLength);
}
