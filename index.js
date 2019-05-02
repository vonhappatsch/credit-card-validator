const cardNumber = (card) => {
  let value = card
    .toString()
    .split('')
    .reverse()
    .map(Number);
  return value;
};
const sumMultDigits = (value) => {
  let lastDigit = value.splice(0, 1)[0];
  let sum = value.reduce((acc, curr, index) => (index % 2 !== 0 ? acc + curr : acc + ((curr * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum; 
};
const checkSum = (sum) => {
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};
function cardValidator(card) {
  const number = cardNumber(card);
  const totalSum = sumMultDigits(number);
  const check = checkSum(totalSum);
  return check;
}
module.exports.cardValidator = cardValidator;
