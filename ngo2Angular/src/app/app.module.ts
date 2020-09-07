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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ContainerAssetComponent } from './ContainerAsset/ContainerAsset.component';
import { AmountReceivedAssetComponent } from './AmountReceivedAsset/AmountReceivedAsset.component';
import { OverAllBalanceAssetComponent } from './OverAllBalanceAsset/OverAllBalanceAsset.component';
import { DonatedAmountAssetComponent } from './DonatedAmountAsset/DonatedAmountAsset.component';
import { DeliveryReceivedAssetComponent } from './DeliveryReceivedAsset/DeliveryReceivedAsset.component';

import { vendorComponent } from './vendor/vendor.component';
import { trusteeComponent } from './trustee/trustee.component';
import { donorComponent } from './donor/donor.component';
import { NGOManagerComponent } from './NGOManager/NGOManager.component';

import { ContainerDeliveryComponent } from './ContainerDelivery/ContainerDelivery.component';
import { DonationComponent } from './Donation/Donation.component';
import { DeliveryReceivedComponent } from './DeliveryReceived/DeliveryReceived.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerAssetComponent,
    AmountReceivedAssetComponent,
    OverAllBalanceAssetComponent,
    DonatedAmountAssetComponent,
    DeliveryReceivedAssetComponent,
    vendorComponent,
    trusteeComponent,
    donorComponent,
    NGOManagerComponent,
    ContainerDeliveryComponent,
    DonationComponent,
    DeliveryReceivedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
