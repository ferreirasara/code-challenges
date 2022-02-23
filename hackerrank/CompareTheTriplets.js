/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

export function compareTriplets(a, b) {
  // Write your code here
  let alice = 0;
  let bob = 0;
  
  if (a[0] !== b[0]) a[0] > b[0] ? alice++ : bob++;
  if (a[1] !== b[1]) a[1] > b[1] ? alice++ : bob++;
  if (a[2] !== b[2]) a[2] > b[2] ? alice++ : bob++;
  
  return [alice, bob];
}