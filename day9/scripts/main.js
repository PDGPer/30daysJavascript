const shortCountries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/* Explain the difference between forEach, map, filter, and reduce.

forEach | Works like iterating an array with a loop. Can use the items to do something else, but not alter them.
map | Same as forEach, but can alter items and return them as a new array.
filter | Iterates and removes items from an array that fulfill certain conditions, returning a new one.
reduce | Iterates the array, repeating the same actions for each item that accumulate on the accumulator value. Best practices are to always give this value a default value, in order to avoid errors. */

// Define a call function before you them in forEach, map, filter or reduce.
const double = (n) => {
    return n + n
}

// Use forEach to console.log each country in the countries array.
shortCountries.forEach((element) => console.log(element.toUpperCase()))

// Use forEach to console.log each name in the names array.
names.forEach((element) => console.log(element))

// Use forEach to console.log each number in the numbers array.
numbers.forEach((element) => console.log(element))

// Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = shortCountries.map((country) => country.toUpperCase())
console.log(uppercaseCountries);

// Use map to create an array of countries length from countries array.
const countryLength = shortCountries.map((country) => country.length)
console.log(countryLength)

// Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map((number) => number ** 2)
console.log(squaredNumbers)

// Use map to change to each name to uppercase in the names array
const uppercaseNames = names.map((someName) => someName.toUpperCase())
console.log(uppercaseNames)

// Use map to map the products array to its corresponding prices.

// Use filter to filter out countries containing land.
const landCountries = shortCountries.filter((country) => country.toLowerCase().includes('land'))
console.log(landCountries)

// Use filter to filter out countries having six character.
const sixCharCountry = shortCountries.filter((country) => country.length === 6)
console.log(sixCharCountry)

// Use filter to filter out countries containing six letters and more in the country array.
const sixCharMoreCountry = shortCountries.filter((country) => country.length >= 6)
console.log(sixCharMoreCountry)

// Use filter to filter out country start with 'E'.
const onlyECountries = shortCountries.filter((country) => country[0] === 'E')
console.log(onlyECountries)

// Use filter to filter out only prices with values.
const onlyPriced = products.filter((price) => typeof price.price === 'number')
console.log(onlyPriced)



/*
Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
Use reduce to sum all the numbers in the numbers array.
Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
Explain the difference between some and every
Use some to check if some names' length greater than seven in names array
Use every to check if all the countries contain the word land
Explain the difference between find and findIndex.
Use find to find the first country containing only six letters in the countries array
Use findIndex to find the position of the first country containing only six letters in the countries array
Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/