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
import {Trans, withTranslation} from "react-i18next";
import Icon from "../../../../shared/components/Icons/Icon";
import {withAppContext} from "../../../../shared/context/AppContext/AppContext";

class DisplayUnexpectedError extends Component {
  /**
   * Constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = this.defaultState;
    this.bindCallbacks();
  }

  /**
   * Returns the component default state
   */
  get defaultState() {
    return {
      showErrorDetails: false // Display flag of the error details area
    };
  }

  /**
   * Bind the component handlers
   */
  bindCallbacks() {
    this.handleErrorDetailsToggle = this.handleErrorDetailsToggle.bind(this);
  }

  /**
   * Whenever the user click on the action
   */
  onClick() {
    if (this.props.context.port) {
      // A reload from iframe cannot reload the parent due to cross origin so the extension will do
      this.props.context.port.request("cipherguard.tab.reload");
    } else {
      window.location.reload();
    }
  }

  /**
   * Handle the toggle display of error details
   */
  handleErrorDetailsToggle() {
    this.setState({showErrorDetails: !this.state.showErrorDetails});
  }

  /**
   * Does the provided error carry details.
   * @returns {boolean}
   */
  get hasErrorDetails() {
    const error = this.props?.error;
    return Boolean(error?.details) || Boolean(error?.data?.body);
  }

  /**
   * Format the error details as a string.
   * @returns {string}
   */
  formatErrors() {
    const errorMessage = this.props.error?.details || this.props.error?.data;
    return JSON.stringify(errorMessage, null, 4);
  }

  /**
   * Render the component
   * @returns {JSX}
   */
  render() {
    return (
      <div className="setup-error">
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
        <p>{this.props.error && this.props.error.message}</p>
        {this.hasErrorDetails &&
          <div className="accordion error-details">
            <div className="accordion-header">
              <button className="link no-border" type="button" onClick={this.handleErrorDetailsToggle}>
                <Trans>Error details</Trans>
                <Icon name={this.state.showErrorDetails ? "caret-up" : "caret-down"} />
              </button>
            </div>
            {this.state.showErrorDetails &&
              <div className="accordion-content">
                <div className="input text">
                  <label
                    htmlFor="js_field_debug"
                    className="visuallyhidden">
                    <Trans>Error details</Trans>
                  </label>
                  <textarea
                    id="js_field_debug"
                    defaultValue={`${this.formatErrors()}`}
                    readOnly />
                </div>
              </div>
            }
          </div>
        }
        <div className="form-actions">
          <button onClick={this.onClick.bind(this)} className="button primary big full-width" role="button"><Trans>Try again</Trans></button>
        </div>
      </div>
    );
  }
}

DisplayUnexpectedError.defaultProps = {
  title: <Trans>Something went wrong!</Trans>,
  message: <Trans>The operation failed with the following error:</Trans>,
};

DisplayUnexpectedError.propTypes = {
  context: PropTypes.any, // The application context
  title: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  message: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  error: PropTypes.any, // The error to display
};
export default withAppContext(withTranslation("common")(DisplayUnexpectedError));
