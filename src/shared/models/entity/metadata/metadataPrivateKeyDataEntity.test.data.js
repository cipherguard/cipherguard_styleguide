
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
 * @since         4.10.0
 */
import {pgpKeys} from "../../../../../test/fixture/pgpKeys/keys";

/**
 * Returns a default DTO object suitable for the MetadataPrivateKeyDataEntity
 * @param {object} data
 * @returns {object}
 */
export const defaultMetadataPrivateKeyDataDto = (data = {}) => ({
  object_type: "CIPHERGUARD_METADATA_PRIVATE_KEY",
  domain: "https://cipherguard.local",
  armored_key: pgpKeys.metadataKey.private_decrypted,
  fingerprint: pgpKeys.metadataKey.fingerprint,
  passphrase: "",
  ...data,
});

/**
 * Returns a full DTO object (containing a passphrase) suitable for the MetadataPrivateKeyDataEntity
 * @param {object} data
 * @returns {object}
 */
export const fullMetadataPrivateKeyDataDto = (data = {}) => defaultMetadataPrivateKeyDataDto({
  passphrase: pgpKeys.metadataKey.passphrase,
  armored_key: pgpKeys.metadataKey.private,
  fingerprint: pgpKeys.metadataKey.fingerprint,
  ...data,
});
