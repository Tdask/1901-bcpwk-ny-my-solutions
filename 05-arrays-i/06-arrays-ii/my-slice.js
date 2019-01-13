// YOUR CODE BELOW
const mySlice = (origArr, startIdx = 0, endIdx = origArr.length) =>{
    let newArr =[];
    if (startIdx < 0){
        startIdx = origArr.length - Math.abs(startIdx);
    } if (endIdx < 0){
        endIdx = origArr.length - Math.abs(endIdx);
    }
      for (let i = startIdx; i < endIdx; i++){
          newArr.push(origArr[i]);
      }
    return newArr;
}

    