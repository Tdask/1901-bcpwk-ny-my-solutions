
// YOUR CODE BELOW

function backwardString(string) {
  let currentInd = string.length -1;
  if (currentInd === 0) {
      console.log(string[currentInd])
      return
   } else {
     console.log(string[currentInd]);
     backwardString(string.slice(0, currentInd));
   }
}
  
  