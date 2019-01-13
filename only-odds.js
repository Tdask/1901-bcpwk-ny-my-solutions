// YOUR CODE BELOW
const onlyOdds = num => {
    let oddSum = 0;
    for (let i = 1; i <= num; i++){
        if( i % 2 === 1) oddSum += i
    } return oddSum;
}
