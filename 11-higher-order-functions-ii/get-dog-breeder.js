// YOUR CODE BELOW

function getDogBreeder (defaultName, defaultAge){
    return function dogBreeder (name = defaultName, age = defaultAge){
    let dogObj = {};
    if (typeof(name) === 'number') {
        age = name;
        name = defaultName;
    }
    dogObj['name'] = name;
    dogObj['age'] = age;
    return dogObj;
 }
}