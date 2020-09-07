/**
 * Receive new deliveries and udtate container quantitties.
 * @param {com.ngo2.DeliveryReceived} tx The container asset instance.
 * @transaction
 */
async function DeliveryReceived(tx) 
    {
      const DeliveryID = tx.deliveryID;
      const assetRegistryAmountReceived = await getAssetRegistry('com.ngo2.AmountReceivedAsset');
      let AmountReceivedExists = await assetRegistryAmountReceived.exists(DeliveryID);
      
      if(AmountReceivedExists ){
        let AmountReceived = await assetRegistryAmountReceived.get(DeliveryID);
        if(tx.amountToBeGiven === AmountReceived.amountReceived){
          const assetRegistryBalance = await getAssetRegistry('com.ngo2.OverAllBalanceAsset');
   
          var list = await assetRegistryBalance.getAll();
          const OBalanceID = 'A' + parseInt(list.length);
          let OBalance = await assetRegistryBalance.get(OBalanceID);
          const oldBalance = OBalance.LatestBalance; 
          const newBalanceID = 'A' + (parseInt(list.length)+1);
    
    
      
    
          let newOBalance = getFactory().newResource('com.ngo2','OverAllBalanceAsset',newBalanceID);
          newOBalance.LatestBalance = oldBalance - tx.amountToBeGiven;
          newOBalance.owner = OBalance.owner;


          await assetRegistryBalance.add(newOBalance);
         
         }
        else{
        throw "Amount Does not Match";
          exit;
        }
      }
      else{
        let newAmountReceived = getFactory().newResource('com.ngo2','AmountReceivedAsset',DeliveryID);
          newAmountReceived.amountReceived = tx.amountToBeGiven;
          newAmountReceived.quantity = tx.quantity;
          


          await assetRegistryAmountReceived.add(newAmountReceived);
        
        }
      
    }



