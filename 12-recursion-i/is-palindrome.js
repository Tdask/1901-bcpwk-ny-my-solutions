// YOUR CODE BELOW

function isPalindrome(string){
    string = string.toLowerCase()
    if (string.length === 1 || string.length === 0){
       return true
    }
    if (string[0] === string[string.length-1]){
     let nextStr= string.slice(1, string.length-1)
     return isPalindrome(nextStr)
   }
 return false
 }