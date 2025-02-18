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
import {Trans, withTranslation} from "react-i18next";
import PropTypes from "prop-types";

import Icon from "../../../shared/components/Icons/Icon";

class SharePermissionDeleteButton extends Component {
  handleCloseClick() {
    this.props.onClose();
  }

  getClassName() {
    let className = 'remove-item button button-transparent';
    if (this.props.disabled) {
      className += ' disabled';
    }
    return className;
  }

  render() {
    return (
      <button type="button" className={this.getClassName()} onClick={this.handleCloseClick.bind(this)}>
        <Icon name='close' />
        <span className="visually-hidden"><Trans>Remove</Trans></span>
      </button>
    );
  }
}
SharePermissionDeleteButton.propTypes = {
  onClose: PropTypes.func,
  disabled: PropTypes.bool
};

export default withTranslation("common")(SharePermissionDeleteButton);
