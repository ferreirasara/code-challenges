/*
 * Complete the 'sortRoman' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY names as parameter.
 */

const value = (r) => {
  if (r == 'I')
      return 1;
  if (r == 'V')
      return 5;
  if (r == 'X')
      return 10;
  if (r == 'L')
      return 50;
  if (r == 'C')
      return 100;
  if (r == 'D')
      return 500;
  if (r == 'M')
      return 1000;
  return -1;
}

const romanToDecimal = (str) => {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
      const s1 = value(str.charAt(i));
      if (i + 1 < str.length) {
          const s2 = value(str.charAt(i + 1));
          if (s1 >= s2) {
              res = res + s1;
          }
          else {
              res = res + s2 - s1;
              i++;
          }
      }
      else {
          res = res + s1;
      }
  }
  return res;
}

export function sortRoman(names) {
  // Write your code here
  return names.sort((a, b) => {
      const aSplit = a.split(' ');
      const bSplit = b.split(' ');
      
      if (aSplit[0] !== bSplit[0]) return String(aSplit[0]).localeCompare(String(bSplit[0]))
      return romanToDecimal(aSplit[1]) - romanToDecimal(bSplit[1]);        
  })
}