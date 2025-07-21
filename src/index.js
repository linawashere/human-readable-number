module.exports = function toReadable(number) {
  const units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hundred = 'hundred';
  const result = [];
  const numArr = Array.from(String(number));

  if (numArr.length === 3) {
    for (let i = 0; i < numArr.length; i += 1) {
      const digit = Number(numArr[i]);
      if (i === 0) {
        result.push(units[digit]);
        result.push(hundred);
      }
      if (i === 1) {
        if (digit === 1) {
          const nextDigit = numArr[i + 1];
          result.push(teens[nextDigit]);
          break;
        } else if (digit !== 0) {
          result.push(tens[digit]);
        }
      }
      if (i === 2 && digit !== 0) {
        result.push(units[digit]);
      }
    }
  }

  if (numArr.length === 2) {
    for (let i = 0; i < numArr.length; i += 1) {
      const digit = Number(numArr[i]);
      if (i === 0) {
        if (digit === 1) {
          const nextDigit = numArr[i + 1];
          result.push(teens[nextDigit]);
          break;
        } else if (digit !== 0) {
          result.push(tens[digit]);
        }
      }

      if (i === 1 && digit !== 0) {
        result.push(units[digit]);
      }
    }
  }

  if (numArr.length === 1) {
    result.push(units[Number(numArr[0])]);
  }

  return result.join(' ');
};
