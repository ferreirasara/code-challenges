/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

export function caesarCipher(s, k) {
  // Write your code here
    const newK = k % 26;
    const encodedArr = s.split('').map(cur => {
      const currentCharCode = cur.charCodeAt(0);
      const newCharCode = currentCharCode + newK;
      if (currentCharCode >= 65 && currentCharCode <= 90) {
          return newCharCode > 90 ? newCharCode - 26 : newCharCode;
      } else if (currentCharCode >= 97 && currentCharCode <= 122) {
          return newCharCode > 122 ? newCharCode - 26 : newCharCode;
      } else {
          return currentCharCode;
      }
  });
  const result = encodedArr.map((x) => String.fromCharCode(x));
  return result.join('');
}