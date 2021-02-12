let firstName = "Zé";
let lastName = "Manel";
let country = "Portugal";
let city = "Santarém";
let age = 40;
let isMarried = true;

/*
console.log(typeof firstName,typeof lastName, typeof country, typeof city, typeof age, typeof isMarried);

console.log(typeof "10" === typeof 10);

console.log(parseInt('9.8') === 10);

console.log(1 == "1");
console.log(1 === "1");
console.log(typeof firstName === typeof lastName);
console.log(typeof country === typeof age);
console.log(typeof age === typeof 10);
console.log(typeof parseInt("40") === typeof city);
*/

/*
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
*/

// Find the length of python and jargon and make a falsy comparison statement.
// console.log("python".length === "jargon".length);

/*
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
*/

// There is no 'on' in both dragon and python
// console.log(!("dragon".includes("on") === "python".includes("on")));

/*
let time = new Date();

// What is the year today?
console.log(time.getFullYear());
// What is the month today as a number?
console.log(time.getMonth() + 1);
// What is the date today?
console.log(time.getDate());
// What is the day today as a number?
console.log(time.getDay() + 1);
// What is the hours now?
console.log(time.getHours());
// What is the minutes now?
console.log(time.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(time.getTime());
*/

/*
let base = prompt("Enter base", "Number here");
let height = prompt("Enter height", "Number here");
console.log(0.5 * base * height);
*/

/*
let sideA = prompt("Enter A side", "Number here");
let sideB = prompt("Enter B side", "Number here");
let sideC = prompt("Enter C side", "Number here");
console.log(sideA + sideB + sideC);
*/

/*
let length = parseInt(prompt("Enter length", "Number here"));
let width = parseInt(prompt("Enter length", "Number here"));
console.log("Area is " + length * width);
console.log("Perimeter is " + (length + width) * 2);
*/

/*
let pi = 3.14;
let r = parseInt(prompt("Enter radius", "Number here"));
console.log("Circle area is " + pi * r * r);
console.log("Circle circumference is " + 2 * pi * r);
*/

/*
let x = parseInt(prompt("Enter value", "Your value here"));
let y = 2 * x - 2;
console.log(y);
*/

/*
let x = parseInt(prompt("Enter x value", "Your value here"));
let y = parseInt(prompt("Enter y value", "Your value here"));
let m = (y * 2 - y) / (x * 2 - x);
console.log(m);
*/

/*
let hours = parseInt(prompt("Enter hours", "Your value here"));
let rate = parseInt(prompt("Enter rate", "Your value here"));
console.log("Your weekly earning is " + hours * rate);
*/

/*
let myName = prompt("Enter name", "Your value here");
myName.length > 7 ? console.log("Long name") : console.log("Short name");
*/

// firstName.length > lastName.length ? console.log(`${firstName} is longer than ${lastName}.`) : console.log(`${lastName} is longer than ${firstName}.`);

/*
let myAge = 250;
console.log(`I am ` + (myAge - age) + ` years older than you.`);
*/

/*
let userAge = parseInt(prompt("Enter age", "Your value here"));
console.log(userAge >= 18 ? `Since you are ${userAge}, you can drive.` : `Sorry, you're only ${userAge}, you have to wait ${18 - userAge} years to drive.`);
*/

/*
let userAge = parseInt(prompt("Enter age", "Your value here"));
console.log(`You've lived ${userAge * 365 * 24 * 60} seconds.`);
*/

/*
let time = new Date();
console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`);
console.log(`${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`);
console.log(`${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`);
*/

let time = new Date();
// console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`);

let monthBase = (time.getMonth() + 1).toString();
monthBase.length === 1 ? monthProcessed = `0${monthBase}` : monthProcessed = monthBase;

let dateBase = (time.getDate()).toString();
dateBase.length === 1 ? dateProcessed = `0${dateBase}` : dateProcessed = dateBase;

let hoursBase = (time.getHours()).toString();
hoursBase.length === 1 ? hoursProcessed = `0${hoursBase}` : hoursProcessed = hoursBase;

let minutesBase = (time.getMinutes()).toString();
minutesBase.length === 1 ? minutesProcessed = `0${minutesBase}` : minutesProcessed = minutesBase;

console.log(`${time.getFullYear()}-${monthProcessed}-${dateProcessed} ${hoursProcessed}:${minutesProcessed}`);