function Pizza(size,crust,topping,quantity,total){
this.size=size;
this.crust=crust;
this.topping=topping;
this.quantity=quantity;
this.total=total;
};
$('document').ready(function(){
$('#shopping-card').submit(function(e){
e.preventDefault();
//get the value frm the selected option in dropdown
var pizaSize=$('#pizza-size').val();
var pizaCrust=$('#pizza-crust').val();
var pizaTop=$('#pizza-topping').val();
var pizaQuant=$('#num').val();
var totalPrice;
Pizza.prototype.getPrice=function(){
    return this.totalPrice
};
//seting the price for every piza size
let price;
switch(pizaSize){
    case pizaSize = "small":
    price = 2500;
    if(pizaCrust === "Thin " && pizaTop==='Mushrooms'){
      totalPrice=(price*pizaQuant) + 1500;
    }
    else if(pizaCrust === "Thin " && pizaTop==='Onions'){
       totalPrice=(price*pizaQuant) + 1700;
    }
    else if(pizaCrust === "Thin " && pizaTop==='Sausage'){
      totalPrice=(price*pizaQuant) + 1900;
    }
    else if(pizaCrust === "Thin " && pizaTop==='Bacon'){
       totalPrice=(price*pizaQuant) + 2100;
    }
    else if(pizaCrust === "Thin " && pizaTop=== 'Extra cheese'){
       totalPrice=(price*pizaQuant) + 2300;
    }
    else if(pizaCrust === "Thin " && pizaTop==='Black Olives'){
       totalPrice=(price*pizaQuant) + 2300;
    }
    else if(pizaCrust === "Thin " && pizaTop==='Green Peppers'){
       totalPrice=(price*pizaQuant) + 2500;
    }
    else if(pizaCrust === "Thin " && pizaTop==='Pepperoni'){
       totalPrice=(price*pizaQuant) + 2700;
    }
    else if(pizaCrust==="Flatbread " && pizaTop==='Mushrooms'){
       totalPrice===(price*pizaQuant)+2200;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop==='Onions'){
        totalPrice===(price*pizaQuant)+2400;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop==='Sausage'){
        totalPrice===(price*pizaQuant)+2600;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop==='Bacon'){
        totalPrice===(price*pizaQuant)+2800;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop==='Extra cheese'){
        totalPrice===(price*pizaQuant)+3000;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop==='Black Olives'){
       totalPrice===(price*pizaQuant)+3200;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop==='Green Peppers'){
        totalPrice===(price*pizaQuant)+3400;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop==='Pepperoni'){
        totalPrice===(price*pizaQuant)+3600;
    }
    ////////
    
    else if(pizaCrust==='Thick' && pizaTop==='Mushrooms'){
        totalPrice===(price*pizaQuant)+2800;
    }
    else if(pizaCrust==='Thick' && pizaTop==='Onions'){
        totalPrice===(price*pizaQuant)+3000;
    }
    else if(pizaCrust==='Thick' && pizaTop==='Sausage'){
        totalPrice===(price*pizaQuant)+3200;
    }
    else if(pizaCrust==='Thick' && pizaTop==='Bacon'){
        totalPrice===(price*pizaQuant)+3400;
    }
    else if(pizaCrust==='Thick ' && pizaTop==='Extra cheese'){
       totalPrice===(price*pizaQuant)+3600;
    }
    else if(pizaCrust==='Thick' && pizaTop==='Black Olives'){
        totalPrice===(price*pizaQuant)+3800;
    }
    else if(pizaCrust==='Thick' && pizaTop==='Green Peppers'){
       totalPrice===(price*pizaQuant)+4000;
    }
    else if(pizaCrust==='Thick ' && pizaTop==='Pepperoni'){
       totalPrice===(price*pizaQuant)+4200;
    }
    /////
    else if(pizaCrust==='Focacci' && pizaTop==='Mushrooms'){
       totalPrice===(price*pizaQuant)+2500;
    }
    else if(pizaCrust==='Focacci' && pizaTop==='Onions'){
        totalPrice===(price*pizaQuant)+2700;
    }
    else if(pizaCrust==='Focacci' && pizaTop==='Sausage'){
        totalPrice===(price*pizaQuant)+2900;
    }
    else if(pizaCrust==='Focacci' && pizaTop==='Bacon'){
       totalPrice===(price*pizaQuant)+3100;
    }
    else if(pizaCrust==='Focacci ' && pizaTop==='Extra cheese'){
        totalPrice===(price*pizaQuant)+3300;
    }
    else if(pizaCrust==='Focacci' && pizaTop==='Black Olives'){
        totalPrice===(price*pizaQuant)+3500;
    }
    else if(pizaCrust==='Focacci' && pizaTop==='Green Peppers'){
        totalPrice===(price*pizaQuant)+3800;
    }
    else if(pizaCrust==='Focacci ' && pizaTop==='Pepperoni'){
        totalPrice===(price*pizaQuant)+4000;
    }
break;
////////////////////////////////////////////////////////////////////

case pizaSize="medium":
price=5000;
if(pizaCrust === "Thin " && pizaTop==='Mushrooms'){
    totalPrice=(price*pizaQuant) + 1500;
}
else if(pizaCrust === "Thin " && pizaTop==='Onions'){
   totalPrice=(price*pizaQuant) + 1700;
}
else if(pizaCrust === "Thin " && pizaTop==='Sausage'){
   totalPrice=(price*pizaQuant) + 1900;
}
else if(pizaCrust === "Thin " && pizaTop==='Bacon'){
   totalPrice=(price*pizaQuant) + 2100;
}
else if(pizaCrust === "Thin " && pizaTop=== 'Extra cheese'){
   totalPrice=(price*pizaQuant) + 2300;
}
else if(pizaCrust === "Thin " && pizaTop==='Black Olives'){
   totalPrice=(price*pizaQuant) + 2300;
}
else if(pizaCrust === "Thin " && pizaTop==='Green Peppers'){
   totalPrice=(price*pizaQuant) + 2500;
}
else if(pizaCrust === "Thin " && pizaTop==='Pepperoni'){
   totalPrice=(price*pizaQuant) + 2700;
}
else if(pizaCrust==="Flatbread " && pizaTop==='Mushrooms'){
    totalPrice===(price*pizaQuant)+2200;
}
else if(pizaCrust==="Flatbread " && pizaTop==='Onions'){
    totalPrice===(price*pizaQuant)+2400;
}
else if(pizaCrust==="Flatbread " && pizaTop==='Sausage'){
    totalPrice===(price*pizaQuant)+2600;
}
else if(pizaCrust==="Flatbread " && pizaTop==='Bacon'){
    totalPrice===(price*pizaQuant)+2800;
}
else if(pizaCrust==="Flatbread " && pizaTop==='Extra cheese'){
    totalPrice===(price*pizaQuant)+3000;
}
else if(pizaCrust==="Flatbread " && pizaTop==='Black Olives'){
    totalPrice===(price*pizaQuant)+3200;
}
else if(pizaCrust==="Flatbread " && pizaTop==='Green Peppers'){
    totalPrice===(price*pizaQuant)+3400;
}
else if(pizaCrust==="Flatbread " && pizaTop==='Pepperoni'){
    totalPrice===(price*pizaQuant)+3600;
}
////////

else if(pizaCrust==="Thick" && pizaTop==='Mushrooms'){
    totalPrice===(price*pizaQuant)+2800;
}
else if(pizaCrust==="Thick" && pizaTop==='Onions'){
    totalPrice===(price*pizaQuant)+3000;
}
else if(pizaCrust==="Thick" && pizaTop==='Sausage'){
    totalPrice===(price*pizaQuant)+3200;
}
else if(pizaCrust==="Thick" && pizaTop==='Bacon'){
    totalPrice===(price*pizaQuant)+3400;
}
else if(pizaCrust==="Thick " && pizaTop==='Extra cheese'){
    totalPrice===(price*pizaQuant)+3600;
}
else if(pizaCrust==="Thick" && pizaTop==='Black Olives'){
    totalPrice===(price*pizaQuant)+3800;
}
else if(pizaCrust==="Thick" && pizaTop==='Green Peppers'){
    totalPrice===(price*pizaQuant)+4000;
}
else if(pizaCrust==="Thick " && pizaTop==='Pepperoni'){
    totalPrice===(price*pizaQuant)+4200;
}
/////
else if(pizaCrust==='Focacci' && pizaTop==='Mushrooms'){
    totalPrice===(price*pizaQuant)+2500;
}
else if(pizaCrust==='Focacci' && pizaTop==='Onions'){
    totalPrice===(price*pizaQuant)+2700;
}
else if(pizaCrust==='Focacci' && pizaTop==='Sausage'){
    totalPrice===(price*pizaQuant)+2900;
}
else if(pizaCrust==='Focacci' && pizaTop==='Bacon'){
    totalPrice===(price*pizaQuant)+3100;
}
else if(pizaCrust==='Focacci ' && pizaTop==='Extra cheese'){
    totalPrice===(price*pizaQuant)+3300;
}
else if(pizaCrust==='Focacci' && pizaTop==='Black Olives'){
    totalPrice===(price*pizaQuant)+3500;
}
else if(pizaCrust==='Focacci' && pizaTop==='Green Peppers'){
    totalPrice===(price*pizaQuant)+3800;
}
else if(pizaCrust==='Focacci ' && pizaTop==='Pepperoni'){
    totalPrice===(price*pizaQuant)+4000;
}
break;
//////////////////////////////////////////////////////////////////////////////
case pizaSize="large":
price=10000;
if(pizaCrust === "Thin " && pizaTop==='Mushrooms'){
       totalPrice=(price*pizaQuant) + 1500;
}
else if(pizaCrust === "Thin " && pizaTop==='Onions'){
   totalPrice=(price*pizaQuant) + 1700;
}
else if(pizaCrust === "Thin " && pizaTop==='Sausage'){
   totalPrice=(price*pizaQuant) + 1900;
}
else if(pizaCrust === "Thin " && pizaTop==='Bacon'){
   totalPrice=(price*pizaQuant) + 2100;
}
else if(pizaCrust === "Thin " && pizaTop=== 'Extra cheese'){
   totalPrice=(price*pizaQuant) + 2300;
}
else if(pizaCrust === "Thin " && pizaTop==='Black Olives'){
   totalPrice=(price*pizaQuant) + 2300;
}
else if(pizaCrust === "Thin " && pizaTop==='Green Peppers'){
   totalPrice=(price*pizaQuant) + 2500;
}
else if(pizaCrust === "Thin " && pizaTop==='Pepperoni'){
   totalPrice=(price*pizaQuant) + 2700;
}
else if(pizaCrust==='Flatbread ' && pizaTop==='Mushrooms'){
    totalPrice===(price*pizaQuant)+2200;
}
else if(pizaCrust==='Flatbread ' && pizaTop==='Onions'){
    totalPrice===(price*pizaQuant)+2400;
}
else if(pizaCrust==='Flatbread ' && pizaTop==='Sausage'){
    
    totalPrice===(price*pizaQuant)+2600;
}
else if(pizaCrust==='Flatbread' && pizaTop==='Bacon'){
    totalPrice===(price*pizaQuant)+2800;
}
else if(pizaCrust==='Flatbread ' && pizaTop==='Extra cheese'){
    totalPrice===(price*pizaQuant)+3000;
}
else if(pizaCrust==='Flatbread' && pizaTop==='Black Olives'){
    totalPrice===(price*pizaQuant)+3200;
}
else if(pizaCrust==='Flatbread' && pizaTop==='Green Peppers'){
    totalPrice===(price*pizaQuant)+3400;
}
else if(pizaCrust==='Flatbread' && pizaTop==='Pepperoni'){
    totalPrice===(price*pizaQuant)+3600;
}
////////

else if(pizaCrust==='Thick' && pizaTop==='Mushrooms'){
    totalPrice===(price*pizaQuant)+2800;
}
else if(pizaCrust==='Thick' && pizaTop==='Onions'){
     totalPrice===(price*pizaQuant)+3000;
}
else if(pizaCrust==='Thick' && pizaTop==='Sausage'){
    totalPrice===(price*pizaQuant)+3200;
}
else if(pizaCrust==='Thick' && pizaTop==='Bacon'){
    totalPrice===(price*pizaQuant)+3400;
}
else if(pizaCrust==='Thick ' && pizaTop==='Extra cheese'){
    totalPrice===(price*pizaQuant)+3600;
}
else if(pizaCrust==='Thick' && pizaTop==='Black Olives'){
    totalPrice===(price*pizaQuant)+3800;
}
else if(pizaCrust==='Thick' && pizaTop==='Green Peppers'){
    totalPrice===(price*pizaQuant)+4000;
}
else if(pizaCrust==='Thick ' && pizaTop==='Pepperoni'){
    totalPrice===(price*pizaQuant)+4200;
}
/////
else if(pizaCrust==='Focacci' && pizaTop==='Mushrooms'){
    totalPrice===(price*pizaQuant)+2500;
}
else if(pizaCrust==='Focacci' && pizaTop==='Onions'){
    totalPrice===(price*pizaQuant)+2700;
}
else if(pizaCrust==='Focacci' && pizaTop==='Sausage'){
    totalPrice===(price*pizaQuant)+2900;
}
else if(pizaCrust==='Focacci' && pizaTop==='Bacon'){
    totalPrice===(price*pizaQuant)+3100;
}
else if(pizaCrust==='Focacci ' && pizaTop==='Extra cheese'){
    totalPrice===(price*pizaQuant)+3300;
}
else if(pizaCrust==='Focacci' && pizaTop==='Black Olives'){
    totalPrice===(price*pizaQuant)+3500;
}
else if(pizaCrust==='Focacci' && pizaTop==='Green Peppers'){
    totalPrice===(price*pizaQuant)+3800;
}
else if(pizaCrust==='Focacci ' && pizaTop==='Pepperoni'){
    totalPrice===(price*pizaQuant)+4000;
}
}
var newPizza = new Pizza(pizaSize,pizaCrust,pizaTop,pizaQuant,totalPrice);
console.log(newPizza);
console.log(totalPrice);
$('.summary').show();
$('.pizaSize').text(newPizza.size);
$('.pizaCrust').text(newPizza.crust);
$('.pizaTop').text(newPizza.topping);
$('.pizaQuant').text(newPizza.quantity);
$('.pizaTot').text(newPizza.total);
});
});