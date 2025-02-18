
/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2020 Cipherguard SA (https://www.cipherguard.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2020 Cipherguard SA (https://www.cipherguard.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         2.11.0
 */


import {fireEvent, render, waitFor} from "@testing-library/react";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import MockTranslationProvider from "../../../test/mock/components/Internationalisation/MockTranslationProvider";
import FilterResourcesByGroups from "./FilterResourcesByGroups";

/**
 * The FilterResourcesByGroups component represented as a page
 */
export default class FilterResourcesByGroupsPage {
  /**
   * Default constructor
   * @param props Props to attach
   */
  constructor(props) {
    this._page = render(
      <MockTranslationProvider>
        <Router>
          <FilterResourcesByGroups.WrappedComponent {...props}/>
        </Router>
      </MockTranslationProvider>
    );
    this.setupPageObjects();
  }

  /**
   * Set up the objects of the page
   */
  setupPageObjects() {
    this._titleHeader = new TitleHeaderPageObject(this._page.container);
    this._displayGroupList = new DisplayGroupPageObject(this._page.container);
  }

  /**
   * Return the page object of the title header
   * @returns {{select: select}}
   */
  get title() {
    return this._titleHeader;
  }

  /**
   * Returns the page object of display comments
   */
  get displayGroupList() {
    return this._displayGroupList;
  }
}

/**
 * Page object for the TitleHeader element
 */
class TitleHeaderPageObject {
  /**
   * Default constructor
   * @param container The container which includes the AddActivity Component
   */
  constructor(container) {
    this._container = container;
  }

  /**
   * Returns the clickable area of the header
   */
  get hyperlink() {
    return this._container.querySelector(".folders-label");
  }

  /** Click on the title */
  async click()  {
    const leftClick = {button: 0};
    fireEvent.click(this.hyperlink, leftClick);
    await waitFor(() => {});
  }
}

class DisplayGroupPageObject {
  /**
   * Default constructor
   * @param container The container which includes the AddComment Component
   */
  constructor(container) {
    this._container = container;
  }

  /**
   * Returns the list elements of activities
   */
  get list() {
    return this._container.querySelector('.accordion-content');
  }

  /**
   * Returns true if the page object exists in the container
   */
  exists() {
    return this.list !== null;
  }

  /**
   * Returns the number of displayed groups
   */
  count() {
    return this.list.querySelectorAll('.group-item').length;
  }

  /**
   * Returns the group selected
   */
  get groupSelected() {
    return this.list.querySelector('.group-item .row.selected');
  }

  /**
   * Returns the group for the 'index' one
   */
  group(index) {
    return this.list.querySelectorAll('.group-item')[index - 1].querySelector('.main-cell-wrapper');
  }

  /**
   * Returns the displayed group name for the 'index' one
   * @param index The display rank of name's group
   */
  name(index) {
    return this.list.querySelectorAll('.group-item')[index - 1].querySelector('.ellipsis').textContent;
  }

  /** Click on the element */
  async click(element)  {
    const leftClick = {button: 0};
    fireEvent.click(element, leftClick);
    await waitFor(() => {});
  }
}
