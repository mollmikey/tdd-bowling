import { test, expect } from 'vitest';
import * as score from './score';

test.skip('test setup working', () => {
  expect(true).toBeTruthy();
});

test('score a gutterball frame', () => {
  const frame = [0, 0];
  const expected = 0;
  const actual = score.gutterBall(frame);

  expect(actual).toBe(expected);
});

test('a normal frame', () => {
  const frame = [5, 4];
  const expected = 9;
  const actual = score.scoreFrame(frame);

  expect(actual).toBe(expected);
});

test('a spare frame', () => {
  const frame = [
    [5, 5],
    [1, 3]
  ];
  const expected = 11;
  const actual = score.spareFrame(frame);

  expect(actual).toBe(expected);
});

test('single strike frame', () => {
  const frame = [
    [10, 0],
    [5, 2]
  ];
  const expected = frame[0][0] + frame[1][0] + frame[1][1];
  const actual = score.singleStrikeFrame(frame);
  expect(actual).toBe(expected);
});

test('double strike frame', () => {
  const frame = [
    [10, 0],
    [10, 0],
    [5, 2]
  ];
  const expected = frame[0][0] + frame[1][0] + frame[2][0];
  const actual = score.doubleStrikeFrame(frame);
  expect(actual).toBe(expected);
});

test('score entire game', () => {
  const game = [
    [5, 4],
    [5, 5],
    [10, 0],
    [10, 0],
    [5, 2],
    [5, 5],
    [10, 0],
    [5, 2],
    [5, 5],
    [6, 4]
  ];
  const expected =
    5 + 4 + 5 + 5 + 10 + 10 + 5 + 2 + 5 + 5 + 6 + 4 + 10 + 5 + 5 + 6 + 4;
  const actual = score.scoreGame(game);
  expect(actual).toBe(expected);
});
