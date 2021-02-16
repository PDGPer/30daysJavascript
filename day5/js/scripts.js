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

/* 
    Sort the array using sort() method
    Reverse the array using reverse() method
    Slice out the first 3 companies from the array
    Slice out the last 3 companies from the array
    Slice out the middle IT company or companies from the array
    Remove the first IT company from the array
    Remove the middle IT company or companies from the array
    Remove the last IT company from the array
    Remove all IT companies
*/