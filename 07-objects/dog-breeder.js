// YOUR CODE BELOW
function dogBreeder (name = 'Steve', age = 0){
    let dogObj = {};
    if (typeof(name) === 'number') {
        age = name;
        name = 'Steve';
    }
    dogObj['name'] = name;
    dogObj['age'] = age;
    return dogObj;
}