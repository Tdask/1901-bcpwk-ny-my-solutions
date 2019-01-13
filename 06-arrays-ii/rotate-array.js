// YOUR CODE BELOW
function rotateArray (origArr, rotateNum){
  let newArr = origArr.slice();
  if (rotateNum === 0) return newArr;
  if (rotateNum < 0) {
      rotateNum = origArr.length + rotateNum;
    }
  let toInsert = newArr.splice(origArr.length - rotateNum).join();
  newArr.unshift(toInsert);
  return newArr;
}