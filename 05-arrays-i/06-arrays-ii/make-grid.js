// YOUR CODE BELOW
const makeGrid = (numColumns, numRows) => {
    let rows = []
    let gridArr = [];
    for (let i = 1; i <= numColumns; i++){
        rows.push(i)
    } for (let j = 1; j <= numRows; j++){
        gridArr.push(rows)
    }
    return gridArr;
}

console.log(makeGrid(3,4))