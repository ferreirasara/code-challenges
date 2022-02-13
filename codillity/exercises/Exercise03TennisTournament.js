// Given the numbers of players and available courts, calculate the maximum number of parallel tennis games.
// https://app.codility.com/programmers/trainings/3/tennis_tournament/

export function solution(P, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  const games = P / 2;
  return C <= games ? C : parseInt(games);
}