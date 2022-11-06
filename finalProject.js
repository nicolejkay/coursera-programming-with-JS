// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for(var i = 0; i < dishData.length; i++){
        let finalPrice;
        if(taxBoolean === true){
            finalPrice = dishData[i].price * tax;
        }
        else if(taxBoolean === false){
            finalPrice = dishData[i].price;
        }
        else{
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`)
    }
    
}

// Implement getDiscount()
function getDiscount(taxBoolean,guests) {
    console.log("i am working")
    getPrices(taxBoolean, )

    
}

// Call getDiscount()
getDiscount(true, 2)
getDiscount(false,10)
getDiscount('a','b')