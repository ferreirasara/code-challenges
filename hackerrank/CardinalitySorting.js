/*
 * Complete the 'cardinalitySort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY nums as parameter.
 */

const getBinaryCardinality = (num) => {
  const binArr = Number(num).toString(2).split('');
  const ones = binArr.reduce((prev, cur) => cur === '1' ? prev + 1 : prev);
  return ones.length;
}

export function cardinalitySort(nums) {
  // Write your code here
  return nums.sort((a, b) => {
      const binaryCardinalityA = getBinaryCardinality(a)
      const binaryCardinalityB = getBinaryCardinality(b)
      
      if (binaryCardinalityA !== binaryCardinalityB) return binaryCardinalityA - binaryCardinalityB
      return a - b
  });
}