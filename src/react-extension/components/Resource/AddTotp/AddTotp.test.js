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
 * @since         4.4.0
 */

/**
 * Unit tests on AddTotp in regard of specifications
 */
import "../../../test/lib/crypto/cryptoGetRandomvalues";
import {waitFor} from "@testing-library/react";
import {defaultProps} from "./AddTotp.test.data";
import AddTotpPage from "./AddTotp.test.page";
import TotpViewModel from "../../../../shared/models/totp/TotpViewModel";

describe("See the Add TOTP", () => {
  let page, props;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    props = defaultProps(); // The props to pass

    page = new AddTotpPage(props);
  });

  const truncatedWarningMessage = "Warning: this is the maximum size for this field, make sure your data was not truncated.";
  describe('As LU I can start adding a totp', () => {
    it('matches the styleguide', async() => {
      expect.assertions(10);
      // Dialog title exists and correct
      expect(page.exists()).toBeTruthy();
      expect(page.header.textContent).toBe("Add TOTP");

      // Close button exists
      expect(page.dialogClose).not.toBeNull();

      // Username input field exists.
      expect(page.secretKey.value).toBe("");

      // Upload QR code button exists.
      expect(page.uploadQrCodeButton).not.toBeNull();

      // Click to open advanced settings
      await page.click(page.advancedSettings);

      // Period input field exists
      expect(page.period.value).toBe("30");

      // Digits input field exists
      expect(page.digits.value).toBe("6");

      // Algorithm input field exists
      expect(page.algorithm.textContent).toBe("SHA1");

      // Save button exists
      expect(page.saveButton.textContent).toBe("Apply");

      // Cancel button exists
      expect(page.cancelButton.textContent).toBe("Cancel");
    });

    it('Requests the addon to create a totp when clicking on the submit button.', async() => {
      expect.assertions(4);
      expect(page.exists()).toBeTruthy();
      // create standalone totp
      const resourceMeta = {
        secret_key: "JBSWY3DPEHPK3PXP",
        period: 30,
        digits: 6,
        algorithm: "SHA1",
      };
      // Fill the form
      page.fillInput(page.secretKey, resourceMeta.secret_key);

      await page.click(page.saveButton);
      await waitFor(() => {});

      expect(props.onSubmit).toHaveBeenCalledWith(new TotpViewModel(resourceMeta));
      expect(props.onClose).toBeCalled();
      expect(props.onCancel).toBeCalled();
    });

    it('Requests the addon to create a totp with advanced settings when clicking on the submit button.', async() => {
      expect.assertions(4);
      expect(page.exists()).toBeTruthy();
      // create standalone totp
      const resourceMeta = {
        secret_key: "JBSWY3DPEHPK3PXP",
        period: 60,
        digits: 7,
        algorithm: "SHA256",
      };
      // Fill the form
      page.fillInput(page.secretKey, resourceMeta.secret_key);

      // Click to open advanced settings
      await page.click(page.advancedSettings);
      // Fill the advanced settings form
      page.fillInput(page.period, resourceMeta.period);
      page.fillInput(page.digits, resourceMeta.digits);
      await page.selectFirstAlgorithm();

      await page.click(page.saveButton);

      expect(props.onSubmit).toHaveBeenCalledWith(new TotpViewModel(resourceMeta));
      expect(props.onClose).toBeCalled();
      expect(props.onCancel).toBeCalled();
    });

    it('As LU I shouldn’t be able to submit the form if there is an invalid field', async() => {
      expect.assertions(7);
      expect(page.exists()).toBeTruthy();
      // Click to open advanced settings
      await page.click(page.advancedSettings);
      // Fill the advanced settings form
      page.fillInput(page.period, "");
      page.fillInput(page.digits, 9);
      await page.click(page.saveButton);

      // Throw error message
      expect(page.secretKeyErrorMessage.textContent).toBe("The key is required.");
      expect(page.digitsErrorMessage.textContent).toBe("TOTP length must be between 6 and 8.");
      expect(page.periodErrorMessage.textContent).toBe("TOTP expiry is required.");

      page.fillInput(page.secretKey, "????????");
      page.fillInput(page.period, 0);
      page.fillInput(page.digits, "");

      page.keyUpInput(page.secretKey);
      page.keyUpInput(page.period);
      page.keyUpInput(page.digits);

      expect(page.secretKeyErrorMessage.textContent).toBe("The key is not valid.");
      expect(page.digitsErrorMessage.textContent).toBe("TOTP length is required.");
      expect(page.periodErrorMessage.textContent).toBe("TOTP expiry must be greater than 0.");
    });

    it('As LU I can stop adding a totp by clicking on the cancel button', async() => {
      expect.assertions(3);
      expect(page.exists()).toBeTruthy();
      await page.click(page.cancelButton);
      expect(props.onClose).toBeCalled();
      expect(props.onCancel).toBeCalled();
    });

    it('As LU I cannot update the form fields and I should see a processing feedback while submitting the form', async() => {
      // Mock the request function to make it the expected result
      let updateResolve;
      const requestMockImpl = jest.fn(() => new Promise(resolve => {
        updateResolve = resolve;
      }));

      page.fillInput(page.secretKey, "JBSWY3DPEHPK3PXP");

      // Mock the request function to make it the expected result
      jest.spyOn(props, "onSubmit").mockImplementationOnce(requestMockImpl);
      page.clickWithoutWaitFor(page.saveButton);
      // API calls are made on submit, wait they are resolved.
      await waitFor(() => {
        expect(page.secretKey.getAttribute("disabled")).not.toBeNull();
        expect(page.saveButton.getAttribute("disabled")).not.toBeNull();
        expect(page.saveButton.className).toBe("button primary disabled processing");
        expect(page.cancelButton.className).toBe("link cancel");
        updateResolve();
      });
    });

    it('As LU I can stop adding a totp by closing the dialog', async() => {
      expect.assertions(3);
      expect(page.exists()).toBeTruthy();
      await page.click(page.dialogClose);
      expect(props.onClose).toBeCalled();
      expect(props.onCancel).toBeCalled();
    });

    it('As LU I can stop adding a totp with the keyboard (escape)', async() => {
      expect.assertions(3);
      expect(page.exists()).toBeTruthy();
      await page.escapeKey(page.dialogClose);
      expect(props.onClose).toBeCalled();
      expect(props.onCancel).toBeCalled();
    });

    it('As LU I should access to the upload QR code dialog', async() => {
      expect.assertions(1);
      await page.click(page.uploadQrCodeButton);
      expect(props.onOpenUploadQrCode).toHaveBeenCalled();
    });

    it("As a user I should see a feedback when the key, name or uri fields content is truncated by a field limit", async() => {
      expect.assertions(1);
      page.fillInput(page.secretKey, 'a'.repeat(1025));

      page.keyUpInput(page.secretKey);

      expect(page.secretKeyWarningMessage.textContent).toEqual(truncatedWarningMessage);
    });
  });
});

