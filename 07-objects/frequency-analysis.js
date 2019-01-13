// YOUR CODE BELOW
const frequencyAnalysis = aStr =>{
  let letterObj = {};
  for (i = 0; i < aStr.length; i++){
      if (aStr[i] in letterObj){
          letterObj[aStr[i]] ++
    } else letterObj[aStr[i]] = 1;
  } return letterObj;
}