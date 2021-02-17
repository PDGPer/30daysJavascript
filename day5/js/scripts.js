// Declare an empty array;
const emptyArray = []
console.log(emptyArray)

// Declare an array with more than 5 number of elements
const arrayWithSixElements = [1, 2, 3, 4, 5, 6]
console.log(arrayWithSixElements)

// Find the length of your array
console.log(arrayWithSixElements.length)

// Get the first item, the middle item and the last item of the array
console.log(arrayWithSixElements[0], arrayWithSixElements[Math.floor((arrayWithSixElements.length) / 2)], arrayWithSixElements[arrayWithSixElements.length - 1])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['1', [2], 3, '4', [5], 6]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])

// Print out each company
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6])

// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase())

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
/* 
let companySearchPrompt = prompt(`What is the company's name?`)
if (itCompanies.indexOf(companySearchPrompt) >= 0) {
    console.log(`${companySearchPrompt} is present in the array.`)
} else {
    console.log('No such company is present.')
}
*/

// Filter out companies which have more than one 'o' without the filter method
console.log(itCompanies.slice(itCompanies.indexOf('Microsoft')).slice(itCompanies.indexOf('Google')).slice(itCompanies.indexOf('Facebook')))

// Sort the array using sort() method
//console.log(itCompanies.sort())

// Reverse the array using reverse() method
//console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1))

// Remove the first IT company from the array
/*console.log(itCompanies.shift())
console.log(itCompanies)*/

// Remove the middle IT company or companies from the array
/*console.log(itCompanies.splice(itCompanies.length / 2, 1))
console.log(itCompanies)*/

// Remove the last IT company from the array
/*console.log(itCompanies.pop())
console.log(itCompanies)*/

// Remove all IT companies
/*console.log(itCompanies.splice(0, itCompanies.length))
console.log(itCompanies)*/

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log(countries);
console.log(webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/,/g, '').replace(/\./g, '').split(' ');
console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');

// Add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

// Remove 'Honey' if you are allergic to honey
let allergic = true;
if (allergic = true) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
};
console.log(shoppingCart);

// Modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.indexOf('Ethiopia') != -1) {
    console.log('ETHIOPIA');
} else { countries.push('Ethiopia')
};
console.log(countries);

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.indexOf('Saas') != -1) {
    console.log('Saas is a CSS preprocessor');
} else { webTechs.push('Saas');
         console.log(webTechs);
};

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages);
let minAge = ages[0];
let maxAge = ages[ages.length - 1];
console.log(minAge, maxAge);

// Find the median age(one middle item or two middle items divided by two)
let medianAge = undefined;
if (ages.length % 2 === 0) {
    medianAge = (parseInt(ages.slice(ages.length / 2 - 1, ages.length / 2)) + parseInt(ages.slice(ages.length / 2, ages.length / 2 + 1))) / 2;
} else {
    medianAge = parseInt(ages.slice(Math.floor(ages.length / 2), Math.floor(ages.length / 2 + 1)));
}
console.log(medianAge);

// Find the average age(all items divided by number of items)
let averageAge = ages.reduce(function(a, b) {
    return a + b;
}, 0) / ages.length;
console.log(averageAge);

// Find the range of the ages(max minus min)
let agesRange = maxAge - minAge;
console.log(agesRange);

// Compare the value of (min - average) and (max - average), use abs() method 
console.log(Math.abs(minAge - averageAge), maxAge - averageAge);

// Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

// Find the middle country(ies) in the countries array
let middleCountries = [];
if (countries.length % 2 === 0) {
    middleCountries[0] = countries[Math.floor(countries.length / 2 - 1)];
    middleCountries[1] = countries[Math.floor(countries.length / 2)];
} else {
    middleCountries[0] = countries[Math.floor(countries.length / 2)];
}
console.log(middleCountries);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const halfOfCountries = Math.ceil(countries.length / 2);
const firstHalfCountries = countries.splice(0, halfOfCountries);
const lastHalfCountries = countries.splice(-halfOfCountries);
if (lastHalfCountries % 2 !== 0) {
    lastHalfCountries.push(firstHalfCountries[firstHalfCountries.length - 1]);
    firstHalfCountries[firstHalfCountries.length - 1] = 'Mongolia';
}

console.log(firstHalfCountries);
console.log(lastHalfCountries);