// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(pi)

// Destructure and assign the elements of countries array to fin, est, sw, den, nor.
const lessCountries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const [fin, est, sw, den, nor] = lessCountries
console.log(nor)

// Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }

const {width, height, area, perimeter} = rectangle
console.log(area)

// Iterate through the users array and get all the keys of the object using destructuring
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTML', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTML', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTML', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTML', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTML', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTML', 'CSS', 'JS'],
      age:20
    }
]

for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age)
}

// Find the persons who have less than two skills
for (const {name, skills} of users) {
    if (skills.length < 3) {
        console.log(name)
    }
}

// Destructure the countries object print name, capital, population and languages of all countries
/* 
for (const {name, capital, population, languages} of countries) {
    console.log(name, capital, population, languages)
} 
*/

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [name, skills, scores, jsScore = student[2][2], reactScore = student[2][3]] = student
console.log(name, jsScore)

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
    const convertedObjects = []
    for (const [name, skills, score] of arr) {
        convertedObjects.push({name, skills, score})
    }
    return convertedObjects
}
console.log(convertArrayToObject(students))

/* Copy the student object to newStudent without mutating the original object. In the new object add the following:

Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets */

const anotherStudent = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

const copiedStudent = {...anotherStudent, skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
      { skill: 'Bootstrap', level: 8}
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
      { skill: 'Express', level: 9 }
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
      { skill: 'SQL', level: 8 }
    ],
    dataScience:['Python', 'R', 'D3.js', 'SQL']
  }
}

console.log(anotherStudent)
console.log(copiedStudent)

// Note: The materials only teach how to do shallow copies, which makes avoiding mutation on this exercise impossible without copying and pasting most of the structure.