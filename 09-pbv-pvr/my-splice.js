// YOUR CODE BELOW

function mySplice (arr, startIdx, removeAmount, insertVal){
    let newArr = [];
    //build first half of new array
    for (let i = 0; i < startIdx; i++){
        newArr.push(arr[i]);
    } 
     //insert element at given index
    if (insertVal){
      newArr.push(insertVal);
    }
    //build second half of new array
     for (let j =  startIdx + removeAmount; j < arr.length; j++){
        newArr.push(arr[j]);
    } 
    //make an array of removed elements
   let removedArr = arr.slice(startIdx, startIdx+removeAmount);
   //pop out all elements of original array
   const originalArrLength = arr.length;
   for (let i = 0; i < originalArrLength; i++){
     arr.pop();
   }
   //push in all elements of our new array into original array
   for (let i = 0; i <newArr.length; i++){
     arr.push(newArr[i])
   }  
   return removedArr;
  }