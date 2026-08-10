//Array Type
let test: string[] = ['Eric'];

console.log(test.push(''));

test.push('new');
console.log(">>> Check array: ", test)

//Lưu trữ mixed type
let test1: (string | number)[] = ['Eric'];
test1.push('new'); //string
test1.push(25); //number
console.log(">>> Check array mixed type: ", test1)

//Khởi tạo biến và typesripts tự đoán để định nghĩa type (không nên sử dụng)
let test2 = ["Eric", 25, true];

