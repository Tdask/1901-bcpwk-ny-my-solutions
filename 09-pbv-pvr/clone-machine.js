// YOUR CODE BELOW
const cloneMachine = animal =>{
    let objClone = {};
    for (let key in animal){
      objClone[key] = animal[key]
    }
    objClone.name = animal.name + 'Clone';
    animal.offspring.push(objClone.name);
    objClone.offspring = [];
    return objClone;
  }