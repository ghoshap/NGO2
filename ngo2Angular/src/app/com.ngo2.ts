import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.ngo2{
   export class vendor extends Participant {
      vendorId: string;
      firstName: string;
      vendorType: string;
   }
   export class ContainerAsset extends Asset {
      assetId: string;
      owner: vendor;
      quantity: number;
   }
   export class AmountReceivedAsset extends Asset {
      deliveryID: string;
      quantity: number;
      amountReceived: number;
   }
   export class trustee extends Participant {
      trusteeId: string;
      firstName: string;
   }
   export class OverAllBalanceAsset extends Asset {
      OBalanceId: string;
      owner: trustee;
      LatestBalance: number;
   }
   export class ContainerDelivery extends Transaction {
      containers: ContainerAsset;
      newContainerCount: number;
      deliveryID: string;
      amounttobeReceived: number;
      quantity: number;
   }
   export class ContainerDeliveredEvent extends Event {
      containers: ContainerAsset;
      howManyBefore: number;
      howManyNow: number;
   }
   export class donor extends Participant {
      donorId: string;
      donorName: string;
   }
   export class DonatedAmountAsset extends Asset {
      assetId: string;
      owner: donor;
      donatedAmount: number;
   }
   export class Donation extends Transaction {
      owner: donor;
      DonatedAmount: number;
   }
   export class NGOManager extends Participant {
      managerId: string;
      managerName: string;
   }
   export class DeliveryReceivedAsset extends Asset {
      assetId: string;
      owner: NGOManager;
      quantity: number;
      amountToBeGiven: number;
      deliveryID: string;
      vendorId: string;
   }
   export class DeliveryReceived extends Transaction {
      quantity: number;
      amountToBeGiven: number;
      deliveryID: string;
      vendorId: string;
   }
   export class DonationEvent extends Event {
      donations: DonatedAmountAsset;
      balanceBefore: number;
      balanceNow: number;
   }
// }
