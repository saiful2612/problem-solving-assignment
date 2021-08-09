
// Problem 1

function seerToMon(seer){

    if(seer>=0){
        const Mon = seer/40 ;       

        return Mon;
    }
    else{
        return 'Please enter positive value';
    }
}


// Problem 2

function totalSales( shirtQuantiy,pantQuantity, shoeQuantity){

    if( shirtQuantiy>=0 && pantQuantity >= 0 && shoeQuantity >= 0){
        const shirtPrice=100;
        const pantPrice =200;
        const showPrice =500;

        const totalShirtPrice= shirtPrice * shirtQuantiy;
        const totalPantPrice=pantPrice*pantQuantity;
        const totalShoePrice=showPrice*shoeQuantity;

        const totalPrice= totalShirtPrice+ totalPantPrice+ totalShoePrice;

        return totalPrice;
    }
    else{
        return 'Please enter three positive quantity';
    }

}



// Problem 3


function deliveryCost(shirtNumber){

    if(shirtNumber>=0){

        if(shirtNumber>=200){
            const first100Cost= 100*100;
            const secondd100Cost = 100*80;
            const remainCost= (shirtNumber-200)*50;
            const totalCost= first100Cost + secondd100Cost + remainCost;
            return totalCost;
        }
        else if(shirtNumber<= 100){
            const totalCost= shirtNumber*100;
            return totalCost;
        }
        else{
            const first100Cost= 100*100;
            const remainCost= (shirtNumber-100)*80;
            const totalCost= first100Cost+ remainCost;
            return totalCost;
        }

    }
    else{
        return 'Please enter a positive number';
    }

   
}


// Problem 4

function perfectFriend(serial){

    for(let i=0; i<serial.length; i++){
        const element = serial[i];
        if(element.length !=5){
            continue;
        }
        else{
            return element;
        }        
    }    
}






