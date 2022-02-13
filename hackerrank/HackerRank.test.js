import { jest } from '@jest/globals'
import { findMedian } from './FindTheMedian';
import { lonelyinteger } from './LonelyInteger';
import { miniMaxSum } from './MiniMaxSum';
import { plusMinus } from './PlusMinus';
import { timeConversion } from './TimeConversion';
import { diagonalDifference } from './DiagonalDifference';
import { countingSort } from './CountingSort1';

describe(`[Hacker Rank] Tests FindMedian`, () => {
  it(`[1, 4, 3] should return 3`, () => {
    const result = findMedian([1, 4, 3])
    expect(result).toBe(3);
  });
});

describe(`[Hacker Rank] Tests LonelyInteger`, () => {
  it(`[1, 1, 5, 5, 2] should return 2`, () => {
    const result = lonelyinteger([1, 1, 5, 5, 2])
    expect(result).toBe(2);
  });
});

describe(`[Hacker Rank] Tests MiniMaxSum`, () => {
  it(`[1, 5, 4, 2, 6] should console.log 12 17`, () => {
    console.log = jest.fn();
    miniMaxSum([1, 5, 4, 2, 6])
    expect(console.log).toHaveBeenCalledWith('12 17');
  });
});

describe(`[Hacker Rank] Tests PlusMinus`, () => {
  it(`[1, 5, 4, 2, 6] should return 1\\n0\\n0`, () => {
    console.log = jest.fn();
    plusMinus([1, 5, 4, 2, 6])
    expect(console.log).toHaveBeenCalledWith(1, '\n', 0, '\n', 0);
  });
});

describe(`[Hacker Rank] Tests TimeConversion`, () => {
  it(`02:45:23PM should return 14:45:23`, () => {
    const result = timeConversion('02:45:23PM')
    expect(result).toBe('14:45:23');
  });
});

describe(`[Hacker Rank] Tests TimeConversion`, () => {
  it(`[[11, 2, 4], [4, 5, 6], [10, 8, -12]] should return 15`, () => {
    const result = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])
    expect(result).toBe(15);
  });
});

describe(`[Hacker Rank] Tests CountingSort1`, () => {
  it(`[63, 25, 73, 1, ...] should return [0, 2, 0, 2, ...]`, () => {
    const result = countingSort([63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33])
    expect(result).toStrictEqual([0, 2, 0, 2, 0, 0, 1, 0, 1, 2, 1, 0, 1, 1, 0, 0, 2, 0, 1, 0, 1, 2, 1, 1, 1, 3, 0, 2, 0, 0, 2, 0, 3, 3, 1, 0, 0, 0, 0, 2, 2, 1, 1, 1, 2, 0, 2, 0, 1, 0, 1, 0, 0, 1, 0, 0, 2, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 2, 1, 3, 2, 0, 0, 2, 1, 2, 1, 0, 2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 0, 3, 2, 1, 1, 0, 1, 1, 1, 0, 2, 2]);
  });
});