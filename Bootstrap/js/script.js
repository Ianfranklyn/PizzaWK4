

function payment(){
    var size=document.getElementsByName("size");
    var sizeString = "";
    console.log("sizekokokok="+size);
    for(var i =0; i < size.length; i++){
        if (size[i].checked) {
            alert("The sizen is " + size[i].value);
            sizeString = size[i].value;
        }
    }
    

    var crust=document.getElementsByName("crust");
    let crustString
    console.log("crust is="+crust);
    for(var i =0; i < crust.length; i++){
        if (crust[i].checked) {
            alert("The crust is " + crust[i].value);
        }
    }
    var toppingsprice=0;
    var toppings=document.getElementsByName("toppings");
    console.log("toppings is="+toppings);
    for(var i =0; i < toppings.length; i++){
        if (toppings[i].checked) {
            alert("The toppings is " + toppings[i].value);
        }
    }
    var toppingsprice=0;
    if(sizeString==="small"){
        toppingsprice=100;
    }else if (sizeString==="Medium"){
        toppingsprice=200;
    }else if (sizeString==="Large"){
        toppingsprice=300;
    }else if (sizeString==="Extra-Large"){
        toppingsprice=400;
    };
    console.log("toppings ",toppingsprice)


     var sizeprice=0;
     if(sizeString==="small"){
         sizeprice=600;
     }
     else if(sizeString==="Medium"){
         sizeprice=1000;var totalprice=(sizeprice + crustprice + toppingsprice);
         console.log("totalprice"+totalprice);
         // $("#size").html(size+" Pizza");
         // $("#sizeprice").html(" Ksh"+sizeprice+".00");
         // $("#crust").html(crust+" Crust");
         // $("#crustprice").html("+"+crustprice+".00");
         // $("#toppings").html(toppings+" Cheese");
         // $("#toppingsprice").html("+"+toppingsprice+".00");
         // $("#totalprice").value = " Ksh.00";
         console.log("Total prive ", totalprice)
     }
     else if(sizeString==="Large"){
         sizeprice=1400;
     }
     else if(sizeString==="Extra-Large"){
         sizeprice=1600;
     }; console.log("sizepricebiwucubqjb="+sizeprice);

     var crust= document.querySelector('input[name="crust"]:checked').value;console.log("crust"+crust);
     var crustprice=0
     if(crust="Crispy"){
         crustprice=300;
     }
     else if(crust="Stuffed"){
         crustprice=300;
     }
     else if(crust="Gluten-free"){
         crustprice=300;
     }
     else if(crust="Flat Bread"){
         crustprice=300;
     };console.log("crustprice="+crustprice);

     
     var totalprice=(sizeprice + crustprice + toppingsprice);
     console.log("totalprice"+totalprice);
     // $("#size").html(size+" Pizza");
     // $("#sizeprice").html(" Ksh"+sizeprice+".00");
     // $("#crust").html(crust+" Crust");
     // $("#crustprice").html("+"+crustprice+".00");
     // $("#toppings").html(toppings+" Cheese");
     // $("#toppingsprice").html("+"+toppingsprice+".00");
     // $("#totalprice").value = " Ksh.00";
     console.log("Total price ", totalprice)
     alert("The Size is " + sizeString + " it costs "+ sizeprice + "The crust is " + crust + "it costs" +crustprice)

    };













