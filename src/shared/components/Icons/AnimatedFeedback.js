/**
 * Cipherguard ~ Open source password manager for teams
 * Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.com)
 *
 * Licensed under GNU Affero General Public License version 3 of the or any later version.
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) 2021 Cipherguard SA (https://www.cipherguard.com)
 * @license       https://opensource.org/licenses/AGPL-3.0 AGPL License
 * @link          https://www.khulnasoft.com KhulnaSoft(tm)
 * @since         3.3.0
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

class AnimatedFeedback extends Component {
  /**
   * Render the component
   * @return {JSX}
   */
  render() {
    return (
      <div className="illustration icon-feedback">
        <div className={this.props.name}></div>
      </div>
    );
  }
}

AnimatedFeedback.defaultProps = {};

AnimatedFeedback.propTypes = {
  name: PropTypes.string,
};

export default AnimatedFeedback;
