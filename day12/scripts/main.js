// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const incomePhrase = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const incomeArray = incomePhrase.match(/\d+/g).map((num) => parseInt(num))
const incomeTotal = incomeArray[0] + incomeArray[1] / 12 + incomeArray [2]
console.log(incomeTotal)

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const particlePhrase = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
const particleArray = particlePhrase.match(/\-*\d+/g).map((num) => parseInt(num)).sort(function(a, b){return a-b})
const particleDistance = particleArray[0] * -1 + particleArray[particleArray.length - 1]
console.log(particleDistance)

/* Write a pattern which identify if a string is a valid JavaScript variable

is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True */

function validateVar(str) {
    const firstChar = /^[a-z]/
    const allChar = /[^a-zA-Z0-9_\&]/g
    if (firstChar.test(str) === true && allChar.test(str) === false) {
        return true
    }
    return false
}
console.log(validateVar('first_name'))
console.log(validateVar('first-name'))
console.log(validateVar('1first_name'))
console.log(validateVar('firstname'))

// Write a function called tenMostFrequentWords which gets the ten most frequent word from a string?
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(str) {
    const wordArray = str.replace(/\./g, '').split(' ')
    const uniqueWords = []
    for (const word of wordArray) {
        if (uniqueWords.includes(word) === false) {
            uniqueWords.push(word)
        }
    }
    const wordCount = []
    for (const word of uniqueWords) {
        wordCount.push({word, count: 0})
    }
    for (i = 0; i < uniqueWords.length; i++) {
        for (const word of wordArray) {
            if (uniqueWords[i] === word) {
                wordCount[i].count++
            }
        }
    }
    wordCount.sort((a, b) => {
        return b.count - a.count
    })
    return wordCount.slice(0, 10)
}
console.log(tenMostFrequentWords(paragraph))

// Write a function which cleans text. Clean the following text. After cleaning, count the three most frequent words in the string.
const garbledPhrase = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function textCleaner(str) {
    const cleanedText = str.replace(/[^a-zA-z !?.]/g, '')
    const wordArray = cleanedText.replace(/\./g, '').split(' ')
    const uniqueWords = []
    for (const word of wordArray) {
        if (uniqueWords.includes(word) === false) {
            uniqueWords.push(word)
        }
    }
    const wordCount = []
    for (const word of uniqueWords) {
        wordCount.push({word, count: 0})
    }
    for (i = 0; i < uniqueWords.length; i++) {
        for (const word of wordArray) {
            if (uniqueWords[i] === word) {
                wordCount[i].count++
            }
        }
    }
    wordCount.sort((a, b) => {
        return b.count - a.count
    })
    return wordCount.slice(0, 3)
}

console.log(textCleaner(garbledPhrase))
