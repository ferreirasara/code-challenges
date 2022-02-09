// Find the first unique number in a given sequence.

export function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  for (let i = 0; i < A.length; i++) {
      const filter = A.filter(cur => cur === A[i])
      if (filter.length === 1) return A[i];
  }
  return -1;
}