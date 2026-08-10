//Object Type
let person = { name: 'Eric', age: 25 }; //Không gán được kiểu dữ liệu cho từng biến


//C1: Khá dài
let pro1: {
    name: string,
    age: number
};

pro1 = { name: 'eric', age: 25 };


//C2: Rút gọn
let pro2: {
    name: string,
    age: number,
} = {
    name: "Eric", //string
    age: 25 //age
}

pro2.address = 'Ha Noi';

