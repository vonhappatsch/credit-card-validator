const cardNumber = (card) => {
  let value = card
    .toString()
    .split('')
    .reverse()
    .map(Number);
    console.log("value = " + value);
  return value;
}

const multiplyDigits = (value) => {
  let multiDigits = value.map(function(curr, index) {
    if (index % 2 === 0) {
      curr = curr * 2;
    } 
    return curr;
  });
  console.log("multiDigits = " + multiDigits);
  return multiDigits;
}

const overNine = (multiDigits) => {
  let overNineDigits = multiDigits.map(function(curr) {
    if (curr > 9) {
      curr = curr - 9;
    }
    return curr;
  });
  console.log(overNineDigits);
  return overNineDigits;
}

const sumMultipliedDigits = (overNineDigits) => {
  let sum = overNineDigits.reduce((accum, curr) => accum += curr);
  console.log(sum);
  return sum;
}

const checkSum = (sum) => {
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  };
}

function cardValidator(card) {
  const number = cardNumber(card);
  const multiplying = multiplyDigits(number);
  const multOverNine = overNine(multiplying);
  const totalSum = sumMultipliedDigits(multOverNine);
  const check = checkSum(totalSum);
  return check;
}

console.log(cardValidator(378282246310005));
console.log(cardValidator(5555555555554444));
console.log(cardValidator("4904182562658232"));