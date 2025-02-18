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
 * @since         2.13.0
 */
import EntityV2Collection from "../../entity/abstract/entityV2Collection";
import {RESOURCE_TYPE_VERSION_4} from "../metadata/metadataTypesSettingsEntity";
import {
  RESOURCE_TYPE_PASSWORD_AND_DESCRIPTION_SLUG,
  RESOURCE_TYPE_PASSWORD_DESCRIPTION_TOTP_SLUG,
  RESOURCE_TYPE_PASSWORD_STRING_SLUG,
  RESOURCE_TYPE_TOTP_SLUG,
  RESOURCE_TYPE_V5_DEFAULT_SLUG,
  RESOURCE_TYPE_V5_DEFAULT_TOTP_SLUG, RESOURCE_TYPE_V5_PASSWORD_STRING_SLUG, RESOURCE_TYPE_V5_TOTP_SLUG
} from "./resourceTypeSchemasDefinition";
import ResourceTypeEntity, {PASSWORD_RESOURCE_TYPES} from "./resourceTypeEntity";

const SUPPORTED_RESOURCE_TYPES = [
  RESOURCE_TYPE_PASSWORD_STRING_SLUG,
  RESOURCE_TYPE_PASSWORD_AND_DESCRIPTION_SLUG,
  RESOURCE_TYPE_PASSWORD_DESCRIPTION_TOTP_SLUG,
  RESOURCE_TYPE_TOTP_SLUG,
  RESOURCE_TYPE_V5_DEFAULT_SLUG,
  RESOURCE_TYPE_V5_DEFAULT_TOTP_SLUG,
  RESOURCE_TYPE_V5_PASSWORD_STRING_SLUG,
  RESOURCE_TYPE_V5_TOTP_SLUG
];

class ResourceTypesCollection extends EntityV2Collection {
  /**
   * @inheritDoc
   */
  get entityClass() {
    return ResourceTypeEntity;
  }

  /**
   * @inheritDoc
   * @throws {EntityCollectionError} Build Rule: Ensure all items in the collection are unique by ID.
   * @throws {EntityCollectionError} Build Rule: Ensure all items in the collection are unique by slug.
   */
  constructor(dtos = [], options = {}) {
    super(dtos, options);
  }

  /**
   * Get resources entity schema
   *
   * @returns {Object} schema
   */
  static getSchema() {
    return {
      "type": "array",
      "items": ResourceTypeEntity.getSchema(),
    };
  }

  /**
   * @inheritDoc
   * @param {Set} [options.uniqueIdsSetCache] A set of unique ids.
   * @param {Set} [options.uniqueSlugsSetCache] A set of unique slugs.
   * @throws {EntityValidationError} If a permission already exists with the same id.
   */
  validateBuildRules(item, options = {}) {
    this.assertNotExist("id", item._props.id, {haystackSet: options?.uniqueIdsSetCache});
    this.assertNotExist("slug", item._props.slug, {haystackSet: options?.uniqueSlugsSetCache});
  }

  /*
   * ==================================================
   * Assertions
   * ==================================================
   */

  /**
   * Is resource type id present (supported)
   * @param id The id
   * @return {boolean}
   */
  isResourceTypeIdPresent(id) {
    return this._items.some(resourceType => resourceType.id === id);
  }

  /*
   * ==================================================
   * Filter
   * ==================================================
   */

  /**
   * Filter by password resource types.
   * @return {void} The function alters the collection itself.
   */
  filterByPasswordResourceTypes() {
    this.filterByPropertyValueIn("slug", PASSWORD_RESOURCE_TYPES);
  }

  /**
   * Filter by resource type version.
   * @param {string} version the version used to filter the resource types
   * @return {void} The function alters the collection itself.
   */
  filterByResourceTypeVersion(version) {
    this.filterByCallback(resourceType => resourceType.version === version);
  }

  /*
   * ==================================================
   * Getters
   * ==================================================
   */

  /**
   * Get first by id
   * @param {string} id
   * @returns {ResourceTypeEntity}
   */
  getFirstById(id) {
    return this.getFirst("id", id);
  }

  /**
   * Get first by slug
   * @param {string} slug
   * @returns {ResourceTypeEntity}
   */
  getFirstBySlug(slug) {
    return this.getFirst("slug", slug);
  }

  /**
   * Has one with slug
   * @param {string} slug
   * @returns {boolean}
   */
  hasOneWithSlug(slug) {
    return Boolean(this.getFirstBySlug(slug));
  }

  /**
   * Has some passwords resource types
   * @param {string} [version] The version @todo adapt when v5 will be the default
   * @returns {boolean}
   */
  hasSomePasswordResourceTypes(version = RESOURCE_TYPE_VERSION_4) {
    return this.items.some(resourceType => resourceType.hasPassword() && resourceType.version === version);
  }

  /**
   * Has some totp resource types
   * @param {string} [version] The version @todo adapt when v5 will be the default
   * @returns {boolean}
   */
  hasSomeTotpResourceTypes(version = RESOURCE_TYPE_VERSION_4) {
    return this.items.some(resourceType => resourceType.hasTotp() && resourceType.version === version);
  }

  /*
   * ==================================================
   * Setters
   * ==================================================
   */

  /**
   * @inheritDoc
   */
  pushMany(data, entityOptions = {}, options = {}) {
    const uniqueIdsSetCache = new Set(this.extract("id"));
    const uniqueSlugsSetCache = new Set(this.extract("slug"));

    const onItemPushed = item => {
      uniqueIdsSetCache.add(item.id);
      uniqueSlugsSetCache.add(item.slug);
    };

    options = {
      onItemPushed: onItemPushed,
      validateBuildRules: {...options?.validateBuildRules, uniqueIdsSetCache, uniqueSlugsSetCache},
      ...options
    };

    super.pushMany(data, entityOptions, options);
  }

  /**
   * The resource type is checked to ensure that it is supported first.
   * If it's not supported, the resource type is not added and does not throw any Error.
   *
   * @inheritDoc
   */
  push(data, entityOptions = {}, options = {}) {
    if (!SUPPORTED_RESOURCE_TYPES.includes(data?.slug)) {
      return;
    }
    super.push(data, entityOptions, options);
  }
}

export default ResourceTypesCollection;
