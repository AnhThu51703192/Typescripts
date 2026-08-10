//Tuple Type (một biến thể của array)

let skill1: [string, number] = ['Test', 25];

skill1.push(true); //Error: Type 'boolean' is not assignable to type 'string | number'.

let skill2: [string, number, boolean];
skill2 = ["Test", 25, true];
skill2 = ["Test", 25, "new test"]; //Error


//Optional Tuple Elements
let skill3: [boolean?, string, number]; //Error tham số optional đặt ở cuối
let skill4: [boolean, string?, number?];
skill4 = [true, "Test"];
