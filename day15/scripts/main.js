// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  animalID() {
    return `The animal is called ${this.name} and ${this.age} years old.`
  }
  animalDescription() {
    return `The animal is ${this.color} and has ${this.legs} leg(s).`
  }
  animalFullInfo() {
    return `The animal is called ${this.name}, ${this.age} years old, ${this.color} and has ${this.legs} leg(s).`
  }
  get test() {
    return `Is this just like a method? ${this.name}`
  }
}
const animal1 = new Animal('Doggo', 6, 'red', 4)
console.log(animal1.animalFullInfo())
console.log(animal1.test)

// Create a Dog and Cat child class from the Animal Class.
// Override the method you create in Animal class
class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs)
    this.breed = breed
  }
  animalDescription() {
    return `The animal is a ${this.color} ${this.breed} and has ${this.legs} leg(s).`
  }
}
const dog1 = new Dog('Doggo', 6, 'red', 4, 'Husky')
console.log(dog1.animalDescription())

class Cat extends Animal {
  constructor(name, age, color, legs, type) {
    super(name, age, color, legs)
    this.type = type
  }
  animalDescription() {
    return `The animal is a ${this.color} ${this.type} and has ${this.legs} leg(s).`
  }
}
const cat1 = new Cat('Kitty', 4, 'purple', 4, 'mouser')
console.log(cat1.animalDescription())

/* Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

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
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

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

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
  constructor(arr) {
    this.arr = arr
    let length = this.arr.length
  }
  get count() {
    return this.arr.length
  }
  get sum() {
    return this.arr.reduce((acc, value) => acc + value)
  }
  get min() {
    return Math.min(...this.arr)
  }
  get max() {
    return Math.max(...this.arr)
  }
  get range() {
    return this.max - this.min
  }
  get mean() {
    return this.sum / this.count
  }
  get median() {
    this.arr.sort((a, b) => a - b)
    if (this.arr.length % 2 === 0) {
      return (this.arr[Math.floor((this.arr.length - 1) / 2)] + this.arr[Math.floor((this.arr.length) / 2)]) / 2
    } else {
      return this.arr[Math.floor(this.arr.length / 2)]
    }
  }
  get mode() {
    let mostCommonNum = 0
    let currentNumCount = 0
    let highestNum = 0
    for (let i = 0; i < this.arr.length; i++) {
      currentNumCount = 0
      for (let n = 0; n < this.arr.length; n++) {
        if (this.arr[i] === this.arr[n]) {
          currentNumCount++
        }
      }
      if (currentNumCount > highestNum) {
        highestNum = currentNumCount
        mostCommonNum = this.arr[i]
      }
    }
    return `(${mostCommonNum}, ${highestNum})`
  }
  get var() {
    let mean = this.mean
    const differenceFromMean = []
    this.arr.map(function(age) {
      differenceFromMean.push(age - mean)
    })
    const squaredDifference = []
    differenceFromMean.map(function(difference) {
      squaredDifference.push(Math.pow(difference, 2))
    })
    return squaredDifference.reduce(function(total, differenceSq) {
      return total + differenceSq
    }) / squaredDifference.length
  }
  get std() {
    return Math.sqrt(this.var)
  }
  get freqDist() {
    const uniqueAges = []
    
    function pushUniqueAges(age) {
      if (uniqueAges.includes(age) === false) {
        uniqueAges.push(age)
      }
    }
    this.arr.forEach(pushUniqueAges)

    function pushFreqDistObj(age) {
      let count = 0
      for (let i = 0; i < length; i++) {
        if (this.arr[i] === age) {
          count++
        }
      }
      return `(${age}, ${count})`
    }
    return uniqueAges.map(pushFreqDistObj)
  }
}

const statistics = new Statistics(ages)
console.log(statistics.sum)
console.log(statistics.min)
console.log(statistics.max)
console.log(statistics.range)
console.log(statistics.mean)
console.log(statistics.median)
console.log(statistics.mode)
console.log(statistics.var)
console.log(statistics.std)
console.log(statistics.freqDist)

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

/*
{activity: 'carpenter', income: 2000},
etc.
*/

class PersonAccount {
  constructor(firstname, lastname, incomes, expenses) {
    this.firstname = firstname
    this.lastname = lastname
    this.incomes = incomes
    this.expenses = expenses
  }
  get totalIncome() {
    let total = 0
    for (const income of this.incomes) {
      total += income.amount
    }
    return total
  }
  get totalExpense() {
    let total = 0
    for (const expense of this.expenses) {
      total += expense.amount
    }
    return total
  }
  get accountBalance() {
    return this.totalIncome - this.totalExpense
  }
  get accountInfo() {
    return `The account belongs to ${this.firstname} ${this.lastname}. Its balance is ${this.accountBalance}.`
  }
  set addIncome(income) {
    this.incomes.push(income)
  }
  set addExpense(income) {
    this.expenses.push(income)
  }
}

const client = new PersonAccount('John', 'Doe', [{description: 'teaching', amount: 1000}, {description: 'speculation', amount: 500}], [{description: 'taxes', amount: 700}, {description: 'housing', amount: 300}])

console.log(client.totalIncome)
console.log(client.totalExpense)
console.log(client.accountBalance)
console.log(client.accountInfo)
client.addIncome = {description: 'freelance', amount: 500}
client.addExpense = {description: 'food', amount: 200}
console.log(client.totalIncome)
console.log(client.totalExpense)