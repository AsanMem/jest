const {
  multiply, evenOrOdd, positiveSum, opposite, removeChar, repeatStr,
  noSpace, summation, findSmallestInt, boolToWord, solution, getCount,
  getMiddle, highAndLow, squareDigits,
} = require('../funcs');

describe('first day task from codewars test-funcs', () => {
  test('multiply', () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(0.8, 0.2)).toBeCloseTo(0.16);
  });
  test('evenOrOdd', () => {
    expect(evenOrOdd(2)).toBe('Even');
    expect(evenOrOdd(-42)).toBe('Even');
    expect(evenOrOdd(7)).toBe('Odd');
    expect(evenOrOdd(-7)).toBe('Odd');
  });
});
describe('2nd day task from codewars test-funcs', () => {
  test('positiveSum', () => {
    expect(positiveSum([1, 2, 3, 4])).toBe(10);
    expect(positiveSum([1, -2, 4, 4, 5])).toBe(14);
    expect(positiveSum([])).toBe(0);
    expect(positiveSum([-1, 2, 3, 5, -5])).toBe(10);
  });
  test('opposite', () => {
    expect(opposite(2)).toBe(-2);
    expect(opposite(-2)).toBe(2);
    expect(opposite(22)).toBe(-22);
    expect(opposite()).toBeDefined();
  });
  test('removeChar', () => {
    expect(removeChar('country')).toBe('ountr');
    expect(removeChar('count')).toBe('oun');
    expect(removeChar('country')).toBe('ountr');
  });
  test('repeatStr!', () => {
    expect(repeatStr(2, 'c')).toBe('cc');
    expect(repeatStr(2, 'count')).toBe('countcount');
    expect(repeatStr(5, 'I')).toBe('IIIII');
    expect(repeatStr()).toBeDefined();
  });
});
describe('3nd day task from codewars test-funcs', () => {
  test('noSpace!Remove String Spaces', () => {
    expect(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')).toBe('8j8mBliB8gimjB8B8jlB');
    expect(noSpace('jacia  sjci  asjc i   as')).toBe('jaciasjciasjcias');
  });
  test('summation!should return the correct total', () => {
    expect(summation(1)).toBe(1);
    expect(summation(8)).toBe(36);
  });
  test('SmallestIntegerFinder!Should return the smallest int', () => {
    expect(findSmallestInt([78,56,232,12,8])).toBe(8);
    expect(findSmallestInt([78,56,232,12,18])).toBe(12);
  });
});
describe('4nd day task from codewars test-funcs', () => {
  test('boolToWord!should return boolean value to string', () => {
    expect(boolToWord(false)).toBe('No');
    expect(boolToWord(true)).toBe('Yes');
  });
  test('solution!should return reversed string', () => {
    expect(solution('world')).toBe('dlrow');
    expect(solution('hello')).toBe('olleh');
  });
  test('getCount!Return the number count of vowels in the string', () => {
    expect(getCount('asncuahcabcjancjjaucajowjiqwoiqowiqlwdxa;[xplaxla,koclckkckadnchajkmcnajncahsjcmasjytdqrwfvdbqwhdxgqwvbnabvbnmkiuytrewqeqeqeqeeqeqeeqrgcah')).toBe(36);
    expect(getCount('abracadabra')).toBe(5);
  });
});
describe('5nd day task from codewars test-funcs', () => {
  test('getMiddle!should return the middle character of the word', () => {
    expect(getMiddle('middle')).toBe('dd');
    expect(getMiddle('xqtwvdxhbnqdwkmcjnyagyhbxnmk,lc,mjesnvcnsekmcla,wcinahbwjn')).toBe(',l');
  });
  test('highAndLow!should return the highest and lowest number', () => {
    expect(highAndLow('1 2 3 4 5')).toBe('5 1');
    expect(highAndLow('1 9 3 4 -5')).toBe('9 -5');
    expect(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')).toBe('42 -9');
  });
  test('squareDigits!should return the Square Every Digit except one', () => {
    expect(squareDigits(1960346)).toBe(18136091636);
    expect(squareDigits(6451875)).toBe(3616251644925);
    expect(squareDigits(9846717)).toBe(8164163649149);
    expect(squareDigits(0)).toBe(0);
  });
});
