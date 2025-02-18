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
 * @since         3.2.0
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import ChangeLocale from "./ChangeLocale";
import {ApiRecoverContextState, withApiRecoverContext} from "../../../contexts/ApiRecoverContext";

/**
 * This component allows the user to change the locale for the authentication workflows.
 */
class ChangeApiRecoverLocale extends Component {
  /**
   * The states for witch the language switch must be displayed.
   * @returns {array}
   */
  get statesToHideLocaleSwitch() {
    return [
      ApiRecoverContextState.INITIAL_STATE,
    ];
  }

  /**
   * Must display the locale switch component.
   * @type {boolean}
   */
  get mustDisplayLocaleSwitch() {
    return !this.statesToHideLocaleSwitch.includes(this.props.apiRecoverContext.state);
  }

  /**
   * Render the component
   */
  render() {
    return (
      <>
        {this.mustDisplayLocaleSwitch && <ChangeLocale/>}
      </>
    );
  }
}

ChangeApiRecoverLocale.propTypes = {
  apiRecoverContext: PropTypes.any, // The application context
};

export default withApiRecoverContext(ChangeApiRecoverLocale);
