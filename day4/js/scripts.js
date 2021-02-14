/*
let userAge = prompt("Enter your age:");

if (userAge > 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You still have to wait ${18 - userAge} years to drive.`);
};
*/

/*
let userAge = prompt("Enter your age:");
let myAge = 35;

if (userAge > myAge) {
    console.log(`You are ${userAge - myAge} year(s) older than me.`);
} else if (userAge == myAge) {
    console.log(`You are the same age as me.`);
} else {
    console.log(`You are ${myAge - userAge} year(s) younger than me.`);
};
*/

/*
let a = 4;
let b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}.`);
} else {
    console.log(`${b} is greater than ${a}.`);
};

a > b 
    ? console.log(`${a} is greater than ${b}.`)
    : console.log(`${b} is greater than ${a}.`);
*/

/*
let inputNumber = prompt("Enter a number:");

if (inputNumber % 2 === 0) {
    console.log(`${inputNumber} is even.`);
} else {
    console.log(`${inputNumber} is odd.`);
}
*/

/*
Write a code which can give grades to students according to theirs scores:

    90-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/

/*
let grade = prompt("Enter a grade:");

if (grade > 89 && grade < 101) {
    console.log("Grade A");
} else if (grade > 69 && grade < 100) {
    console.log("Grade B");
} else if (grade > 59 && grade < 100) {
    console.log("Grade C");
} else if (grade > 49 && grade < 100) {
    console.log("Grade D");
} else if (grade >= 0 && grade < 50) {
    console.log("Grade F");
} else {
    console.log("Not a valid grade.");
};
*/

/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer

*/

/*
let season = prompt("Enter a season:");

if (season === "September" || season === "October" || season === "November") {
    console.log("The season is Autumn.");
} else if (season === "December" || season === "January" || season === "February") {
    console.log("The season is Winter.");
} else if (season === "March" || season === "April" || season === "May") {
    console.log("The season is Spring.");
} else if (season === "June" || season === "July" || season === "August") {
    console.log("The season is Summer.");
} else {
    console.log("Not a valid season.");
};
*/

/*
let dayInput = prompt("What day is today?");

if (dayInput.match(/Saturday/i) || dayInput.match(/Sunday/i)) {
    console.log(`${dayInput} is a weekend.`);
} else if (dayInput.match(/Monday/i) ||
           dayInput.match(/Tuesday/i) ||
           dayInput.match(/Wednesday/i) ||
           dayInput.match(/Thursday/i) ||
           dayInput.match(/Friday/i)) {
    console.log(`${dayInput} is a work day.`);
} else { 
    console.log(`${dayInput} is not a valid day.`);
};
*/


let monthPrompt = prompt("Write in a month to check its number of days.");

if (monthPrompt.match(/January/i) ||
    monthPrompt.match(/March/i) ||
    monthPrompt.match(/July/i) ||
    monthPrompt.match(/August/i) ||
    monthPrompt.match(/October/i) ||
    monthPrompt.match(/December/i)) {
    console.log(`${monthPrompt} has 31 days.`);
} else if (monthPrompt.match(/April/i) ||
           monthPrompt.match(/June/i) ||
           monthPrompt.match(/September/i) ||
           monthPrompt.match(/November/i)) {
    console.log(`${monthPrompt} has 30 days.`);
} else if (monthPrompt.match(/February/i)) {
    let yearPrompt = prompt("February of what year?");
    if ((yearPrompt % 4 == 0) && (yearPrompt % 100 != 0) || (yearPrompt % 400 == 0)) {
        console.log(`As ${yearPrompt} is a leap year, February has 29 days.`);
    } else {
    console.log(`As ${yearPrompt} is not a leap year, February has 28 days.`);
    }
} else {
    console.log("Not a valid month.");
};