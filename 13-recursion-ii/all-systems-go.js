
// YOUR CODE BELOW
function allSystemsGo (obj){
  for (let key in obj){
      let currentVal = obj[key]
      if (typeof currentVal === 'object'){
       let returnVal = allSystemsGo (currentVal);
       if (!returnVal){
         return false
       }
      } else {
      if (!currentVal) {
        return false;   
      }
     }    
}
return true
}