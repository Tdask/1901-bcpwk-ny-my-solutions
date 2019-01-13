// YOUR CODE BELOW

const vowelStr= 'aeiouAEIOU'
const mostVowels = (string) => {
    let maxWord = '';
    let highestVowel = 0;
    let wordArr = string.split(',').join('').split('.').join('').split(' ')
    console.log(wordArr)
    for (let i = 0; i < wordArr.length; i++){
      let currentWord = wordArr[i]
      let currentVowelCount = 0;
        for (let j = 0; j < currentWord.length; j++){
          let currentLetter = currentWord[j]
            for (let k = 0; k < vowelStr.length; k++){
            if (currentLetter === vowelStr[k]) currentVowelCount++
            }           
        } 
        if (currentVowelCount > highestVowel ){
          highestVowel = currentVowelCount;
          maxWord = currentWord;         
          }
    }
    return maxWord;
 }
