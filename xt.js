class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smalInt = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < smalInt) {
        smalInt = args[i];
      }
    }
    return smalInt;
  }
}

describe('3nd day task 3', function() {
  test('SmallestIntegerFinder!Should return the smallest int', () => {
    expect(SmallestIntegerFinder([78,56,232,12,8])).toBe(8);
    expect(SmallestIntegerFinder([78,56,232,12,18])).toEqual(12);
  });
