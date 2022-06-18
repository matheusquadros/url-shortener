import { Test } from '@/services/test'

test('adds 1 + 2 to equal 3', () => {
  const sut = new Test()
  expect(sut.sum(1, 2)).toBe(3)
})
