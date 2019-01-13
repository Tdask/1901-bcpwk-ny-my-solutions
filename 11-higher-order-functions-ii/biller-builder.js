// YOUR CODE BELOW

function billerBuilder(state){
    return function(price){
        if (state === 'NY'){ 
         let priceIncludingTax = (price * 1.04) 
         let finalPriceNY = priceIncludingTax * 1.03
         return finalPriceNY;
        }
        if (state === 'NJ'){
        let priceIncludingTaxNJ = price * 1.06625
        let finalPriceNJ = priceIncludingTaxNJ * 1.05
        return finalPriceNJ;
        }
    }
}