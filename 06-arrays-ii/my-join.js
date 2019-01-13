// YOUR CODE BELOW
function myJoin(arr, sep = ','){
    let newStr = '';
    for (let i = 0; i < arr.length; i++){
        if (i === arr.length -1) newStr += arr[i];
        else if (arr[i] === null || undefined) newStr += sep;
        else newStr += arr[i] + sep;       
    } return newStr;
}
