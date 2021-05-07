// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
console.log(document.querySelector('p'))

// Get get each of the the paragraph using document.querySelector('#id') and by their id
console.log(document.querySelector('#one'))
console.log(document.querySelector('#two'))
console.log(document.querySelector('#three'))
console.log(document.querySelector('#four'))

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
console.log(document.querySelectorAll('p'))

// Loop through the nodeList and get the text content of each paragraph
const allParagraphs = document.querySelectorAll('p')
for (i = 0; i < allParagraphs.length; i++) {
    console.log(allParagraphs[i].innerHTML)
}

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
allParagraphs[3].textContent = 'Fourth Paragraph'
console.log(allParagraphs[3])

// Set id and class attribute for all the paragraphs using different attribute setting methods
allParagraphs[0].className = 'red'
console.log(allParagraphs[0])

allParagraphs[1].setAttribute('class', 'green')
console.log(allParagraphs[1])

allParagraphs[2].classList.add('blue')
console.log(allParagraphs[2])

// Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
allParagraphs[0].style.color = 'red'
allParagraphs[0].style.backgroundColor = 'darkgreen'
allParagraphs[0].style.border = '2px solid black'
allParagraphs[0].style.fontSize = '12px'
allParagraphs[0].style.fontFamily = 'Garamond'

allParagraphs[1].style.color = 'green'
allParagraphs[1].style.backgroundColor = 'darkred'
allParagraphs[1].style.border = '5px dotted black'
allParagraphs[1].style.fontSize = '20px'
allParagraphs[1].style.fontFamily = 'Arial'

allParagraphs[2].style.color = 'blue'
allParagraphs[2].style.backgroundColor = 'orange'
allParagraphs[2].style.border = '1px solid blue'
allParagraphs[2].style.fontSize = '30px'
allParagraphs[2].style.fontFamily = 'Times New Roman'

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for (i = 0; i < allParagraphs.length; i++) {
    if (i % 2 === 0) {
    allParagraphs[i].style.color = 'green'
    } else {
    allParagraphs[i].style.color = 'red'
    }
}

// Set text content, id and class to each paragraph
// Done previously

const wrapper = document.getElementsByClassName('wrapper')
wrapper[0].innerHTML = '<h1>Asabeneh Yetayeh challenges in 2020</h1><h2>30DaysOfJavaScript Challenge</h2><p id="clock"></p><ul><li class="complete">30DaysOfPython Challenge Done</li><li class="ongoing">30DaysOfJavaScript Challenge Ongoing</li><li class="coming">30DaysOfReact Challenge Coming</li><li class="coming">30DaysOfFullStack Challenge Coming</li><li class="coming">30DaysOfDataAnalysis Challenge Coming</li><li class="coming">30DaysOfReactNative Challenge Coming</li><li class="coming">30DaysOfMachineLearning Challenge Coming</li></ul>'

// The year color is changing every 1 second
const h1Headings = document.querySelectorAll('h1')

h1Headings[0].innerHTML = 'Asabeneh Yetayeh challenges in <span id="year">2020</span>'

const year = document.querySelector('#year')

const randomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++){
       const random = Math.random();
       const bit = (random * 16) | 0;
       color += (bit).toString(16);
    };
    return color;
};

function changeYearColor() {
    year.style.color = randomColor()
}

setInterval(changeYearColor, 1000)

// The date and time background color is changing every on seconds
const clock = document.getElementById('clock')

function currentTime() {
    let day = new Date().getDate();
    if (day.toString().length === 1) {
        day = `0${day}`;
    };
    let month = new Date().getMonth();
    if (month.toString().length === 1) {
        month = `0${month}`;
    };
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour.toString().length === 1) {
        hour = `0${hour}`;
    };
    let minutes = new Date().getMinutes();
    if (minutes.toString().length === 1) {
        minutes = `0${minutes}`;
    };
    if (new Date().getHours() < 13) {
      return `${day}/${month}/${year} ${hour}:${minutes} AM`;
    } else {
      return `${day}/${month}/${year} ${hour}:${minutes} PM`;
    };
}

function updateClock() {
    clock.innerHTML = currentTime()
    clock.style.backgroundColor = randomColor()
}

updateClock()
setInterval(updateClock, 1000)

// Completed challenge has background green
const complete = document.querySelectorAll('.complete')

for (i = 0; i < complete.length; i++) {
    complete[i].style.backgroundColor = 'green'
}

// Ongoing challenge has background yellow
const ongoing = document.querySelectorAll('.ongoing')

for (i = 0; i < ongoing.length; i++) {
    ongoing[i].style.backgroundColor = 'yellow'
}

// Coming challenges have background red
const coming = document.querySelectorAll('.coming')

for (i = 0; i < coming.length; i++) {
    coming[i].style.backgroundColor = 'red'
}