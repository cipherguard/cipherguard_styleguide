/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) KhulnaSoft Ltd (https://www.khulnasoft.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) KhulnaSoft Ltd (https://www.khulnasoft.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         4.8.0
 */

const getNestedPropertyValue = (obj, path) =>
  path.split('.').reduce(
    (accumulator, currentValue) =>  accumulator && accumulator[currentValue] ? accumulator[currentValue] : undefined
    , obj
  );

exports.toThrowCollectionValidationError = function(callback, expectedErrorPath, dto) {
  const {printExpected, printReceived, matcherHint} = this.utils;

  let passMessage = errorDetails =>
    `${matcherHint('.not.toThrowCollectionValidationError')}\n\n` +
    `Expected collection validation to not fail on item property:\n` +
    `  ${printExpected(expectedErrorPath)}\n` +
    `Received:\n` +
    `  ${printReceived(errorDetails)}`;

  let failMessage = errorDetails =>
    `${matcherHint('.toThrowCollectionValidationError')}\n\n` +
    `Expected collection validation to fail on item property:\n` +
    `  ${printExpected(expectedErrorPath)}\n` +
    `Received:\n` +
    `  ${printReceived(errorDetails)}`;


  if (dto) {
    passMessage += `\nDTO:\n` +
      `  ${printReceived(dto)}\n`;
    failMessage += `\nDTO:\n` +
      `  ${printReceived(dto)}\n`;
  }

  let pass = false;
  let errorDetails;
  try {
    callback();
  } catch (error) {
    errorDetails = error?.details;
    const errorPropertyValue = getNestedPropertyValue(errorDetails, expectedErrorPath);
    pass = typeof errorPropertyValue !== "undefined";
  }

  return {pass: pass, message: () => (pass ? passMessage(errorDetails) : failMessage(errorDetails))};
};
