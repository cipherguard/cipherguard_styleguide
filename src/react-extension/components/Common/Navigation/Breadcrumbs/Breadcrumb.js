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
 * @since         3.0.0
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

class Breadcrumb extends Component {
  /**
   * Render the component
   * @returns {JSX}
   */
  render() {
    return (
      <button type="button" className="link no-border inline ellipsis" onClick={this.props.onClick}>{this.props.name}</button>
    );
  }
}

Breadcrumb.propTypes = {
  name: PropTypes.string, // The breadcrumb name
  onClick: PropTypes.func, // The breadcrumb onClick callback
};

export default Breadcrumb;
