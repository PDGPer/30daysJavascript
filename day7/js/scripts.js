// Declare a function fullName and it print out your full name.
function fullName1() {
    console.log('Nome completo 1');
};
fullName1();

const fullName2 = function() {
    console.log('Nome completo 2')
};
fullName2();

fullName3 = () => console.log('Nome completo 3');
fullName3();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function moreFullName1(firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(moreFullName1('Zé', 'Manel'));

const moreFullName2 = function(firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(moreFullName2('João', 'Luís'));

moreFullName3 = (firstName, lastName) => {
    return firstName + ' ' + lastName;
};
console.log(moreFullName3('Alberto', 'Andrade'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers1(n1, n2) {
    return n1 + n2;
};
console.log(addNumbers1(3, 3));

const addNumbers2 = function(n1, n2) {
    return n1 + n2;
};
console.log(addNumbers1(5, 5));

addNumbers3 = (n1, n2) => {
    return n1 + n2;
};
console.log(addNumbers3(7, 7));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle1(length, width) {
    return length * width;
};
console.log(areaOfRectangle1(3, 3));

const areaOfRectangle2 = function(length, width) {
    return length * width;
};
console.log(areaOfRectangle2(5, 5));

areaOfRectangle3 = (length, width) => {
    return length * width;
};
console.log(areaOfRectangle2(7, 7));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle1(length, width) {
    return (length + width) * 2;
};
console.log(perimeterOfRectangle1(3, 3));

const perimeterOfRectangle2 = function(length, width) {
    return (length + width) * 2;
};
console.log(perimeterOfRectangle2(5, 5));

perimeterOfRectangle3 = (length, width) => {
    return (length + width) * 2;
};
console.log(perimeterOfRectangle3(7, 7));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism1(length, width, height) {
    return length * width * height;
};
console.log(volumeOfRectPrism1(3, 3, 3));

const volumeOfRectPrism2 = function(length, width, height) {
    return length * width * height;
};
console.log(volumeOfRectPrism2(5, 5, 5));

volumeOfRectPrism3 = (length, width, height) => {
    return length * width * height;
}
console.log(volumeOfRectPrism3(7, 7, 7));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.
function areaOfCircle1(r) {
    return Math.PI * r * r;
};
console.log(areaOfCircle1(3));

const areaOfCircle2 = function(r) {
    return Math.PI * r * r;
};
console.log(areaOfCircle2(5));

areaOfCircle3 = (r) => {
    return Math.PI * r * r;
};
console.log(areaOfCircle3(7));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.
function circumOfCircle1(r) {
    return 2 * Math.PI * r;
};
console.log(circumOfCircle1(3));

const circumOfCircle2 = function(r) {
    return 2 * Math.PI * r;
};
console.log(circumOfCircle2(5));

circumOfCircle3 = (r) => {
    return 2 * Math.PI * r;
};
console.log(circumOfCircle3(7));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density1(mass, volume) {
    return mass / volume;
};
console.log(density1(10, 3));

const density2 = function(mass, volume) {
    return mass / volume;
};
console.log(density2(10, 5));

density3 = (mass, volume) => {
    return mass / volume;
};
console.log(density3(10, 7));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed1(distance, time) {
    return distance / time;
};
console.log(speed1(10, 3));

const speed2 = function(distance, time) {
    return distance / time;
};
console.log(speed2(10, 5));

speed3 = (distance, time) => {
    return distance / time;
};
console.log(speed3(10, 7));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight1(mass, gravity) {
    return mass * gravity;
};
console.log(weight1(3, 3));

const weight2 = function(mass, gravity) {
    return mass * gravity;
};
console.log(weight2(5, 5));

weight3 = (mass, gravity) => {
    return mass * gravity;
};
console.log(weight3(7, 7));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit1(c) {
    return c * 1.8 + 32;
};
console.log(convertCelciusToFahrenheit1(3));

const convertCelciusToFahrenheit2 = function(c) {
    return c * 1.8 + 32;
};
console.log(convertCelciusToFahrenheit2(5));

convertCelciusToFahrenheit3 = (c) => {
    return c * 1.8 + 32;
};
console.log(convertCelciusToFahrenheit3(7));

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */
function calculateBMI(weight, height) {
    let bmi = weight / (height*height);
    if (bmi < 18.5) {
        return `Your BMI is ${bmi}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) { 
        return `Your BMI is ${bmi}. You have a normal weight.`;
    } else if (bmi >= 25 && bmi <= 29.9) { 
        return `Your BMI is ${bmi}. You are overweight.`;
    } else {
        return `Your BMI is ${bmi}. You are obese.`;
    };
};
console.log(calculateBMI(80, 1.80));

// const calculateBMI = function(weight, height) {etc.};
// calculateBMI = () => {etc};

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    if (month === 'March' || month === 'April' || month === 'May') {
        return 'Spring';
    } else if (month === 'June' || month === 'July' || month === 'August') {
        return 'Summer';
    } else if (month === 'September' || month === 'October' || month === 'November') {
        return 'Autumn';
    } else {
        return 'Winter';
    };
};
console.log(checkSeason('June'));
console.log(checkSeason('june'));
console.log(checkSeason('Winter'));

// const checkSeason = function() {etc.};
// checkSeason = () => {etc.};

/* Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/
function findMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    };
};
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

// const findMax = function() {etc.};
// findMax = () => {etc.};

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    };
};
printArray(countries);

// const printArray = function(arr) {etc.};
// printArray = (arr) => {etc.};

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
showDateTime = () => {
    let day = new Date().getDate();
    if (day.toString().length === 1) {
        day = `0${day}`;
    };
    let month = new Date().getMonth();
    if (month.toString().length === 1) {
        month = `0${month}`;
    };
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    if (hour.toString().length === 1) {
        hour = `0${hour}`;
    };
    let minutes = new Date().getMinutes();
    if (minutes.toString().length === 1) {
        minutes = `0${minutes}`;
    };
    return `${day}/${month}/${year} ${hour}:${minutes}`;
};
console.log(showDateTime());

/* Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
*/
swapValues = (x, y) => {
    let t = x;
    x = y;
    y = t;
    return [x, y];
};
console.log(swapValues(3, 4));

/* Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
*/
reverseArray = (arr) => {
    const reversedArray = [];
    for (i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    };
    return reversedArray;
};
console.log(reverseArray(countries));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
capitalizeArray = (arr) => {
    const capitalizedArray = [];
    for (i = 0; i < arr.length; i++) {
        capitalizedArray.push(arr[i].toUpperCase());
    };
    return capitalizedArray;
};
console.log(capitalizeArray(countries));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.
const addItemArray = [];
addItem = (item, array) => {
    array.push(item);
    return array;
};
console.log(addItem(1, addItemArray));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.
removeItem = (itemIndex, array) => {
    array.splice(itemIndex, 1);
    return array;
};
console.log(removeItem(1, countries));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
sumOfNumbers = (n) => {
    let nRange = 0;
    for (i = n; i > 0; i--) {
        nRange += i;
    };
    return nRange;
};
console.log(sumOfNumbers(3));
console.log(sumOfNumbers(7));

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
sumOfOdds = (n) => {
    const arrayOfn = [];
    for (i = n; i > 0; i--) {
        if (i % 2 !== 0) {
            arrayOfn.push(i);
        };
    };
    let nRange = 0;
    for (i = 0; i < arrayOfn.length; i++) {
        nRange += arrayOfn[i];
    };
    return nRange;
};
console.log(sumOfOdds(7));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
sumOfEven = (n) => {
    const arrayOfn = [];
    for (i = n; i > 0; i--) {
        if (i % 2 === 0) {
            arrayOfn.push(i);
        };
    };
    let nRange = 0;
    for (i = 0; i < arrayOfn.length; i++) {
        nRange += arrayOfn[i];
    };
    return nRange;
};
console.log(sumOfEven(7));

/* Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
*/
evensAndOdds = (number) => {
    let evenCount = 0;
    let oddCount = 0;
    for (i = number; i >= 0; i--) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        };
    };
    return `The number of odds is ${oddCount}. The number of evens is ${evenCount}.`
};
console.log(evensAndOdds(134));

/* Write a function which takes any number of arguments and return the sum of the arguments.

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
*/
function sumArguments() {
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
};
console.log(sumArguments(5, 5, 5));

// Write a function which generates a randomUserIp.
function randomUserIp() {
    let aaa = Math.floor((Math.random() * 256));
    let bbb = Math.floor((Math.random() * 256));
    let ccc = Math.floor((Math.random() * 256));
    let ddd = Math.floor((Math.random() * 256));
    return `${aaa}.${bbb}.${ccc}.${ddd}`;
};
console.log(randomUserIp());

// Write a function which generates a randomMacAddress.
function randomMacAddress() {
    const hexadecimalArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let aa = hexadecimalArray[Math.floor(Math.random() * 16)] + hexadecimalArray[Math.floor(Math.random() * 16)];
    let bb = hexadecimalArray[Math.floor(Math.random() * 16)] + hexadecimalArray[Math.floor(Math.random() * 16)];
    let cc = hexadecimalArray[Math.floor(Math.random() * 16)] + hexadecimalArray[Math.floor(Math.random() * 16)];
    let dd = hexadecimalArray[Math.floor(Math.random() * 16)] + hexadecimalArray[Math.floor(Math.random() * 16)];
    let ee = hexadecimalArray[Math.floor(Math.random() * 16)] + hexadecimalArray[Math.floor(Math.random() * 16)];
    let ff = hexadecimalArray[Math.floor(Math.random() * 16)] + hexadecimalArray[Math.floor(Math.random() * 16)];
    return `${aa}:${bb}:${cc}:${dd}:${ee}:${ff}`;
};
console.log(randomMacAddress());

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
    const hexadecimalArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let number = hexadecimalArray[Math.floor(Math.random() * 16)] +
                 hexadecimalArray[Math.floor(Math.random() * 16)] +
                 hexadecimalArray[Math.floor(Math.random() * 16)] +
                 hexadecimalArray[Math.floor(Math.random() * 16)] +
                 hexadecimalArray[Math.floor(Math.random() * 16)] +
                 hexadecimalArray[Math.floor(Math.random() * 16)];
    return `#${number}`;
};
console.log(randomHexaNumberGenerator());

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    const charactersArray = ['0','1','2','3','4','5','6','7','8','9','A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'];
    let id = charactersArray[Math.floor(Math.random() * charactersArray.length)] +
             charactersArray[Math.floor(Math.random() * charactersArray.length)] +
             charactersArray[Math.floor(Math.random() * charactersArray.length)] +
             charactersArray[Math.floor(Math.random() * charactersArray.length)] +
             charactersArray[Math.floor(Math.random() * charactersArray.length)] +
             charactersArray[Math.floor(Math.random() * charactersArray.length)] +
             charactersArray[Math.floor(Math.random() * charactersArray.length)];
    return id;
};
console.log(userIdGenerator());

/* Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
*/
function userIdGeneratedByUser(charNumber, idsCount) {
    const charactersArray = ['0','1','2','3','4','5','6','7','8','9','A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'];
    
};