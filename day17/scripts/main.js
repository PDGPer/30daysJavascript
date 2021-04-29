// Store you first name, last name, age, country, city in your browser localStorage.
const details = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    country: 'Australia',
    city: 'Melbourne'
}
let detailsJSON = JSON.stringify(details, undefined, 2)
localStorage.setItem('details', detailsJSON)

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 17,
    skills: [
        'sleeping',
        'eating',
        'scratching'
    ],
    country: 'South Africa',
    enrolled: true
}
let studentJSON = JSON.stringify(student, undefined, 2)
localStorage.setItem('student', studentJSON)

console.log(JSON.parse(localStorage.getItem('student'), undefined, 2))