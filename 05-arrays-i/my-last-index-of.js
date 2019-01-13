// ### My Last Index Of

// Define a function, `myLastIndexOf`, that accepts up to three arguments:
//   1. array
//   2. searchValue
//   3. startIdx (optional)

// `myLastIndexOf` should return the last index at which the searchValue appears in
// the array.

// ```javascript
// myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
// ```

// If the searchValue isn't in the array, `myLastIndexOf` should return -1.

// ```javascript
// myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
// ```

// If startIdx is defined, `myLastIndexOf` should start looking for the seachValue
// at that index, and then move toward the front of the array as it looks for the
// value.

// ```javascript
// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
// ```
// YOUR CODE BELOW
const myLastIndexOf = (array, searchValue, startIdx = 0) =>{
    if (startIdx > 0){
        for (let i = startIdx; i>= 0; i--) {
            if(array[i]=== searchValue) return i;   
        }
     }
        let currIndex = 0;
    for (let i = 0; i< array.length; i++){
        if( array[i]=== searchValue) currIndex = i
   } 
    if (currIndex < 1) return -1
    return currIndex
}



console.log(myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2))