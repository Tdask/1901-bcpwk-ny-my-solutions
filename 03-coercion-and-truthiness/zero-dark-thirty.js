// YOUR CODE BELOW
const zeroDarkThirty = num =>{
if (num === 0) return NaN;
let numStr = String(num);
let newStr = '';
for (let i = 0; i < numStr.length; i++){
    if (numStr[i] !== '0') newStr += numStr[i]
 }let result = Number(newStr);
 return result;
}

console.log(zeroDarkThirty (505))