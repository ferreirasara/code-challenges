/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export function findMedian(arr) {
    // Write your code here
    const arrSorted = arr.sort((a, b) => a - b);
    const arrLength = arrSorted.length;
    const middleIndex = (arrLength / 2) + 0.5;
    return arrSorted[middleIndex - 1];
}