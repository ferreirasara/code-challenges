/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

export function lonelyinteger(a) {
    // Write your code here
    for (let i = 0; i < a.length; i++) {
      const filter = a.filter(cur => cur === a[i])
      if (filter.length === 1) return a[i];
  }
  return -1;
}