// YOUR CODE BELOW

const isTruthy = input =>{
    if (Boolean(input) === false) {
        if (input === 0) return 'The number 0 is falsey (the only falsey number)';
        if (typeof(input) === 'boolean') return 'The boolean value false is falsey';
        if (typeof(input) === 'null') return 'The null value is falsey';
        if (typeof(input) === 'undefined') return 'undefined is falsey';
        if (input === '') return 'The empty string is falsey (the only falsey string)';
        if (input === null) return 'The null value is falsey';
     } else return true;
    }