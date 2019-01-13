// YOUR CODE BELOW
function lastFridayNight (trans) {
    let totalAmount = 0;
    for (let i=0; i<trans.length; i++){
        totalAmount += trans[i].amount
    } return totalAmount;
}