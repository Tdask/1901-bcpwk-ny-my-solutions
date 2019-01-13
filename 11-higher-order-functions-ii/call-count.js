// YOUR CODE BELOW

function callCount(){
    let count = 1;
    return function(){
     return count++
    }
}