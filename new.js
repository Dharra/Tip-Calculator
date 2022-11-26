function calculateTip(){
  
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("numPeople").value;
  if (billAmount === "" || serviceQuality == 0) {
    window.alert("Please input a value for each field");
    return;
  }
   if (numPeople === "" || numPeople < 1){
    window.alert("Please input a value for each field");
    
     
  
     
} else {
  
   document.getElementById("each").style.display = "block";
  
  }
  
  var total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  
  //display tip
  document.getElementById("total").style.display = "block";
  document.getElementById("tip").innerHTML = total;
  
};
  
//tip calculate function
document.getElementById("calculate").onclick = function(){ calculateTip(); 
}