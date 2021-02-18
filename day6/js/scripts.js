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

// Develop a small script which generate a six characters random id:

// 5j2khz