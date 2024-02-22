import { test, expect } from 'vitest'
import * as score from './score'

test.skip('test setup working', () => {
  expect(true).toBeTruthy()
})

test.skip('score a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})

test.skip('a normal frame', () => {
  const frame = [5, 4]
  const expected = 9
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})

test.skip('a spare frame', () => {
  const frame = [
    [5, 5],
    [1, 3],
  ]
  const expected = 11
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})

test('single strike frame', () => {
  const frame = [
    [10, 0],
    [5, 2],
  ]
  const expected = 17
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})
