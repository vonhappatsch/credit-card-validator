const cardNumber = (card) => {
  let value = card
    .toString()
    .replace(/\D+/g, '')
    .split('')
    .reverse()
    .map(Number);
  return value;
};
const check = (value) => {
  let lastDigit = value.splice(0, 1)[0];
  let sum = value.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};
function cardValidator(card) {
  if (card === null || card === '') {
    return false;
  } else {
    const number = cardNumber(card);
    const checking = check(number);
    return checking;
  }
}
module.exports.cardValidator = cardValidator;