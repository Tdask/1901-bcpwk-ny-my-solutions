// YOUR CODE BELOW
const zooInventory = myZoo =>{
    let currentSentence = '';
    let newArr=[];
    for (let i=0; i < myZoo.length; i++){
        currentSentence = `${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}.`
        newArr.push(currentSentence);
    } return newArr;
}
