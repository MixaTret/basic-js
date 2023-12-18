const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason() {
  if (arguments[0] == undefined) {
    return 'Unable to determine the time of year!';
  }
  if ((arguments[0] instanceof Date === true) && Object.entries(arguments[0]).length == 0) {
    if (arguments[0].getMonth() < 2) {
      return 'winter';
    } else if (arguments[0].getMonth() > 1 && arguments[0].getMonth() < 5) {
      return 'spring';
    } else if (arguments[0].getMonth() > 4 && arguments[0].getMonth() < 8) {
      return 'summer';
    } else if (arguments[0].getMonth() > 7 && arguments[0].getMonth() < 11) {
      return 'autumn';
    } else if (arguments[0].getMonth() == 11) {
      return 'winter';
    }
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
