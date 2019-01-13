// YOUR CODE BELOW
const arrayFlattener = twoDimArr =>{
    // let flattened = '';
    let newArr = [];
    for (let i = 0; i < twoDimArr.length; i++){
        if(Array.isArray(twoDimArr[i])){
            for (let j = 0; j < twoDimArr[i].length; j++){
                newArr.push(twoDimArr[i][j])
            }
        } else newArr.push(twoDimArr[i])
    } return newArr;
} 
