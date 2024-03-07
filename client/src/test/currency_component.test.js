/**
 * Before we begin, we need to setup the environment to run React tests:
 * 1- run the following command: npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @babel/preset-env @babel/preset-react
 * 2- In the root directory of the client folder, create a new file and name it ".babelrc"
 * 3- Add the following content to the file: 
 *      {
            "presets": [
                "@babel/preset-env",
                ["@babel/preset-react", { "runtime": "automatic" }]
            ]
        }
 * 4- In package.json, add the following at the end of the file (before the last } bracket):
        ,"jest": {
            "testEnvironment": "jsdom"
        }
 *******       
 * Necessary import:
 */ 
 import "@testing-library/jest-dom";
 import { render, screen } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
 import Convert from "../components/Convert";
 
 /**
  * we will test the conversion section that contains: currency code & amount input fields, 
  *   Convert button and converted amount text. 
  * You need to do write one unit test that ensure the functionality of the section is working as intended.
  * We need to test that the user will be able to type into the input fields then click the Convert button.
  * Once the button is clicked, the conversion amount should be displayed on the screen.
  */
 
 test('Testing currency convert from CDN to USD', async () => {
   // convertCurrency is a mock function now
   const convertCurrency = jest.fn();
   console.log = jest.fn();
   alert = jest.fn();
   const user = userEvent.setup();
 
   render(<Convert sendFunction={convertCurrency} />);
 
   const currencyFromInput = screen.getByPlaceholderText('Currency From');
   const currencyToInput = screen.getByPlaceholderText('Currency To');
   const amountInput = screen.getByPlaceholderText('Amount');
   const convertButton = screen.getByRole('button');
 
   await user.type(currencyFromInput, 'CDN');
   await user.type(currencyToInput, 'USD');
   await user.type(amountInput, '100');
   await user.click(convertButton);
 
   expect(currencyFromInput.value).toBe('CDN');
   expect(currencyToInput.value).toBe('USD');
   expect(amountInput.value).toBe('100');
 
   expect(convertCurrency.mock.calls).toHaveLength(1);
   expect(console.log).toHaveBeenCalledWith('Amount converted', 75);
   expect(alert).toHaveBeenCalledWith('Currency Converted Successfully');
 });
 