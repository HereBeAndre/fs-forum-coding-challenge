const { majorityElement } = require('./problem');

describe('majorityElement', () => {
  it('should return 2 as the majority element', () => {
    expect(majorityElement([2])).toBe(2);
  });

  it('should return 1 as the majority element', () => {
    expect(majorityElement([1, 2, 1])).toBe(1);
  });

  it('should return 3 as the majority element', () => {
    expect(majorityElement([3, 3, 1])).toBe(3);
  });

  it('should return 5 as the majority element', () => {
    expect(majorityElement([4, 5, 5])).toBe(5);
  });

  it('should return 2 as the majority element', () => {
    expect(majorityElement([1, 2, 3, 2, 2, 1, 2])).toBe(2);
  });

  it('should return 2 as the majority element', () => {
    expect(majorityElement([1, 2, 3, 2, 3, 2, 2, 4, 2])).toBe(2);
  });

  it('should return 1 as the majority element', () => {
    expect(majorityElement([1, 1, 1, 1, 1, 1, 1])).toBe(1);
  });

  it('should return 1 as the majority element', () => {
    expect(majorityElement([5, 4, 3, 2, 1, 1, 1, 1, 1])).toBe(1);
  });

  it('should return 1 as the majority element', () => {
    expect(majorityElement([1, 1, 1, 1, 1, 5, 4, 3, 2])).toBe(1);
  });

  it('should return 2 as the majority element', () => {
    expect(majorityElement([1, 1, 1, 1, 2, 2, 2, 2, 2])).toBe(2);
  });

  it('should return 6543 as the majority element', () => {
    expect(
      majorityElement([
        435, 6543, 6543, 435, 535, 6543, 6543, 12, 43, 6543, 6543,
      ]),
    ).toBe(6543);
  });

  it('should return 2 as the majority element', () => {
    expect(majorityElement([1, 2, 2, 2, 1])).toBe(2);
  });

  it('should return 4 as the majority element', () => {
    expect(majorityElement([1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1])).toBe(4);
  });

  it('should return 2 as the majority element', () => {
    expect(majorityElement([1, 2, 3, 2, 2, 4, 2, 2, 5, 2, 1])).toBe(2);
  });
});
