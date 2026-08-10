//Union Type
function addNumberOrString(a: number | string, b: number | string) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    if (typeof a == 'string' && typeof b == 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

//console.log(">>> check: ", addNumberOrString(1, "test"));
console.log(">>> check: ", addNumberOrString("hello", "world"));
//console.log(">>> check: ", addNumberOrString(true, "world")); //Error


///Type Aliases
type varianType = number | string | boolean;
function addNumberOrString1(a: varianType, b: number | string) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    if (typeof a == 'string' && typeof b == 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

console.log(">>> check 2: ", addNumberOrString1("hello", "world"));