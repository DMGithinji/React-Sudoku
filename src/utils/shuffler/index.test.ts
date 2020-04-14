import shuffle from './';

describe('shuffle', () => {
  it('returns an array of the same length after shuffling', () => {
    const array = [1, 2, 3]
    shuffle(array);
    expect(array).toHaveLength(3);
  })

  it('returns an array with the same elements after shuffling', () => {
    const array = [1, 2, 3]
    shuffle(array);
    expect(array).toContain(1);
    expect(array).toContain(2);
    expect(array).toContain(3);
  })

  it('returns an array not similar to original array', () => {
    const array = [1, 2, 3]
    const shuffledArray = shuffle(array);
    expect(shuffledArray).not.toEqual(array);
  })
})