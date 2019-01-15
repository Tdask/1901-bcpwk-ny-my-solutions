
// YOUR CODE BELOW

function countVowels (string){
    let vowels = 'aeiouAEIOU'
    let currentIdx = string.length-1 ;
    if (currentIdx < 0) {
      return 0;
    }
    else {
    let currLetter = string[currentIdx]
    if (vowels.includes(currLetter)){
    return 1 + countVowels(string.slice(0,currentIdx-1))    
       } 
    else return countVowels(string.slice(0,currentIdx))
    }
}

