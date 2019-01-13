// YOUR CODE BELOW
const veryOddMutant = (arr) =>{
    let evenCount = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] %2 === 0){
            evenCount++;
            arr.splice(i, 1, 'normie')
        }
    } return evenCount;
}