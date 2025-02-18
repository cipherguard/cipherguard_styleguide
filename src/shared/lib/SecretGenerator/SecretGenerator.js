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
import {PasswordGenerator} from "./PasswordGenerator";
import {PassphraseGenerator} from "./PassphraseGenerator";
import {SecretGeneratorComplexity} from "./SecretGeneratorComplexity";

export const SecretGenerator = {
  /**
   * Generate a secret given a generator configuration
   * @param {PasswordPoliciesDto} configuration A generator configuration
   * @return {string} A generated secret
   */
  generate: configuration => {
    const type = configuration.default_generator;
    if (type === 'password') {
      return PasswordGenerator.generate(configuration.password_generator_settings);
    } else if (type === 'passphrase') {
      return PassphraseGenerator.generate(configuration.passphrase_generator_settings);
    }
  },
  /**
   * Calculates the secret entropy
   * @param {string} secret A secret
   * @return {Number} The secret entropy
   */
  entropy: secret => {
    const {numberWords, separator, isPassphrase} = PassphraseGenerator.detectPassphrase(secret);
    if (isPassphrase) {
      return SecretGeneratorComplexity.entropyPassphrase(numberWords, separator);
    } else {
      return SecretGeneratorComplexity.entropyPassword(secret);
    }
  }
};
