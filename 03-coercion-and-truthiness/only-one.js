// YOUR CODE BELOW
const onlyOne = (arg1, arg2, arg3) =>{
    let anArr =[];
    anArr.push(arg1, arg2, arg3);
    let truthCount = 0;
    for (let i = 0; i < 3; i++){
        if (Number(Boolean(anArr[i])) > 0) truthCount++
    } if (truthCount < 1 || truthCount > 1) return false;
    return true;
} 
