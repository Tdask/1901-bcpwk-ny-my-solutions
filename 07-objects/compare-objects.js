// YOUR CODE BELOW
function compareObjects(object1, object2){
    let simpleVer1
    for(let key in object1){
     simpleVer1 += (key + object1[key])
    }
     let simpleVer2
     for(let key in object2){
       simpleVer2 += (key + object2[key])
     }
     if (simpleVer1 === simpleVer2){
       return true
     } else return false
    }