// YOUR CODE BELOW

const myOr = (arg1, arg2, arg3) =>{
    if (Boolean(arg1) === true) return arg1;
    if (Boolean(arg2) === true) return arg2;
    return arg3;
}

const myAnd = (arg1, arg2, arg3) =>{
    if (Boolean(arg1) === false) return arg1;
    if (Boolean(arg2) === false) return arg2;
    return arg3;
}