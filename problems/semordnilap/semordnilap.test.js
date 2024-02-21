const { semordnilap } = require('./problem');

describe('semordnilap', () => {
  it('should return an empty array', () => {
    expect(semordnilap([])).toEqual([]);
  });

  it('should return an empty array', () => {
    expect(semordnilap(['aaa', 'bbbb'])).toEqual([]);
  });

  it('should return [["dog", "god"]]', () => {
    expect(semordnilap(['dog', 'god'])).toEqual([['dog', 'god']]);
  });

  it('should return [["dog", "god"]]', () => {
    expect(semordnilap(['dog', 'hello', 'god'])).toEqual([['dog', 'god']]);
  });

  it('should return [["dog", "god"], ["desserts", "stressed"]]', () => {
    expect(semordnilap(['dog', 'desserts', 'god', 'stressed'])).toEqual([
      ['dog', 'god'],
      ['desserts', 'stressed'],
    ]);
  });

  it('should return [["dog", "god"], ["desserts", "stressed"]]', () => {
    expect(
      semordnilap(['dog', 'hello', 'desserts', 'test', 'god', 'stressed']),
    ).toEqual([
      ['dog', 'god'],
      ['desserts', 'stressed'],
    ]);
  });

  it('should return [["abcde", "edcba"], ["edbc", "cbde"]]', () => {
    expect(
      semordnilap(['abcde', 'edcba', 'edbc', 'edb', 'cbde', 'abc']),
    ).toEqual([
      ['abcde', 'edcba'],
      ['edbc', 'cbde'],
    ]);
  });

  it('should return [["abcde", "edcba"], ["bcd", "dcb"]]', () => {
    expect(semordnilap(['abcde', 'bcd', 'dcb', 'edcba', 'aaa'])).toEqual([
      ['abcde', 'edcba'],
      ['bcd', 'dcb'],
    ]);
  });

  it('should return [["abcdefghijk", "kjihgfedcba"]]', () => {
    expect(
      semordnilap(['abcdefghijk', 'aaa', 'hello', 'racecar', 'kjihgfedcba']),
    ).toEqual([['abcdefghijk', 'kjihgfedcba']]);
  });

  it('should return [["dog", "god"], ["desserts", "stressed"], ["evil", "live"], ["palindromes", "semordnilap"]]', () => {
    expect(
      semordnilap([
        'liver',
        'dog',
        'hello',
        'desserts',
        'evil',
        'test',
        'god',
        'stressed',
        'racecar',
        'palindromes',
        'semordnilap',
        'abcd',
        'live',
      ]),
    ).toEqual([
      ['dog', 'god'],
      ['desserts', 'stressed'],
      ['evil', 'live'],
      ['palindromes', 'semordnilap'],
    ]);
  });
});
