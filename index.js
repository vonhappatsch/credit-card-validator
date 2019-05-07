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

console.log(cardValidator('5502 8815 3532 2117'));
console.log(cardValidator('3497 7344 3661 071'));
console.log(cardValidator('52165729887759-43'));
console.log(cardValidator(988486581206));
console.log(cardValidator('54555555554444'));
console.log(cardValidator('4300011111111111'));
console.log(cardValidator(349921120750648));
console.log(cardValidator(349758525117332));