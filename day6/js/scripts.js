// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
};

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
};

i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
};

i = 10;
while (i >= 0) {
    console.log(i);
    i--;
};

i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0);

// Iterate 0 to n using for loop
i = 0
let n = 3;
for (i; i <= n; i++) {
    console.log(i);
};

/* Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
let patternSymbol = '#';
for (i = 1; i <= 7; i++) {
    console.log(patternSymbol);
    patternSymbol += '#';
};

/* Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
for (i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
};

/* Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
console.log('i    i^2   i^3');
for (i = 0; i <= 10; i++) {
    if (i >= 0 && i < 4) {
        console.log(`${i}    ${i * i}     ${i * i * i}`);
    } else if (i >= 4 && i < 10) {
        console.log(`${i}    ${i * i}    ${i * i * i}`);
    } else {
        console.log(`${i}   ${i * i}   ${i * i * i}`);
    }
};

// Use for loop to iterate from 0 to 100 and print only even numbers
for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
};

// Use for loop to iterate from 0 to 100 and print only prime numbers
for (i = 0; i <= 100; i++) {
    if (i === 1) {
        continue
    } else if (i === 3) {
        console.log(i);
    } else if (i % 2 !== 0 && i % 3 !== 0) {
        console.log(i);
    }
};

// Use for loop to iterate from 0 to 100 and print the sum of all numbers
let iterationSum = 0;
for (i = 0; i <= 100; i++) {
    iterationSum += i;
};
console.log(iterationSum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds
let sumOfOddIterations = 0;
let sumOfEvenIterations = 0;
for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumOfEvenIterations += i;
    } else {
        sumOfOddIterations += i;
    }
};
console.log(sumOfEvenIterations);
console.log(sumOfOddIterations);

const sumEvensOddsArray = [sumOfEvenIterations, sumOfOddIterations];
console.log(sumEvensOddsArray);

// Develop a small script which generate array of 5 random numbers
const arrayFiveRandomNumbers = [];
for (i = 1; i <= 5; i++) {
    arrayFiveRandomNumbers.push(Math.floor((Math.random() * 100) + 1));
};
console.log(arrayFiveRandomNumbers);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const arrayFiveUniqueNumbers = [];
let tempRandomNumber = 0
for (i = 1; i <= 5; i++) {
    tempRandomNumber = Math.floor((Math.random() * 100) + 1);
    console.log(tempRandomNumber);
    if (arrayFiveUniqueNumbers.indexOf(tempRandomNumber) === -1) {
        arrayFiveUniqueNumbers.push(tempRandomNumber);
    } else { 
        i-- 
    }
};
console.log(arrayFiveUniqueNumbers);

// Develop a small script which generate a six characters random id
// Develop a small script which generate any number of characters random id
const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let randomId = '';
for (i = 0; i < 6; i++) {
    tempRandomNumber = Math.floor((Math.random() * chars.length));
    randomId += chars[tempRandomNumber];
}
console.log(randomId);

// Write a script which generates a random hexadecimal number
const hexadecimalChars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let randomHexadecimal = '#';
for (i = 0; i < 6; i++) {
    tempRandomNumber = Math.floor((Math.random() * hexadecimalChars.length));
    randomHexadecimal += hexadecimalChars[tempRandomNumber];
}
console.log(randomHexadecimal);

// Write a script which generates a random rgb color number.
// rgb(240,180,80)
let red = Math.floor((Math.random() * 256) - 1);
let blue = Math.floor((Math.random() * 256) - 1);;
let green = Math.floor((Math.random() * 256) - 1);;
let randomRGB = `rgb(${red},${blue},${green})`;
console.log(randomRGB);

// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const upperCaseCountries = [];
for (let i = 0; i < countries.length; i++) {
    upperCaseCountries[i] = countries[i].toUpperCase();
}
console.log(upperCaseCountries);

// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countriesLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length);
};
console.log(countriesLength);

/*Use the countries array to create the following array of arrays:
[
['Albania', 'ALB', 7],
['Bolivia', 'BOL', 7],
['Canada', 'CAN', 6],
['Denmark', 'DEN', 7],
['Ethiopia', 'ETH', 8],
['Finland', 'FIN', 7],
['Germany', 'GER', 7],
['Hungary', 'HUN', 7],
['Ireland', 'IRE', 7],
['Japan', 'JAP', 5],
['Kenya', 'KEN', 5]
]
*/
const countriesMixedArrays = [];
let tempCountriesArray = [];
for (let i = 0; i < countries.length; i++) {
    tempCountriesArray = [];
    tempCountriesArray.push(countries[i]);
    tempCountriesArray.push(countries[i].slice(0,3).toUpperCase());
    tempCountriesArray.push(countries[i].length);
    countriesMixedArrays.push(tempCountriesArray);
};
console.log(countriesMixedArrays);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland', 'Iceland']
const landCountries = [];
for (i = 0; i < countries.length; i++) {
    if (countries[i].includes('land') === true) {
        landCountries.push(countries[i]);
    }
};
if (landCountries != []) {
    console.log(landCountries);
} else {
    console.log('All these countries are without land')
};

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
//['Albania', 'Bolivia','Ethiopia']
const iaCountries = [];
for (i = 0; i < countries.length; i++) {
    if (countries[i].slice(-2) === 'ia') {
        iaCountries.push(countries[i]);
    }
};
if (iaCountries !== []) {
    console.log(iaCountries);
} else {
    console.log("These countries don't end in ia");
};

// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia
let longestCountryName = 0;
for (i = 0; i < countriesLength.length; i++) {
    if (countriesLength[i] > longestCountryName) {
        longestCountryName = countriesLength[i];
    }
};
console.log(longestCountryName);

// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
const countriesWithFiveChars = [];
for (i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveChars.push(countries[i]);
    }
};
console.log(countriesWithFiveChars);

// Find the longest word in the webTechs array
let longestWebTechsWord = '';
for (i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > longestWebTechsWord.length) {
        longestWebTechsWord = webTechs[i];
    }
};
console.log(longestWebTechsWord);

// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const webTechsMixedArrays = [];
let tempWebTechsArray = [];
for (let i = 0; i < webTechs.length; i++) {
    tempWebTechsArray = [];
    tempWebTechsArray.push(webTechs[i]);
    tempWebTechsArray.push(webTechs[i].length);
    webTechsMixedArrays.push(tempWebTechsArray);
};
console.log(webTechsMixedArrays);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernStackAcronym = '';
let mernStackFirstLetter = '';
for (i = 0; i < mernStack.length; i++) {
    mernStackFirstLetter = mernStack[i].slice(0, 1).toUpperCase();
    mernStackAcronym += mernStackFirstLetter;
};
console.log(mernStackAcronym);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let tech of webTechs) {
    console.log(tech);
};

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitArray = ['banana', 'orange', 'mango', 'lemon'];
const reverseFruitArray = [];
for (i = fruitArray.length - 1; i >= 0; i--) {
    reverseFruitArray.push(fruitArray[i]);
}
console.log(reverseFruitArray);

// Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
/*
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/
const concatFullStack = fullStack[0].concat(fullStack[1]);
let verticalFullStack = '';
for (i = 0; i < concatFullStack.length; i++) {
    verticalFullStack += concatFullStack[i] + '\n';
};
console.log(verticalFullStack);

// Copy countries array (Avoid mutation)
const countriesCopy = [];
for (i = 0; i < countries.length; i++) {
    countriesCopy.push(countries[i]);
};
console.log(countriesCopy);

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = [];
for (i = 0; i < countries.length; i++) {
    sortedCountries.push(countries[i]);
};
sortedCountries.sort();
console.log(sortedCountries);

// Sort the webTechs array and mernStack array
console.log(webTechs.sort());
console.log(mernStack.sort());

// Reverse the countries array and capitalize each country and stored it as an array
const reversedCountries = [];
for (i = countries.length - 1; i >= 0; i--) {
    reversedCountries.push(countries[i].toUpperCase());
}
console.log(reversedCountries);

