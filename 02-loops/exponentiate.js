// YOUR CODE BELOW
const exponentiate = (base, power) => {
    if (power === 0) return 1;
    let result = base * exponentiate(base, power - 1);
    return result;
}