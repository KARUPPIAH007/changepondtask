console.log("Hello all");
// 1 . number data type
let num1:number=100, num2:number=200;
console.log(num1,num2);

// 2 .string
let s:string ="Helloworld";
console.log(s);

// 3.boolean
let cond1:boolean =true, cond2:boolean =false;
console.log(cond1,cond2);

// 4.array 
let students:string[] =["ajith" , "suriya"];
let emp:Array<string> =["radha","sharad"];

// 5.tupple data : it allows user to store mutliple type of data in array.
let ar:[number,string] = [101,"Laptop"];

// 6.enum : it is uesd to create constant varaiable with value
enum days{sun,mon,tue,wed,thus,fri,sat};
let data1 = days.sun;
let data2 = days.mon;
let data3 = days.tue;
let data4 = days.wed;
let data5 = days.thus;
let data6 = days.fri;
let data7 = days.sat;

// 7. unoin data: it allows user to store multiple type of data in single varaiable.
let items:string|number=23456;

// any data type: when we don`t know type of data is going to store in it varaiable.
let futureData:any=true;







