let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(string){
    let translation = ''
    string = string.toLowerCase();
    for (let i=0; i<string.length; i++){
      let currentLetter= string[i];
      for (let j=0 ; j<letters.length; j++){
        if (currentLetter===letters[j]){
          translation += leetChars[j];
        }
      }
    }
    return translation
   }