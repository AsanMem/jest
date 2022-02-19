/* eslint-disable no-plusplus */
function multiply(a, b) {
  return a * b;
}

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
}

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function opposite(num) {
  return num > 0 ? -num : -num + -num + num;
}

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

function repeatStr(numb, text) {
  let result = '';
  for (let i = 0; i < numb; i++) {
    result += text;
  }
  return result;
}

function noSpace(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += str[i];
    }
  }
  return result;
}

const summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

function findSmallestInt(args) {
  let smalInt = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] < smalInt) {
      smalInt = args[i];
    }
  }
  return smalInt;
}

function boolToWord(bool) {
  if (bool === true) {
    return 'Yes';
  }
  return 'No';
}

function solution(str) {
  return str.split('').reverse().join('');
}

function getCount(str) {
  const vowels = 'aeiouAEIOU';
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

function getMiddle(str) {
  if (str.length % 2 === 0) {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
  } return str[Math.floor(str.length / 2)];
}
function highAndLow(numbersStr) {
  const numArr = numbersStr.split(' ').map(Number);
  let maxNum = numArr[0];
  let minNum = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > maxNum) {
      maxNum = numArr[i];
    } if (numArr[i] < minNum) {
      minNum = numArr[i];
    }
  }
  return `${maxNum} ${minNum}`;
}

function squareDigits(num) {
  let result = '';
  const strNum = String(num).split('');
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] > 1) {
      result += strNum[i] * strNum[i];
    } if (strNum[i] <= 1) {
      result += strNum[i];
    }
  }
  return Number(result);
}

module.exports = {
  multiply,
  evenOrOdd,
  positiveSum,
  opposite,
  removeChar,
  repeatStr,
  noSpace,
  summation,
  findSmallestInt,
  boolToWord,
  solution,
  getCount,
  getMiddle,
  highAndLow,
  squareDigits,
};
