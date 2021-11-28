function payment(){
    var size=document.querySelector('input[name="size"]:checked').ariaValueMax;console.log("size="+size);
     var sizeprice=0;
     if(size==="small"){
         sizeprice=600;
     };
     if(size==="Medium"){
         sizeprice=1000;
     };
     if(size==="Large"){
         sizeprice=1400;
     };
     if(size==="Extra-Large"){
         sizeprice=1600;
     }; console.log("sizeprice="+sizeprice);

     var crust= document.querySelector('input[name="crust"]:checked').ariaValueMax;console.log("crust"+crust);
     var crustprice=0
     if(crust="Crispy"){
         crustprice=300;
     };
     if(crust="Stuffed"){
         crustprice=300;
     };
     if(crust="Gluten-free"){
         crustprice=300;
     };
     if(crust="Flat Bread"){
         crustprice=300;
     };console.log("crustprice="+crustprice);

     var toppings=document.querySelector('input[name="toppings"]:checked').ariaValueMax;console.log("toppings="+toppings);
     var toppingsprice=0;
     if(toppings==="Pepperoni"){
         if(size==="small"){
             toppingsprice=100;
         }else if (size==="Medium"){
             toppingsprice=200;
         }else if (size==="Large"){
             toppingsprice=300;
         }else if (size==="Extra-Large"){
             toppingsprice=400;
         };
        };
};
var totalprice=(sizeprice + crustprice + toppingsprice);console.log("totalprice"+totalprice);
$("#size").html(size+" Pizza");
$("#sizeprice").html(" Ksh"+sizePrice+".00");
$("#crust").html(crust+" Crust");
$("#crustprice").html("+"+crustPrice+".00");
$("#toppings").html(cheese+" Cheese");
$("#toppingsprice").html("+"+cheesePrice+".00");
$("#totalprice").html(" Ksh"+totalPrice+".00");










