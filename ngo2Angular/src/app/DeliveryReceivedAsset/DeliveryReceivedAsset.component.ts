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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DeliveryReceivedAssetService } from './DeliveryReceivedAsset.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-deliveryreceivedasset',
  templateUrl: './DeliveryReceivedAsset.component.html',
  styleUrls: ['./DeliveryReceivedAsset.component.css'],
  providers: [DeliveryReceivedAssetService]
})
export class DeliveryReceivedAssetComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  assetId = new FormControl('', Validators.required);
  owner = new FormControl('', Validators.required);
  quantity = new FormControl('', Validators.required);
  amountToBeGiven = new FormControl('', Validators.required);
  deliveryID = new FormControl('', Validators.required);
  vendorId = new FormControl('', Validators.required);

  constructor(public serviceDeliveryReceivedAsset: DeliveryReceivedAssetService, fb: FormBuilder) {
    this.myForm = fb.group({
      assetId: this.assetId,
      owner: this.owner,
      quantity: this.quantity,
      amountToBeGiven: this.amountToBeGiven,
      deliveryID: this.deliveryID,
      vendorId: this.vendorId
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceDeliveryReceivedAsset.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'com.ngo2.DeliveryReceivedAsset',
      'assetId': this.assetId.value,
      'owner': this.owner.value,
      'quantity': this.quantity.value,
      'amountToBeGiven': this.amountToBeGiven.value,
      'deliveryID': this.deliveryID.value,
      'vendorId': this.vendorId.value
    };

    this.myForm.setValue({
      'assetId': null,
      'owner': null,
      'quantity': null,
      'amountToBeGiven': null,
      'deliveryID': null,
      'vendorId': null
    });

    return this.serviceDeliveryReceivedAsset.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'assetId': null,
        'owner': null,
        'quantity': null,
        'amountToBeGiven': null,
        'deliveryID': null,
        'vendorId': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'com.ngo2.DeliveryReceivedAsset',
      'owner': this.owner.value,
      'quantity': this.quantity.value,
      'amountToBeGiven': this.amountToBeGiven.value,
      'deliveryID': this.deliveryID.value,
      'vendorId': this.vendorId.value
    };

    return this.serviceDeliveryReceivedAsset.updateAsset(form.get('assetId').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceDeliveryReceivedAsset.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceDeliveryReceivedAsset.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'assetId': null,
        'owner': null,
        'quantity': null,
        'amountToBeGiven': null,
        'deliveryID': null,
        'vendorId': null
      };

      if (result.assetId) {
        formObject.assetId = result.assetId;
      } else {
        formObject.assetId = null;
      }

      if (result.owner) {
        formObject.owner = result.owner;
      } else {
        formObject.owner = null;
      }

      if (result.quantity) {
        formObject.quantity = result.quantity;
      } else {
        formObject.quantity = null;
      }

      if (result.amountToBeGiven) {
        formObject.amountToBeGiven = result.amountToBeGiven;
      } else {
        formObject.amountToBeGiven = null;
      }

      if (result.deliveryID) {
        formObject.deliveryID = result.deliveryID;
      } else {
        formObject.deliveryID = null;
      }

      if (result.vendorId) {
        formObject.vendorId = result.vendorId;
      } else {
        formObject.vendorId = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'assetId': null,
      'owner': null,
      'quantity': null,
      'amountToBeGiven': null,
      'deliveryID': null,
      'vendorId': null
      });
  }

}
