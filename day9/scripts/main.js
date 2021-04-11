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

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  const stringFiltered = arr.filter((item) => typeof item === 'string')
  return stringFiltered
}
console.log(getStringLists([0, 'zero']))

// Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum) 

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countriesSentence = shortCountries.reduce((acc, cur) => acc + ', ' + cur) + ' are north European countries.'
console.log(countriesSentence)

/* Explain the difference between some and every
some | Iterates an array to see if a condition checks out with at least one of the items, returns true or false.
every | Same, but every item must check out to get a true result.
*/

// Use some to check if some names' length greater than seven in names array
const countriesLongLength = shortCountries.some((country) => country.length > 6)
console.log(countriesLongLength)

// Use every to check if all the countries contain the word land
const countriesContainLand = shortCountries.every((country) => country.toLowerCase().includes('land'))
console.log(countriesContainLand)

/* Explain the difference between find and findIndex.
find | Sets a condition and returns the first element to fulfill it.
findIndex | Returns the position of the element, not the element itself.
*/

// Use find to find the first country containing only six letters in the countries array
const firstSixLetterCountry = shortCountries.find((country) => country.length === 6)
console.log(firstSixLetterCountry)

// Use findIndex to find the position of the first country containing only six letters in the countries array
const firstSixLetterIndex = shortCountries.findIndex((country) => country.length === 6)
console.log(firstSixLetterIndex)

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = shortCountries.findIndex((norway) => norway === 'Norway')
console.log(norwayIndex)

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = shortCountries.findIndex((russia) => russia === 'Russia')
console.log(russiaIndex)

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.map((product) => product.price).filter((price) => typeof price === 'number').reduce((acc, price) => acc + price, 0)
console.log(totalPrice)

// Find the sum of price of products using only reduce reduce(callback))
function onlyNumbers(value) {
  if (typeof value === 'number') {
    return value
  } else return 0
}
const reducePrice = products.reduce((acc, product) => acc + onlyNumbers(product.price), 0)
console.log(reducePrice)

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern) {
  const sortedCountries = countries.filter((country) => country.name.includes(pattern)).map((country) => country.name)
  return sortedCountries
}
console.log(categorizeCountries('stan'))

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function firstLetterCount(arr) {
  const mapFirstLetter = arr.map((firstLetter) => firstLetter.name[0]) // Array all first letters
  
  const uniqueLetters = []
  function letterExists(letter) {
    if (uniqueLetters.includes(letter) === false) {
      uniqueLetters.push(letter)
    }
  }
  mapFirstLetter.forEach(letterExists) // Array unique first letters

  const letterCountArray = []
  function letterObjects(letter) {
    letterCountArray.push({[letter]: 0})
  }
  uniqueLetters.forEach(letterObjects) // Array objects for each unique letter with count 0

  function addToCount(letter) {
    letterCountArray[uniqueLetters.indexOf(letter)][letter] += 1
  }
  mapFirstLetter.forEach(addToCount)

  return letterCountArray
}
console.log(firstLetterCount(countries))

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(arr) {
  const firstTenObjects = []
  for (i = 0; i < 10; i++) {
    firstTenObjects.push(arr[i])
  }
  return firstTenObjects.map((country) => country.name)
}
console.log(getFirstTenCountries(countries))

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(arr) {
  const lastTenObjects = []
  for (i = arr.length - 1; i > arr.length - 11; i--) {
    lastTenObjects.push(arr[i])
  }
  return lastTenObjects.map((country) => country.name)
}
console.log(getLastTenCountries(countries))

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc).
function commonLetterCount(arr, initial) {
  const mapFirstLetter = arr.map((firstLetter) => firstLetter.name[0]) // Array all first letters
  
  const uniqueLetters = []
  function letterExists(letter) {
    if (uniqueLetters.includes(letter) === false) {
      uniqueLetters.push(letter)
    }
  }
  mapFirstLetter.forEach(letterExists) // Array unique first letters

  const letterCountArray = []
  function letterObjects(letter) {
    letterCountArray.push({[letter]: 0})
  }
  uniqueLetters.forEach(letterObjects) // Array objects for each unique letter with count 0

  function addToCount(letter) {
    letterCountArray[uniqueLetters.indexOf(letter)][letter] += 1
  }
  mapFirstLetter.forEach(addToCount)

  return letterCountArray[uniqueLetters.indexOf(initial)][initial]
}
console.log(commonLetterCount(countries, 'S'))

// Use the countries information, in the data folder. Sort countries by name, by capital, by population



// Find the 10 most spoken languages.



/* Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]
*/



// Use countries_data.js file create a function which create the ten most populated countries.



/* console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]
*/



// Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.




/* const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

*/