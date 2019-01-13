// YOUR CODE BELOW

function myUnshift(array,arg){
    let newArray = [];
    newArray[0] = arg
    for (let i = 1; i<=array.length; i++){
      newArray[i]=array[i-1]
    }
    return newArray
   }