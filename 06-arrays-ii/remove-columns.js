// YOUR CODE BELOW

const removeColumns = (originalGrid, numColumns) =>{
    for (let i = 0; i < originalGrid.length; i++){
      originalGrid[i].splice(originalGrid[i].length - numColumns, numColumns)
    }
     return originalGrid;
  }
