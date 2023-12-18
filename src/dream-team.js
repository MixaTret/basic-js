const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = '';
  members.forEach(item => {
    if (typeof item === 'string') {
      const words = item.trim().split(' ');
      const firstChar = words[0].charAt(0);
      result += firstChar.toUpperCase();
    }
  });
  return result.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
