
    //update memory cost
  
function updateMemoryPrice(is16GB){

    var memory=document.getElementById("MemoryCost");
    
    if(is16GB){
        memory.innerText=180;
    }
    else{
        memory.innerText=0;
    }
    var memoryCost=parseInt(memory.innerText);
    
    
  }

 
//update SSD cost

function updateSSDPrice(ssd){
      

    var ssdCost=document.getElementById("StorageCost");
    
    
    if(ssd==256){
        ssdCost.innerText=0;
    }
    if(ssd==512){
        ssdCost.innerText=100;
    }

    if(ssd==1024){
    ssdCost.innerText=180;
     }
    ssdPrice=parseInt(ssdCost.innerText);
   

}

//update delivery cost
function updateDeliveryPrice(isWithCost){

    var delivery=document.getElementById("Deliverycharge");
    
    if(isWithCost){
        delivery.innerText=20;
    }
    else{
        delivery.innerText=0;
    }
    var deliveryCost=parseInt(delivery.innerText);
    
  }

 


  
  //For memory
var memory8GB= document.getElementById("memory8GB");
memory8GB.addEventListener("click",function(){
    updateMemoryPrice(false);

    Total_Cost();
    
  
});

var memory16GB= document.getElementById("memory16GB");
memory16GB.addEventListener("click",function(){
   updateMemoryPrice(true);
   Total_Cost();
  
});




  //For storage
  var ssd256= document.getElementById("ssd-256");
  ssd256.addEventListener("click",function(){
    StorageCharge=updateSSDPrice(256);
    Total_Cost();
    
  });
  
  var ssd512= document.getElementById("ssd-512");
  
  ssd512.addEventListener("click",function(){
    StorageCharge= updateSSDPrice(512);
    Total_Cost();
    
  });


  var ssd1024= document.getElementById("ssd-1TB");
  ssd1024.addEventListener("click",function(){
     updateSSDPrice(1024);
     Total_Cost();
   
    
  });



  //For Delivery
var DeliveryFree= document.getElementById("deliveryFree");
DeliveryFree.addEventListener("click",function(){
   updateDeliveryPrice(false);
   Total_Cost();
  
});

var DeliveryCost= document.getElementById("deliveryCost");
DeliveryCost.addEventListener("click",function(){
    updateDeliveryPrice(true);
    Total_Cost();
    
    
  
});

//total calculation
function Total_Cost(){


    memoryTotal=parseInt(document.getElementById("MemoryCost").innerText);
    StorageTotal=parseInt(document.getElementById("StorageCost").innerText);

    DeliveryTotal=parseInt(document.getElementById("Deliverycharge").innerText);

    total=parseInt(document.getElementById("BestPrice").innerText);
    TotalCost=total+memoryTotal+StorageTotal+DeliveryTotal;

    totalPrice=document.getElementById("TotalPrice").innerText= TotalCost;
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = TotalCost;
}

    
//promo code matching
document.getElementById('Apply').addEventListener('click', function () {
    const text = document.getElementById('promoCode');
    const promoCode = text.value;
    console.log(promoCode);
    //check input
    if (promoCode == 'stevekaku') {
        Finaltotal(true);
    }
    else{
        Finaltotal(false);
    }
    
    text.value = '';
});
  //final total calculation
function Finaltotal(isDiscount){
    memoryTotal=parseFloat(document.getElementById("MemoryCost").innerText);
    StorageTotal=parseFloat(document.getElementById("StorageCost").innerText);
    
    DeliveryTotal=parseFloat(document.getElementById("Deliverycharge").innerText);
    
    total=parseFloat(document.getElementById("BestPrice").innerText);
    if(isDiscount){
        const totalAll = (total+memoryTotal+StorageTotal+DeliveryTotal) * 0.8;
        const finalTotal = document.getElementById('final-total');
        finalTotal.innerText = totalAll;
    }
    else{
        const totalAll = (total+memoryTotal+StorageTotal+DeliveryTotal);
        const finalTotal = document.getElementById('final-total');
        finalTotal.innerText = totalAll;
    }
    
}



 




