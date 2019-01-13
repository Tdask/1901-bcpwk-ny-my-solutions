// YOUR CODE BELOW
const mySlice = (originalStr, startIdx = 0, endIdx = originalStr.length) => {
    let newStr = '';
    for (let i = startIdx; i < endIdx; i++ ){
        newStr += originalStr[i];
    } return newStr;
}