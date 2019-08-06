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
var selectSize=$('#pizza-size option:selected').text();
var selectCrust=$('#pizza-crust option:selected').text();
var selectToppings=$('#pizza-topping option:selected').text();
var inputNumber=$('input#num').val();

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

    
    else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Mushrooms'){
        
        totalPrice===(price*pizaQuant)+2200;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Onions'){
        
        totalPrice===(price*pizaQuant)+2400;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Sausage'){
        
        totalPrice===(price*pizaQuant)+2600;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Bacon'){
        
        totalPrice===(price*pizaQuant)+2800;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Extra cheese'){
        
        totalPrice===(price*pizaQuant)+3000;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Black Olives'){
        
        totalPrice===(price*pizaQuant)+3200;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Green Peppers'){
        
        totalPrice===(price*pizaQuant)+3400;
    }
    else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Pepperoni'){
        
        totalPrice===(price*pizaQuant)+3600;
    }
    ////////
    
    else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Mushrooms'){
        
        totalPrice===(price*pizaQuant)+2800;
    }
    else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Onions'){
        
        totalPrice===(price*pizaQuant)+3000;
    }
    else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Sausage'){
        
        totalPrice===(price*pizaQuant)+3200;
    }
    else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Bacon'){
        
        totalPrice===(price*pizaQuant)+3400;
    }
    else if(pizaCrust==='Thick ' && pizaTop===pizaTop==='Extra cheese'){
        
        totalPrice===(price*pizaQuant)+3600;
    }
    else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Black Olives'){
        
        totalPrice===(price*pizaQuant)+3800;
    }
    else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Green Peppers'){
        
        totalPrice===(price*pizaQuant)+4000;
    }
    else if(pizaCrust==='Thick ' && pizaTop===pizaTop==='Pepperoni'){
        
        totalPrice===(price*pizaQuant)+4200;
    }
    /////
    else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Mushrooms'){
        
        totalPrice===(price*pizaQuant)+2500;
    }
    else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Onions'){
        
        totalPrice===(price*pizaQuant)+2700;
    }
    else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Sausage'){
        
        totalPrice===(price*pizaQuant)+2900;
    }
    else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Bacon'){
        
        totalPrice===(price*pizaQuant)+3100;
    }
    else if(pizaCrust==='Focacci ' && pizaTop===pizaTop==='Extra cheese'){
        
        totalPrice===(price*pizaQuant)+3300;
    }
    else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Black Olives'){
        
        totalPrice===(price*pizaQuant)+3500;
    }
    else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Green Peppers'){
        
        totalPrice===(price*pizaQuant)+3800;
    }
    else if(pizaCrust==='Focacci ' && pizaTop===pizaTop==='Pepperoni'){
        
        totalPrice===(price*pizaQuant)+4000;
    }

break;

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


else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Mushrooms'){
    
    totalPrice===(price*pizaQuant)+2200;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Onions'){
    
    totalPrice===(price*pizaQuant)+2400;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Sausage'){
    
    totalPrice===(price*pizaQuant)+2600;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Bacon'){
    
    totalPrice===(price*pizaQuant)+2800;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Extra cheese'){
    
    totalPrice===(price*pizaQuant)+3000;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Black Olives'){
    
    totalPrice===(price*pizaQuant)+3200;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Green Peppers'){
    
    totalPrice===(price*pizaQuant)+3400;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Pepperoni'){
    
    totalPrice===(price*pizaQuant)+3600;
}
////////

else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Mushrooms'){
    
    totalPrice===(price*pizaQuant)+2800;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Onions'){
    
    totalPrice===(price*pizaQuant)+3000;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Sausage'){
    
    totalPrice===(price*pizaQuant)+3200;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Bacon'){
    
    totalPrice===(price*pizaQuant)+3400;
}
else if(pizaCrust==='Thick ' && pizaTop===pizaTop==='Extra cheese'){
    
    totalPrice===(price*pizaQuant)+3600;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Black Olives'){
    
    totalPrice===(price*pizaQuant)+3800;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Green Peppers'){
    
    totalPrice===(price*pizaQuant)+4000;
}
else if(pizaCrust==='Thick ' && pizaTop===pizaTop==='Pepperoni'){
    
    totalPrice===(price*pizaQuant)+4200;
}
/////
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Mushrooms'){
    
    totalPrice===(price*pizaQuant)+2500;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Onions'){
    
    totalPrice===(price*pizaQuant)+2700;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Sausage'){
    
    totalPrice===(price*pizaQuant)+2900;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Bacon'){
    
    totalPrice===(price*pizaQuant)+3100;
}
else if(pizaCrust==='Focacci ' && pizaTop===pizaTop==='Extra cheese'){
    
    totalPrice===(price*pizaQuant)+3300;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Black Olives'){
    
    totalPrice===(price*pizaQuant)+3500;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Green Peppers'){
    
    totalPrice===(price*pizaQuant)+3800;
}
else if(pizaCrust==='Focacci ' && pizaTop===pizaTop==='Pepperoni'){
    
    totalPrice===(price*pizaQuant)+4000;
}

break;

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


else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Mushrooms'){
    
    totalPrice===(price*pizaQuant)+2200;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Onions'){
    
    totalPrice===(price*pizaQuant)+2400;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Sausage'){
    
    totalPrice===(price*pizaQuant)+2600;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Bacon'){
    
    totalPrice===(price*pizaQuant)+2800;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Extra cheese'){
    
    totalPrice===(price*pizaQuant)+3000;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Black Olives'){
    
    totalPrice===(price*pizaQuant)+3200;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Green Peppers'){
    
    totalPrice===(price*pizaQuant)+3400;
}
else if(pizaCrust==='Flatbread ' && pizaTop===pizaTop==='Pepperoni'){
    
    totalPrice===(price*pizaQuant)+3600;
}
////////

else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Mushrooms'){
    
    totalPrice===(price*pizaQuant)+2800;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Onions'){
    
    totalPrice===(price*pizaQuant)+3000;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Sausage'){
    
    totalPrice===(price*pizaQuant)+3200;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Bacon'){
    
    totalPrice===(price*pizaQuant)+3400;
}
else if(pizaCrust==='Thick ' && pizaTop===pizaTop==='Extra cheese'){
    
    totalPrice===(price*pizaQuant)+3600;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Black Olives'){
    
    totalPrice===(price*pizaQuant)+3800;
}
else if(pizaCrust==='Thick' && pizaTop===pizaTop==='Green Peppers'){
    
    totalPrice===(price*pizaQuant)+4000;
}
else if(pizaCrust==='Thick ' && pizaTop===pizaTop==='Pepperoni'){
    
    totalPrice===(price*pizaQuant)+4200;
}
/////
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Mushrooms'){
    
    totalPrice===(price*pizaQuant)+2500;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Onions'){
    
    totalPrice===(price*pizaQuant)+2700;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Sausage'){
    
    totalPrice===(price*pizaQuant)+2900;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Bacon'){
    
    totalPrice===(price*pizaQuant)+3100;
}
else if(pizaCrust==='Focacci ' && pizaTop===pizaTop==='Extra cheese'){
    
    totalPrice===(price*pizaQuant)+3300;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Black Olives'){
    
    totalPrice===(price*pizaQuant)+3500;
}
else if(pizaCrust==='Focacci' && pizaTop===pizaTop==='Green Peppers'){
    
    totalPrice===(price*pizaQuant)+3800;
}
else if(pizaCrust==='Focacci ' && pizaTop===pizaTop==='Pepperoni'){
    
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