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
 * @since         4.9.4
 */

import {defaultResourceDto} from "../../../../shared/models/entity/resource/resourceEntity.test.data";
import {defaultActionFeedbackContext} from "../../../contexts/ActionFeedbackContext.test.data";
import {defaultAppContext} from "../../../contexts/ExtAppContext.test.data";
import {defaultLoadingContext} from "../../../contexts/LoadingContext.test.data";
import {defaultResourceWorkspaceContext} from "../../../contexts/ResourceWorkspaceContext.test.data";
import {defaultSecretDto} from "../../Resource/CreateResource/CreateResource.test.data";
import ResourceTypesCollection from "../../../../shared/models/entity/resourceType/resourceTypesCollection";
import {
  resourceTypesCollectionDto
} from "../../../../shared/models/entity/resourceType/resourceTypesCollection.test.data";

export const defaultProps = (data = {}) => ({
  context: defaultAppContext(),
  resource: defaultResourceDto(),
  onClose: jest.fn(),
  onUpdate: jest.fn(),
  resourceWorkspaceContext: defaultResourceWorkspaceContext(),
  resourceTypes: new ResourceTypesCollection(resourceTypesCollectionDto()),
  actionFeedbackContext: defaultActionFeedbackContext(),
  loadingContext: defaultLoadingContext(),
  plaintextSecretDto: defaultSecretDto(),
  ...data,
});
