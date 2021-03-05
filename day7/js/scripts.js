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
function