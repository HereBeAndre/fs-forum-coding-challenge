const { semordnilap } = require('./problem');

describe('semordnilap', () => {
  it('should return the semordnilap pairs', () => {
    expect(semordnilap([])).toEqual([]);

    expect(semordnilap(['aaa', 'bbbb'])).toEqual([]);

    expect(semordnilap(['dog', 'god'])).toEqual([['dog', 'god']]);

    expect(semordnilap(['dog', 'hello', 'god'])).toEqual([['dog', 'god']]);

    expect(semordnilap(['dog', 'desserts', 'god', 'stressed'])).toEqual([
      ['dog', 'god'],
      ['desserts', 'stressed'],
    ]),
      expect(
        semordnilap(['dog', 'hello', 'desserts', 'test', 'god', 'stressed']),
      ).toEqual([
        ['dog', 'god'],
        ['desserts', 'stressed'],
      ]),
      expect(
        semordnilap(['abcde', 'edcba', 'edbc', 'edb', 'cbde', 'abc']),
      ).toEqual([
        ['abcde', 'edcba'],
        ['edbc', 'cbde'],
      ]),
      expect(semordnilap(['abcde', 'bcd', 'dcb', 'edcba', 'aaa'])).toEqual([
        ['abcde', 'edcba'],
        ['bcd', 'dcb'],
      ]),
      expect(
        semordnilap(['abcdefghijk', 'aaa', 'hello', 'racecar', 'kjihgfedcba']),
      ).toEqual([['abcdefghijk', 'kjihgfedcba']]),
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
