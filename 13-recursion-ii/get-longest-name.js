// YOUR CODE BELOW

function getLongestName (obj){
    let longest = ''
    for (let key in obj){
        if (key.length > longest.length) {
            longest = key
        }
        if (typeof obj[key] === 'object'){
        let returnVal = getLongestName(obj[key])
        if (returnVal.length > longest.length){
            longest = returnVal
          }
        }
    
    }

    return longest
}