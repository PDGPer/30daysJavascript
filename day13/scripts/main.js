// Display the countries array as a table
// console.table(countries)

// Display the countries object as a table
/* for (const country of countries) {
    console.table(country)
} */

// Use console.group() to group logs
/* console.group('Countries')
console.log(countries)
console.groupEnd() */

// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 is not greater than 20')

// Write a warning message using console.warn()
console.warn('Danger, Will Robinson!')

// Write an error message using console.error()
console.error("I can't do that, Dave.")

// Check the speed difference among the following loops: while, for, for of, forEach
console.time('While loop')
let i = 0
while (i < countries.length) {
    i++
}
console.timeEnd('While loop')

console.time('For loop')
for (i = 0; i < countries.length; i++) {
}
console.timeEnd('For loop')

console.time('For Of loop')
for (const country of countries) {
}
console.timeEnd('For Of loop')

console.time('forEach loop')
for (const country of countries) {
    countries.forEach(function() {})
}
console.timeEnd('forEach loop')