const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const result = this.processMessage(message, key, true);
    return this.isDirect ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const result = this.processMessage(encryptedMessage, key, false);
    return this.isDirect ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
  }

  processMessage(message, key, isEncrypt) {
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (this.isLatinAlphabet(char)) {
        const charCase = char === char.toUpperCase() ? 'upper' : 'lower';
        const charCode = char.charCodeAt(0);
        const shift = key[keyIndex].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
        const newCharCode = isEncrypt
          ? (charCode + shift - (charCase === 'lower' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0))) % 26
          : (charCode - shift + 26 - (charCase === 'lower' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0))) % 26;
        const newChar = String.fromCharCode(newCharCode + (charCase === 'lower' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0)));
        result.push(newChar);
        keyIndex = (keyIndex + 1) % key.length;
      } else {
        result.push(char);
      }
    }

    return result;
  }

  isLatinAlphabet(char) {
    return /^[A-Za-z]$/.test(char);
  }
}

module.exports = {
  VigenereCipheringMachine
};
