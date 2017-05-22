import consecutive from './consecutive'

const findConsecutive = consecutive()

it('finds ascending consecutive indices', () => {
  const arr = [1, 2, 3]
  expect(findConsecutive(arr)).toEqual([0])
})

it('finds descending consecutive indices', () => {
  const arr = [0, 10, 8, 7, 6]
  expect(findConsecutive(arr)).toEqual([2])
})

it('finds multiple consecutive indices', () => {
  const arr = [1, 2, 3, 4, 6]
  expect(findConsecutive(arr)).toEqual([0, 1])
})