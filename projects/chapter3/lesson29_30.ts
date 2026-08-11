//lesson 29: Optional Parameters
const sum5 = (x: number, y: number, z?: number) => {
    if (z) return x + y + z;
    return x + y;
}

console.log(">>> check sum5 = ", sum5(2, 4)); //NaN: not a number  / null / undefined


//lesson 30: Default Parameters
let sum7 = (x: number, y: number, z = false) => {
    if (z === false) {
        return x + y;
    }

    if (z)
        return x - y;
}

console.log(">>> check sum7 = ", sum7(1, 2), sum7(1, 2, true));


//lesson 31: Rest Parameters: phần còn lại
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal());//0 
console.log(getTotal(10, 20));//30 
console.log(getTotal(10, 20, 30));//60 
