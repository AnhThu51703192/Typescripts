//lesson 27 - Functions
function sum(a: any, b: any) {
    return a + b;
}


//anonymous function: () => {}
const sum2 = (a: number, b: number) => {
    return a + b;
}

console.log(">>> check sum: ", sum(6, 9));
console.log(">>> check sum2: ", sum2(5, 7));



//lesson 28: Function Types
const sum3 = (x: number, y: number): number => {
    return x + y;
    //return 'abc';
}

console.log(">>> check sum3: ", sum3(8, 10));

let a = 10; //number
a = sum3(1, 10); //string