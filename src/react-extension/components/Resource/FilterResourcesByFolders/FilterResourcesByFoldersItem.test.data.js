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
 * @since         3.3.3
 */

import {defaultFolderDto} from "../../../../shared/models/entity/folder/folderEntity.test.data";
import {ownerFolderPermissionDto} from "../../../../shared/models/entity/permission/permissionEntity.test.data";
import {ResourceWorkspaceFilterTypes} from "../../../contexts/ResourceWorkspaceContext";
import MockPort from "../../../test/mock/MockPort";

/**
 * Returns the default app context for the unit test
 * @param appContext An existing app context
 * @returns {any}
 */
export function defaultAppContext(appContext) {
  const defaultAppContext = {
    port: new MockPort(),
    folders: foldersMock,
  };
  return Object.assign(defaultAppContext, appContext || {});
}

/**
 * Default props
 * @returns {any}
 */
export function defaultProps() {
  return {
    resourceWorkspaceContext: {
      filter: {
        type: ResourceWorkspaceFilterTypes.FOLDER,
        payload: {
          folder: foldersMock[0]
        }
      }
    },
    dragContext: {
      dragging: true,
      draggedItems: {
        folders: [foldersMock[2]],
        resources: []
      },
      onDragStart: jest.fn(),
      onDragEnd: jest.fn(),
    },
    folder: foldersMock[0],
    contextualMenuContext: {
      show: jest.fn()
    },
    history: {
      push: jest.fn(),
    },
    match: {
      params: {
        filterByFolderId: foldersMock[0].id
      }
    }
  };
}

/**
 * Default props
 * @returns {any}
 */
export function defaultPropsCloseFolders() {
  return {
    dragContext: {
      dragging: false,
      draggedItems: null
    },
    resourceWorkspaceContext: {
      filter: {
        type: ResourceWorkspaceFilterTypes.ALL,
      }
    },
    folder: foldersMock[0],
    contextualMenuContext: {
      show: jest.fn()
    },
    history: {
      push: jest.fn()
    },
    match: {
      params: jest.fn()
    }
  };
}

/**
 * Mocked list of resources
 */
export const foldersMock = [
  defaultFolderDto({
    id: "3ed65efd-7c41-5906-9c02-71e2d95951da",
    name: "Certificates",
    permission: ownerFolderPermissionDto({
      aco_foreign_key: "3ed65efd-7c41-5906-9c02-71e2d95951da",
      aro_foreign_key: "f848277c-5398-58f8-a82a-72397af2d450",
    }),
  }),
  defaultFolderDto({
    id: "3ed65efd-7c41-5906-9c02-71e2d95951db",
    name: "ChildCertificates2",
    permission: ownerFolderPermissionDto({
      aco_foreign_key: "3ed65efd-7c41-5906-9c02-71e2d95951db",
      aro_foreign_key: "f848277c-5398-58f8-a82a-72397af2d450",
    }),
    folder_parent_id: "3ed65efd-7c41-5906-9c02-71e2d95951da",
  }),
  defaultFolderDto({
    id: "3ed65efd-7c41-5906-9c02-71e2d95951dc",
    name: "ChildCertificates1",
    permission: ownerFolderPermissionDto({
      aco_foreign_key: "3ed65efd-7c41-5906-9c02-71e2d95951dc",
      aro_foreign_key: "f848277c-5398-58f8-a82a-72397af2d450",
    }),
    folder_parent_id: "3ed65efd-7c41-5906-9c02-71e2d95951da",
  }),
  defaultFolderDto({
    id: "3ed65efd-7c41-5906-9c02-71e2d95951dd",
    name: "ChildCertificates3",
    permission: ownerFolderPermissionDto({
      aco_foreign_key: "3ed65efd-7c41-5906-9c02-71e2d95951dd",
      aro_foreign_key: "f848277c-5398-58f8-a82a-72397af2d450",
    }),
    folder_parent_id: "3ed65efd-7c41-5906-9c02-71e2d95951dc",
  })
];
