// Find longest sequence of zeros in binary representation of an integer.

function solution(N) {
  const binary = N.toString(2);
  const regex = /^1.*1$/
  const binarySplit = binary.matchAll(regex)
  console.log({binary, binarySplit})

  // return binarySplit[0]?.length;
}

const i = 313
console.log(`solution(${i}): ${solution(i)}`);

// const i = 32
// console.log(`solution(${i}): ${solution(i)}`);

// for (let i = 0; i < 100; i++) {
//   console.log(`solution(${i}): ${solution(i)}`);
// }