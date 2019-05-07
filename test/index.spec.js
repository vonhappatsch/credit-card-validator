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
      expect(cardValidator.cardValidator(5372074724288745)).to.equal(true);
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
      expect(cardValidator.cardValidator('349758525117332')).to.equal(true);
    });
  });
  describe('example of valid card number from american express as digits', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator(349758525117332)).to.equal(true);
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
      expect(cardValidator.cardValidator('3497 585251 17332')).to.equal(true);
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
  describe('testing JCB credit card number', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator(3568632754221487)).to.equal(true);
    });
  });
  describe('testing Discover credit card number', () => {
    it('should return true', () => {
      expect(cardValidator.cardValidator(6011463377855337)).to.equal(true);
    });
  });
});