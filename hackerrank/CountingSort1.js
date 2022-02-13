/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export function countingSort(arr) {
  // Write your code here
  const res = new Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
      res[arr[i]] += 1;
  }
  return res;
}