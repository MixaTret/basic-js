const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsResult = {};

  domains.forEach(domain => {
    const domainParts = domain.split('.').reverse();
    let currentKey = '';

    domainParts.forEach(part => {
      currentKey += `.${part}`;

      dnsResult[currentKey] = (dnsResult[currentKey] || 0) + 1;
    });
  });

  return dnsResult;
}

module.exports = {
  getDNSStats
};
