/* eslint-disable no-undef */
const cardValidator = require('../index');
const chai = require('chai');
const expect = chai.expect;
describe('index test', () => {
  describe('example of valid card from mastercard as string of numbers', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator('5373402847881998')).to.equal(true);
    });    
  });
  describe('example of valid card number from mastercard as digits', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator(5282647098312354)).to.equal(true);
    });
  });
  describe('example of valid card from visa as string of numbers', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator('4929151635508634')).to.equal(true);
    });
  });
  describe('example of valid card number from visa as digits', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator(4556839586100308)).to.equal(true);
    });
  });
  describe('example of valid card from american express as a string of numbers', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator('352629067874677')).to.equal(true);
    });
  });
  describe('example of valid card number from american express as digits', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator(371780716719925)).to.equal(true);
    });
  });
  describe('example of valid card number from mastercard with special digits', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator('5322 5346 8775 4414')).to.equal(true);
    });
  });
  describe('example of valid card number from visa with special digits', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator('4539 5009 5378 5657')).to.equal(true);
    });
  });
  describe('example of valid card number from american express with special digits', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator('3460 021474 89636')).to.equal(true);
    });
  });
  describe('example of invalid card as string of numbers', () => {
    it('should return false', () => {
      expect(cardValidator.cardValidator('3354555555554444')).to.equal(false);
    });
  });
  describe('example of invalid card number as digits', () => {
    it('should return false', () => {
      expect(cardValidator.cardValidator(33333333333331)).to.equal(false);
    });
  });
  describe('empty string should not be accepted', () => {
    it('should return false', () => {
      expect(cardValidator.cardValidator('')).to.equal(false);
    });
  });
});