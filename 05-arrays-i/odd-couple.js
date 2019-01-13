// YOUR CODE BELOW

const oddCouple = arr => {
    let newArr=[];   
    for (let i = 0; i < arr.length; i++){
        if(arr[i] %2 === 1) newArr.push(arr[i]);
    
  } return newArr.slice(0,2);
}
