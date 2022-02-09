import { jest } from '@jest/globals'
import { findMedian } from './FindTheMedian';
import { lonelyinteger } from './LonelyInteger';
import { miniMaxSum } from './MiniMaxSum';
import { plusMinus } from './PlusMinus';
import { timeConversion } from './TimeConversion';

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