// Create an empty set
const emptySet = new Set()
console.log(emptySet)

// Create a set containing 0 to 10 using loop
const zeroToTenSet = new Set()
for (i = 0; i < 11; i++) {
    zeroToTenSet.add(i)
}
console.log(zeroToTenSet)

// Remove an element from a set
zeroToTenSet.delete(0)
console.log(zeroToTenSet)

// Clear a set
zeroToTenSet.clear()
console.log(zeroToTenSet)

// Create a set of 5 string elements from array
const vowelsArray = ['A', 'E', 'I', 'O', 'U']
const setFromArray = new Set()
for (const vowel of vowelsArray) {
    setFromArray.add(vowel)
}
console.log(setFromArray)

// Create a map of countries and number of characters of a country
const countriesCharsMap = new Map()
for (const country of countries) {
    countriesCharsMap.set(country.name, country.name.length)
}
console.log(countriesCharsMap)

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
const c = [...a, ...b]
const abUnion = new Set(c)
console.log(abUnion)

// Find a intersection b
const B = new Set(b)
const abIntersection = a.filter((num) => B.has(num))
console.log(abIntersection)

// Find a with b
const abDifference = a.filter((num) => !B.has(num))
console.log(abDifference)

// How many languages are there in the countries object file.
const totalLanguages = []
countries.forEach((country) => country.languages.map((language) => totalLanguages.push(language)))
const uniqueLanguages = new Set(totalLanguages)
console.log(uniqueLanguages)

// Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(arr, num) {
    const allInstances = []
    arr.forEach((country) => country.languages.map((language) => allInstances.push(language))) // Array all languages

    const uniqueInstances = new Set(allInstances) // Set of unique languages

    const totalCount = []
    uniqueInstances.forEach(function(language) {
        totalCount.push({language, count: 0})
    }) // Creates array of objects with language and count (at 0) as keys
    
    let n = 0
    let count = 0
    for (const language of uniqueInstances) {
        count = 0
        for (i = 0; i < allInstances.length; i++) {
            if (language === allInstances[i]) {
                count++
            }
        }
        totalCount[n].count += count
        n++
    } // Iterates the set and compares its values to those of total number of languages, ups respective total count per hit
    
    totalCount.sort((a, b) => {
        return b.count - a.count
    }) // Sorts the total count array
    
    const justLangCount = []
    for (i = 0; i < totalCount.length; i++) {
        justLangCount.push({[totalCount[i].language]: totalCount[i].count})
    } // Makes new array where language values become keys for the count values

    return justLangCount.slice(0, num)
    
}
console.log(mostSpokenLanguages(countries, 10))


/* Your output should look like this

console.log(mostSpokenLanguages(countries, 10))
[
  ({ English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 })
]
*/
