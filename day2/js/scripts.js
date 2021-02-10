// EXERCISE 1

let challenge = "30 Days of JavaScript";

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3, 4));
console.log(challenge.substr(3, 18));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));

let corporations = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(corporations.split(", "));

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let because = "You cannot end a sentence with because because because is a conjunction";

console.log(because.indexOf("because"));
console.log(because.lastIndexOf("because"));

let challengeWithSpaces = " 30 Days of Javascript ";

console.log(challengeWithSpaces.trim(" "));

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
console.log(challenge.match(/a/g));

let days30 = "";

console.log(days30.concat("30 Days of " + "JavaScript"));

console.log(challenge.repeat(2));

// console.log(challenge.);


// EXERCISE 2

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

console.log(typeof("10") == typeof(10));

console.log(typeof(Number("10")) == typeof(10));

console.log(parseFloat('9.8') == 10);

console.log(Math.round(parseFloat('9.8')) == 10);

let pythonName = "python";
let jargonName = "jargon";

console.log(pythonName.includes("on"), jargonName.includes("on"));

let jargonPhrase = "I hope this course is not full of jargon.";

console.log(jargonPhrase.includes("jargon"));

let number0to100 = Math.floor(Math.random() * 101);
console.log(number0to100);

let number50to100 = Math.floor(Math.random() * 51 + 50);
console.log(number50to100);

let number0to255 = Math.floor(Math.random() * 256);
console.log(number0to255);

let number0to10 = Math.floor(Math.random() * 11);
console.log(number0to10);

let javaScriptName = "JavaScript";
console.log(javaScriptName[number0to10]);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

console.log(because.substr(31, 23));

let loveQuote = `'Love is the best thing in this world. Some found their love and some are still looking for their love.'`;
console.log(loveQuote.match(/love/gi));

console.log(because.match(/because/gi));

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let cleanSentence = sentence.replace(/%/g, '').replace(/\$/g, '').replace(/@/g, '').replace(/&/g, '').replace(/#/g, '').replace(/;/g, '');

console.log(cleanSentence);

let sentenceArray = cleanSentence.split(' ');

console.log(cleanSentence.match(/love/gi));
console.log(cleanSentence.match(/teacher/gi));
console.log(cleanSentence.match(/teaching/gi));

let salaryString = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let salaryValues = salaryString.match(/\d+/g);
let salaryTotal = Number(salaryValues[0]) + Number(salaryValues[1]) / 12 + Number(salaryValues[2]);
console.log(salaryTotal);