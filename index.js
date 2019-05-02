const cardNumber = (card) => {
  let value = card
    .toString()
    .split('')
    .reverse();
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
  const number = cardNumber(card);
  const checkOne = check(number);
  const finalCheck = checkSum(checkOne);
  return finalCheck;
}
module.exports.cardValidator = cardValidator;

console.log(cardValidator('5502881535322117'));
console.log(cardValidator(5216572988775943));
console.log(cardValidator(4929988486581206))