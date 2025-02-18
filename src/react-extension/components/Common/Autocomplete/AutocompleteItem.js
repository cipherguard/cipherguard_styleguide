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
 * @since         2.13.0
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

class AutocompleteItem extends Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    this.onClick = this.onClick.bind(this);
  }

  getClassName() {
    if (this.props.selected) {
      return 'row selected';
    }
    return 'row';
  }

  onClick(event) {
    this.props.onClick(event, this.props.id);
  }

  render() {
    return (
      <li className="autocomplete-item">
        <div className={`autocomplete-suggestion ${this.getClassName()} `}>
          <div className="main-cell-wrapper">
            <div className="main-cell ">
              <button type="button" className="link no-border" onClick={event => this.onClick(event)}>
                <div className="item">
                  <span className="name ellipsis">{this.props.slug}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

AutocompleteItem.propTypes = {
  id: PropTypes.number,
  slug: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default AutocompleteItem;
