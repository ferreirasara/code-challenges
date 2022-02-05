import {solution as LongestPasswordSolution } from './Exercise01LongestPassword';
import {solution as TennisTournament } from './Exercise03TennisTournament';

describe(`Tests Exercise01LongestPassword`, () => {
  it(`test 5 a0A pass007 ?xy1 should return 7`, () => {
    const result = LongestPasswordSolution('test 5 a0A pass007 ?xy1')
    expect(result).toBe(7);
  });
  it(`92949djcncua js81hebsd8c6c5ab2 %2nsjd7 2223 ksnfuxn221 return -1`, () => {
    const result = LongestPasswordSolution('92949djcncua js81hebsd8c6c5ab2 %2nsjd7 2223 ksnfuxn221')
    expect(result).toBe(-1);
  });
  it(`jshdu29281 dj29h3h jsnd921123nduiq9123 return 7`, () => {
    const result = LongestPasswordSolution('jshdu29281 dj29h3h jsnd921123nduiq9123')
    expect(result).toBe(7);
  });
});

describe(`Tests Exercise03TennisTournament`, () => {
  it(`P = 5 and C = 3 should return 2`, () => {
    const result = TennisTournament(5, 3)
    expect(result).toBe(2);
  });
  it(`P = 10 and C = 3 should return 2`, () => {
    const result = TennisTournament(10, 3)
    expect(result).toBe(3);
  });
  it(`P = 10 and C = 5 should return 5`, () => {
    const result = TennisTournament(10, 5)
    expect(result).toBe(5);
  });
});