export default class ValidateNumber {

  cardData = {
    "amex": {
      "startNumber": [34, 37],
      "startRange": [],
      "length": [15]
    },
    "master": {
      "startNumber": [51, 52, 53, 54, 55],
      "startRange": [[222100, 272099]],
      "length": [16]
    },
    "visa": {
      "startNumber": [4],
      "startRange": [],
      "length": [13, 14, 15, 16, 17, 18, 19]
    },
    "discover": {
      "startNumber": [6011, 644, 645, 646, 647, 648, 649, 65],
      "startRange": [[622126, 622925]],
      "length": [16, 17, 18, 19]
    },
    "jcb": {
      "startNumber": [],
      "startRange": [[3528, 3589]],
      "length": [16, 17, 18, 19]
    },
    "diners_club": {
      "startNumber": [36],
      "startRange": [[300, 305]],
      "length": [14]
    },
    "mir": {
      "startNumber": [],
      "startRange": [[2200, 2204]],
      "length": [16, 17, 18, 19]
    }
  }

  isValid(cardNumber) {
    let checksum = 0;
    const cardnumbers = cardNumber.split('').map(Number);
    for (const [index, num] of cardnumbers.entries()) {
      if (index % 2 === 0) {
        let buffer = num * 2;
        buffer > 9 ? checksum += buffer - 9 : checksum += buffer;
      }
      else {
        checksum += num;
      }
    }
    return checksum % 10 === 0 ? true : false;
  }

  checkSystem(cardNumber) {
    let [result, checkLength] = [false, false];
    for (const [key, val] of Object.entries(this.cardData)) {
      val.startNumber.forEach(item => {
        const find = new RegExp('^' + item, 'i');
        result = find.test(String(cardNumber)) ? true:result;
      })
      val.startRange.forEach(item => {
        const searchNumber = Number(String(cardNumber).slice(0, String(item[0]).length));
        result = searchNumber >= item[0] && searchNumber <= item[1] ? true:result;
      })
      val.length.forEach(item => {
        let check = false;
        check = String(cardNumber).length === item ? true:check;
        checkLength = check === true ? true:checkLength;
      })
      if (result === true && checkLength === true) {
        return  key
      }
      result = false;
      checkLength = false;
    }
  }

  validateNumber(cardNumber) {
    const validLuhn = this.isValid(cardNumber);
    const validSistem = this.checkSystem(cardNumber);
    if (validLuhn === true && validLuhn !== undefined) {
      return validSistem;
    }
  }
}