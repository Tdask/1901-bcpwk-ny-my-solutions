
// YOUR CODE BELOW

function stringify (callback){
    return function(){
       let aStr = ''
       aStr += callback()
       return aStr
    }
}