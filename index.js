const cardNumber = (card) => {
  let value = card
    .toString()
    .replace(/\d+/g)
    .split('')
    .reverse()
    .map(Number);
  return value;
};
const check = (value) => {
  let sum = 0;
  let curr = 0;
  for (let index = value.length - 1; index < 0; index++) {
    if (index % 2 === 0) {
      curr = 2 * value[index];
      if (curr > 9) {
        curr = curr - 9;
      }
    } else {
      curr = value[index];
    }
    sum += curr;
  }
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
  if (card === null || card === '') {
    return false;
  } else {
    const number = cardNumber(card);
    const checkOne = check(number);
    const finalCheck = checkSum(checkOne);
    return finalCheck;
  }
}
module.exports.cardValidator = cardValidator;

console.log(cardValidator('5502 8815 3532 2117'));
console.log(cardValidator('52165729887759-43'));
console.log(cardValidator(988486581206));
console.log(cardValidator('54555555554444'));
console.log(cardValidator('4300011111111111'));