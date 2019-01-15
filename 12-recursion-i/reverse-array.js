// YOUR CODE BELOW

const reverseArray = arr =>{
  if (arr.length === 1){
    return arr.slice()
  } else{
    let last = arr[arr.length-1]
    return [last].concat(reverseArray(arr.slice(0,-1)))
  }
}