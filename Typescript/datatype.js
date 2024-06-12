console.log("Hello all");
// 1 . number data type
var num1 = 100, num2 = 200;
console.log(num1, num2);
// 2 .string
var s = "Helloworld";
console.log(s);
// 3.boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
// 4.array 
var students = ["ajith", "suriya"];
var emp = ["radha", "sharad"];
// 5.tupple data : it allows user to store mutliple type of data in array.
var ar = [101, "Laptop"];
// 6.enum : it is uesd to create constant varaiable with value
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thus"] = 4] = "thus";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 6] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
var data2 = days.mon;
var data3 = days.tue;
var data4 = days.wed;
var data5 = days.thus;
var data6 = days.fri;
var data7 = days.sat;
// 7. unoin data: it allows user to store multiple type of data in single varaiable.
var items = 23456;
// any data type: when we don`t know type of data is going to store in it varaiable.
var futureData = true;
