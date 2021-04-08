// Create an empty object called dog
const dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Doggo';
dog.legs = 4;
dog.color = 'black';
dog.age = 7;
dog.bark = function() {
    return 'woof woof';
}
console.log(dog);
console.log(dog.bark);

// Get name, legs, color, age and bark value from the dog object
const dogValues = Object.values(dog);
console.log(dogValues);

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'mutt';
dog.getDogInfo = function() {
    return `${this.name} is a ${this.age} years old ${this.legs} legged ${this.color} ${this.breed}.`;
};
console.log(dog.getDogInfo());

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// Find the person who has many skills in the users object
const userNames = Object.keys(users);
let skilledUser = '';
let mostSkills = 0;
for (i = 0; i < userNames.length; i++) {
  if (users[userNames[i]].skills.length > mostSkills) {
    mostSkills = users[userNames[i]].skills.length;
    skilledUser = userNames[i];
  };
};
console.log(skilledUser);

// Count logged in users,count users having greater than equal to 50 points from the following object
let loggedInCount = 0;
let pointsOverOr50 = 0;
for (i = 0; i < userNames.length; i++) {
  if (users[userNames[i]].isLoggedIn === true) {
    loggedInCount++;
  };
  if (users[userNames[i]].points >= 50) {
    pointsOverOr50++;
  };
};
console.log(loggedInCount);
console.log(pointsOverOr50);

// Find people who are MERN stack developer from the users object
const mernStackDevs = [];
for (i = 0; i < userNames.length; i++) {
  if (users[userNames[i]].skills.includes('MongoDB') &&
      users[userNames[i]].skills.includes('Express') &&
      users[userNames[i]].skills.includes('React') &&
      users[userNames[i]].skills.includes('Node')) {
        mernStackDevs.push(userNames[i]);
      };
};
console.log(mernStackDevs);

// Set your name in the users object without modifying the original users object
const myName = {
  Guy: {
    email: 'whatever@whatever.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 40,
    isLoggedIn: false,
    points: 30
  }
};

const usersClone = Object.assign(users, myName);
console.log(usersClone);

// Get all keys or properties of users object
const usersKeys = Object.keys(users);
console.log(usersKeys);

// Get all the values of users object
const usersValues = Object.values(users);
console.log(usersValues);

// Use the countries object to print a country name, capital, populations and languages
let randomCountryIndex = Math.floor(Math.random() * countries.length);
console.log(randomCountryIndex);
let countryName = countries[randomCountryIndex].name;
let countryCapital = countries[randomCountryIndex].capital;
let countryPopulation = countries[randomCountryIndex].population;
let countryLanguage = countries[randomCountryIndex].languages;
console.log(`${countryName} has ${countryPopulation} inhabitants and its capital is ${countryCapital}. ${countryLanguage} is spoken there.`);

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName : 'Guy',
  lastName : 'Smith',
  incomes: {
    job: 2000,
    freelance: 400
  },
  expenses: {
    rent: 1000,
    food: 500
  },
  totalIncome: function() {
    const incomesArray = Object.keys(this.incomes);
    let incomesSum = 0;
    for (i = 0; i < incomesArray.length; i++) {
      incomesSum += this.incomes[incomesArray[i]];
    };
    return incomesSum;
  },
  totalExpense: function() {
    const expensesArray = Object.keys(this.expenses);
    let expensesSum = 0;
    for (i = 0; i < expensesArray.length; i++) {
      expensesSum += this.expenses[expensesArray[i]];
    };
    return expensesSum;
  },
  accountInfo: function() {
    return `The account belongs to ${this.firstName} ${this.lastName}.`
  },
  addIncome: function() {
    let hypotheticalKey = 'sales';
    let hypotheticalValue = 500;
    this.incomes[hypotheticalKey] = hypotheticalValue;
  },
  addExpense: function() {
    let hypotheticalKey = 'sales';
    let hypotheticalValue = 500;
    this.expenses[hypotheticalKey] = hypotheticalValue;
  },
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
personAccount.addIncome();
console.log(personAccount.totalIncome());
personAccount.addExpense();
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());

const usersNew = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];

// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account
function signUp(username, email, password) {

  function randomId() {
    const charactersArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let value = charactersArray[Math.floor(Math.random() * charactersArray.length)] +
                charactersArray[Math.floor(Math.random() * charactersArray.length)] +
                charactersArray[Math.floor(Math.random() * charactersArray.length)] +
                charactersArray[Math.floor(Math.random() * charactersArray.length)] +
                charactersArray[Math.floor(Math.random() * charactersArray.length)] +
                charactersArray[Math.floor(Math.random() * charactersArray.length)];
    return value;
  };

  function checkId() {
    let id = randomId();
    for (i = 0; i < usersNew.length; i++) {
      if (id === usersNew[i]['_id']) {
        checkId();
      }
    }
    return id;
  };

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
};

  const newUser = {
    _id: checkId(),
    username: username,
    email: email,
    password: password,
    createdAt: currentTime(),
    isLoggedIn: false
  };
  
  usersNew.push(newUser);
};

signUp('Guy', 'guy@mail.com', 'pass123');
console.log(usersNew);

// Create a function called signIn which allows user to sign in to the application
function signIn(name, password) {
  for (i = 0; i < usersNew.length; i++) {
    if (name === usersNew[i].username && password === usersNew[i].password) {
      usersNew[i].isLoggedIn = true;
      return 'User has logged in'
    }
  }
  return 'No such user exists or wrong password'
};
console.log(signIn('Thomas', 'wrongpass'));
console.log(signIn('Thomas', '123333'));
console.log(usersNew[4].isLoggedIn);



const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
  ];

//Create a function called rateProduct which rates the product
function rateProduct(productId, userId, rating) {
  for (i = 0; i < products.length; i++) {
    if (productId === products[i]['_id']) {
      products[i].ratings.push({userId: userId, rate: rating});
    }
  }
};
rateProduct('hedfcg', 'zzttop', 3);
console.log(products[2]);

// Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  let productRatings = 0;
  let productAmount = 0;
  for (i = 0; i < products.length; i++) {
    if (productId === products[i]['_id']) {
      for (n = 0; n < products[i].ratings.length; n++) {
        productRatings += (products[i].ratings[n].rate);
        productAmount++
      };
    };
  };
  return productRatings / productAmount;
};
console.log(averageRating('eedfcf'));

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked

function likeProduct(userId, productId) {
  for (i = 0; i < products.length; i++) {
    if (productId === products[i]['_id']) {
      if (products[i].likes.indexOf(userId) !== -1) {
        products[i].likes.splice(products[i].likes.indexOf(userId), 1);
      } else {
        products[i].likes.push(userId);
      };
    };
  };
};
likeProduct('fg12cy', 'aegfal');
console.log(products[1].likes);
likeProduct('fg12cy', 'eedfcf');
console.log(products[0].likes);