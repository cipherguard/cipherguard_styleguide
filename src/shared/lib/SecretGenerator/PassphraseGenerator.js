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
 * @since         3.3.0
 */
import {default as PassphraseGeneratorWords} from "./PassphraseGeneratorWords";

/**
 * Returns a number between the given min and max
 * @param {integer} min The minimum number
 * @param {integer} max The maximum number
 * @returns {integer}
 */
function randomNumberRange(min, max) {
  const arr = new Uint32Array(1);
  window.crypto.getRandomValues(arr);
  const random = arr[0] / (0xffffffff + 1);
  return Math.floor(random * (max - min + 1)) + min;
}

/**
 * Returns randomly a word from a given list of word and apply the given word case
 * @param {Array<string>} words A list of words
 * @param {string} wordCase A case strategy to apply to the word
 * @returns {string}
 */
function extractWordWithCase(words, wordCase) {
  const extractWord = () => words[randomNumberRange(0, words.length - 1)];
  const toCamelCase = word => word.charAt(0).toUpperCase() + word.slice(1);
  switch (wordCase) {
    case "lowercase":
      return extractWord().toLowerCase();
    case "uppercase":
      return extractWord().toUpperCase();
    case "camelcase":
      return toCamelCase(extractWord());
    default:
      return extractWord();
  }
}

/**
 * Detects if the given secret is a Cipherguard passphrase.
 * If yes, it returns the number of words, the separator and the flag to tell it's a passphrase
 * @param {string} secret
 * @returns {{isPassphrase: boolean, numberReplacement: integer, remainingSecret: string, numberWords: integer, separator: string}}
 */
function detectPassphrase(secret) {
  const passwordDetected = {
    isPassphrase: false
  };

  if (!secret) {
    return passwordDetected;
  }

  // Remove all the words from the dictionary present in the secret and keep the count.
  const separatorsSecret = PassphraseGeneratorWords['en-UK'].reduce((result, word) => {
    const remainingSecret = result.remainingSecret.replace(new RegExp(word, 'g'), '');
    const newNumberReplacement = (result.remainingSecret.length - remainingSecret.length) / word.length;
    return {
      numberReplacement: result.numberReplacement + newNumberReplacement,
      remainingSecret: remainingSecret
    };
  }, {numberReplacement: 0, remainingSecret: secret.toLowerCase()});

  const remainingSecret = separatorsSecret.remainingSecret;

  /*
   * For a passphrase we expect to have a separator count of <n-detected-words> - 1
   * If 2 words are detected, we expected to have only 1 separator. But, with the modulo
   * computation that happens next, the entropy will be erronous in that case (every interger is a multiple of 1)
   * So we handle that specific case and expect the following format:
   * `${word1}${separator}${word2}`
   */
  const numberSeparators = separatorsSecret.numberReplacement - 1;
  if (numberSeparators === 1) {
    // the resulting string might not be present at all due to the way we remove the words previously
    const isPassword = secret.indexOf(remainingSecret) === -1
      || secret.startsWith(remainingSecret)
      || secret.endsWith(remainingSecret);

    if (isPassword) {
      return passwordDetected;
    }

    return {
      numberWords: 2,
      separator: remainingSecret,
      isPassphrase: true
    };
  }

  const hasEmptySeparator = remainingSecret.length == 0;
  if (hasEmptySeparator) {
    return {
      numberWords: separatorsSecret.numberReplacement,
      separator: '',
      isPassphrase: true
    };
  }

  // From the remaining, check if a separator can be identified.
  const cannotBeSplitSeparatorsWithSameLength = remainingSecret.length % numberSeparators !== 0;
  if (cannotBeSplitSeparatorsWithSameLength) {
    return passwordDetected;
  }

  const lengthSeparators = remainingSecret.length / numberSeparators;
  const firstSeparator = remainingSecret.substring(0, lengthSeparators);
  const firstSeparatorRegexEscaped = String(firstSeparator).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
  const isPassphrase = remainingSecret.replace(new RegExp(firstSeparatorRegexEscaped, 'g'), '').length === 0;
  return {
    numberWords: separatorsSecret.numberReplacement,
    separator: firstSeparator,
    isPassphrase: isPassphrase && !secret.startsWith(firstSeparator) && !secret.endsWith(firstSeparator)
  };
}

/**
 * Passphrase generator using diceware method from a file containing words
 */
export const PassphraseGenerator = {
  /**
   * Genetates a passphrase given the configuration
   * @param {PassphraseGeneratorSettingsDto} configuration
   * @returns {string}
   */
  generate: configuration => {
    const wordCount = configuration.words;
    const canGenerate = wordCount >= configuration.min_words && wordCount <= configuration.max_words;
    if (!canGenerate) {
      return '';
    }
    const wordCase = configuration.word_case;
    const words = PassphraseGeneratorWords['en-UK'];
    const extractWordMapper = () => extractWordWithCase(words, wordCase);
    const wordsGenerated = Array.from({length: wordCount}, extractWordMapper);
    return wordsGenerated.join(configuration.word_separator);
  },
  detectPassphrase
};
