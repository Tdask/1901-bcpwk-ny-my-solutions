
// YOUR CODE BELOW
function deeperCopy(arr){
    let arrCopy = [];
    for (let i= 0; i < arr.length; i++){
        let currentElement= arr[i];
        if (Array.isArray(currentElement)){
            let tempArr = [];
            for(let j =0; j < currentElement.length; j++){
                tempArr.push(currentElement[j]);
            } arrCopy.push(tempArr);
        } else arrCopy.push(currentElement);
    } return arrCopy;
}