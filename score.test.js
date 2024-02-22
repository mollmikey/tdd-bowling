import { test, expect } from 'vitest'
import * as score from './score'

test.skip('test setup working', () => {
  expect(true).toBeTruthy()
})

test('score a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})

test('a normal frame', () => {
  const frame = [5, 4]
  const expected = 9
  const actual = score.scoreFrame(frame)

  expect(actual).toBe(expected)
})
