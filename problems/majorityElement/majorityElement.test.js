const { majorityElement } = require('./problem');

describe('majorityElement', () => {
  it('should return the majority element', () => {
    expect(majorityElement([2])).toBe(2);

    expect(majorityElement([1, 2, 1])).toBe(1);

    expect(majorityElement([3, 3, 1])).toBe(3);

    expect(majorityElement([4, 5, 5])).toBe(5);

    expect(majorityElement([1, 2, 3, 2, 2, 1, 2])).toBe(2);

    expect(majorityElement([1, 2, 3, 2, 3, 2, 2, 4, 2])).toBe(2);

    expect(majorityElement([1, 1, 1, 1, 1, 1, 1])).toBe(1);

    expect(majorityElement([5, 4, 3, 2, 1, 1, 1, 1, 1])).toBe(1);

    expect(majorityElement([1, 1, 1, 1, 1, 5, 4, 3, 2])).toBe(1);

    expect(majorityElement([1, 1, 1, 1, 2, 2, 2, 2, 2])).toBe(2);

    expect(
      majorityElement([
        435, 6543, 6543, 435, 535, 6543, 6543, 12, 43, 6543, 6543,
      ]),
    ).toBe(6543);

    expect(majorityElement([1, 2, 2, 2, 1])).toBe(2);

    expect(majorityElement([1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1])).toBe(4);

    expect(majorityElement([1, 2, 3, 2, 2, 4, 2, 2, 5, 2, 1])).toBe(2);
  });
});
