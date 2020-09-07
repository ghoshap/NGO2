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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ContainerAsset', component: ContainerAssetComponent },
  { path: 'AmountReceivedAsset', component: AmountReceivedAssetComponent },
  { path: 'OverAllBalanceAsset', component: OverAllBalanceAssetComponent },
  { path: 'DonatedAmountAsset', component: DonatedAmountAssetComponent },
  { path: 'DeliveryReceivedAsset', component: DeliveryReceivedAssetComponent },
  { path: 'vendor', component: vendorComponent },
  { path: 'trustee', component: trusteeComponent },
  { path: 'donor', component: donorComponent },
  { path: 'NGOManager', component: NGOManagerComponent },
  { path: 'ContainerDelivery', component: ContainerDeliveryComponent },
  { path: 'Donation', component: DonationComponent },
  { path: 'DeliveryReceived', component: DeliveryReceivedComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
