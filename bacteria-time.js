// YOUR CODE BELOW
const bacteriaTime = (currentNum, targetNum) => {
    if (targetNum < currentNum) return 'targetNum must be larger than currentNum'
    let minCount = 0;
    for (let i = currentNum; i < targetNum; i *= 2){
        minCount += 20;
    } return minCount;
}