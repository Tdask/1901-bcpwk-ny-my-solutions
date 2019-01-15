// Write a function, arraySum, that accepts an array of numbers and returns the sum
// of all the numbers in the array (no matter how nested!).

// ```javascript
// arraySum([1, [2, 3, [4]]]) // => 10
// ```

// go through each index in array of numbers, if the element is not an array, add to the sum that we are
// adding to each time. if the element is an array, go through each element of that array, and add all non
// array values to sum...
//base case is when we've reached the last index of array

// YOUR CODE BELOW

function arraySum(array) {
    let sum = 0;   
    for (let i = 0; i < array.length; i++){  
      let element = array[i]  
      if(Array.isArray(element)){  
        sum += arraySum(element)   
      } else {  
        sum += element   
      }  
    }  
    return sum 
  }