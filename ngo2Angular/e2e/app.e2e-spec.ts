/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for ngo2Angular', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be ngo2Angular', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('ngo2Angular');
    })
  });

  it('network-name should be ngo2@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('ngo2@0.0.1.bna');
    });
  });

  it('navbar-brand should be ngo2Angular',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('ngo2Angular');
    });
  });

  
    it('ContainerAsset component should be loadable',() => {
      page.navigateTo('/ContainerAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ContainerAsset');
      });
    });

    it('ContainerAsset table should have 4 columns',() => {
      page.navigateTo('/ContainerAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('AmountReceivedAsset component should be loadable',() => {
      page.navigateTo('/AmountReceivedAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AmountReceivedAsset');
      });
    });

    it('AmountReceivedAsset table should have 4 columns',() => {
      page.navigateTo('/AmountReceivedAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('OverAllBalanceAsset component should be loadable',() => {
      page.navigateTo('/OverAllBalanceAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('OverAllBalanceAsset');
      });
    });

    it('OverAllBalanceAsset table should have 4 columns',() => {
      page.navigateTo('/OverAllBalanceAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('DonatedAmountAsset component should be loadable',() => {
      page.navigateTo('/DonatedAmountAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('DonatedAmountAsset');
      });
    });

    it('DonatedAmountAsset table should have 4 columns',() => {
      page.navigateTo('/DonatedAmountAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('DeliveryReceivedAsset component should be loadable',() => {
      page.navigateTo('/DeliveryReceivedAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('DeliveryReceivedAsset');
      });
    });

    it('DeliveryReceivedAsset table should have 7 columns',() => {
      page.navigateTo('/DeliveryReceivedAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('vendor component should be loadable',() => {
      page.navigateTo('/vendor');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('vendor');
      });
    });

    it('vendor table should have 4 columns',() => {
      page.navigateTo('/vendor');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('trustee component should be loadable',() => {
      page.navigateTo('/trustee');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('trustee');
      });
    });

    it('trustee table should have 3 columns',() => {
      page.navigateTo('/trustee');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('donor component should be loadable',() => {
      page.navigateTo('/donor');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('donor');
      });
    });

    it('donor table should have 3 columns',() => {
      page.navigateTo('/donor');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('NGOManager component should be loadable',() => {
      page.navigateTo('/NGOManager');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('NGOManager');
      });
    });

    it('NGOManager table should have 3 columns',() => {
      page.navigateTo('/NGOManager');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('ContainerDelivery component should be loadable',() => {
      page.navigateTo('/ContainerDelivery');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ContainerDelivery');
      });
    });
  
    it('Donation component should be loadable',() => {
      page.navigateTo('/Donation');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Donation');
      });
    });
  
    it('DeliveryReceived component should be loadable',() => {
      page.navigateTo('/DeliveryReceived');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('DeliveryReceived');
      });
    });
  

});