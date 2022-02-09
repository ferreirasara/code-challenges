/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

export function diagonalDifference(arr) {
    // Write your code here
    const arrLength = arr.length;

    let diagonalLeftRightSum = 0
    let diagonalRightLeftSum = 0

    for (let l = 0; l < arrLength; l++) {
        for (let c = 0; c < arrLength; c++) {
            if (l === c) {
                diagonalLeftRightSum += arr[l][c]
            }
            if (c + l === arrLength - 1) {
                console.log(l, c, arr[l][c], diagonalLeftRightSum)
                diagonalRightLeftSum += arr[l][c]
            }
        }
    }

    const difference = diagonalLeftRightSum - diagonalRightLeftSum
    return difference < 0 ? difference * -1 : difference;
}