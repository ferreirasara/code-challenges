// Given a string containing words, find the longest word that satisfies specific conditions.
// https://app.codility.com/programmers/trainings/1/longest_password/

function isValid(password) {
  const specialCharRegex = /[^a-zA-Z0-9]/g
  if (specialCharRegex.test(password)) return false;
  const letters = password.split(/[^a-zA-Z]/g).join('');
  const numbers = password.split(/[^0-9]/g).join('');
  return letters.length % 2 === 0 && numbers.length % 2 === 1;
}

export function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const passwords = S.split(' ');
  let maxLengthPassword = ''
  passwords.forEach(cur => {
      if (isValid(cur) && cur.length > maxLengthPassword.length) maxLengthPassword = cur
  })
  return maxLengthPassword ? maxLengthPassword.length : -1;
}