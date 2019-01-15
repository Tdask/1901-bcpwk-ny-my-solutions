// YOUR CODE BELOW

function sumDigits(int){
    let aStr = int.toString()
    let currentIdx = aStr.length-1
    if(aStr.length === 1) return Number(aStr[currentIdx])
    let currDigit = Number(aStr[currentIdx])
    return currDigit + sumDigits(Number(aStr.slice(0, aStr.length-1)))
}