function Pizza(size,crust,topping,quantity,totalPrice){
this.size=size;
this.crust=crust;
this.topping=topping;
this.quantity=quantity;
this.totalPrice=totalPrice;
};
$('document').ready(function(){
$('#shopping-card').submit(function(e){
e.preventDefault();
//get the value frm the selected option in dropdown
var selectSize=$('#pizza-size option:selected').text();
var selectCrust=$('#pizza-crust option:selected').text();
var selectToppings=$('#pizza-topping option:selected').text();
var inputNumber=$('input#num').val();

//get the value frm a dropdown selected directly
var pizaSize=$('#pizza-size').val();
var pizaCrust=$('#pizza-crust').val();
var pizaTop=$('#pizza-topping').val();
var pizaQuant=$('#num').val();
var totalPrice;
    
Pizza.prototype.getPrice=function(){
    return this.totalPrice;
};
//seting the price for every piza size

switch(pizaSize){
    case pizaSize = "small":
    price = 2500;
    if(pizaCrust === "thin" && pizaTop === $('#pizza-topping').val()){
        totalPrice=(price*pizaQuant) + 1500;
    }
    else if(pizaCrust==='Flatbread' && pizatop===$('#pizza-topping').val()){
        totalPrice===(price*pizaQuant)+2200;
    }
    else if(pizaCrust==='Thick' && pizatop===$('#pizza-topping').val()){
        totalPrice===(price*pizaQuant)+2800;
    }
    else if(pizaCrust==='Focaccia' && pizatop===$('#pizza-topping').val()){
        totalPrice===(price*pizaQuant)+2000;
    }

break;
case pizaSize="medium":
price=5000;
if(pizaCrust === "thin" && pizaTop === $('#pizza-topping').val()){
    totalPrice=(price*pizaQuant) + 3500;
}
else if(pizaCrust==="Flatbread" && pizatop===$('#pizza-topping').val()){
    totalPrice===(price*pizaQuant)+4200;
}
else if(pizaCrust==='Thick' && pizatop===$('#pizza-topping').val()){
    totalPrice===(price*pizaQuant)+4800;
}
else if(pizaCrust==='Focaccia' && pizatop===$('#pizza-topping').val()){
    totalPrice===(price*pizaQuant)+4000;
}
break;
case pizaSize="large":
price=10000;
if(pizaCrust === "thin" && pizaTop === $('#pizza-topping').val()){
    totalPrice=(price*pizaQuant) + 5000;
}
else if(pizaCrust==="Flatbread" && pizatop===$('#pizza-topping').val()){
    totalPrice===(price*pizaQuant)+6200;
}
else if(pizaCrust==='Thick' && pizatop===$('#pizza-topping').val()){
    totalPrice===(price*pizaQuant)+6800;
}
else if(pizaCrust==='Focaccia' && pizatop===$('#pizza-topping').val()){
    totalPrice===(price*pizaQuant)+6000;
}
}
var newPizza = new Pizza(pizaSize,pizaCrust,pizaTop,pizaQuant,totalPrice);
console.log(newPizza);
console.log(totalPrice);
});
});














  
//       var inputtedFirstName = $("input#new-first-name").val();
//       var inputtedLastName = $("input#new-last-name").val();
  
//       var newContact = new Contact(inputtedFirstName, inputtedLastName);
  
//       $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
  
//       $("input#new-first-name").val("");
//       $("input#new-last-name").val("");
//     });
//   }); 