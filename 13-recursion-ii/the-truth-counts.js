// YOUR CODE BELOW

function theTruthCounts (array) {
    let count = 0;
    for (let i= 0; i <array.length; i++){
        let currElement = array[i]
        if (Array.isArray(currElement)){
            count += theTruthCounts(currElement)
       } else {
          if (currElement) count ++
       }
    }
    return count;
}