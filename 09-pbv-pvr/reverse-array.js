// YOUR CODE BELOW

const reverseArray = arr =>{
    let tempRevArr = [];
    let origRef = arr;
    let origArrLength = arr.length
      for (let i = 0; i <origArrLength; i++){
        tempRevArr.push(arr.pop());
      }
      for (let j= 0; j<origArrLength; j++){
        arr.push(tempRevArr[j])
      }
      return origRef;
  }
  