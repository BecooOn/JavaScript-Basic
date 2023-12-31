// console.log("Welcome to 30DaysOfJavaScript");
// console.log(typeof "zeynep");
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
/*
let firstName = 'zeynep'
let firstName = 'zeynep'
let firstName = 'zeynep'
let firstName = 'zeynep'
*/

/*
let firstName = "Adem";
let lastName = "Bekçi";
let country = "Turkey";
let city = "Giresun";
let age = 32;
let isMarried = false;
console.log(firstName, lastName, country, city, age, isMarried);
*/
/*
let first_name = "Adem";
let last_name = "Bekçi";
let country = "Türkiye";
let city = "Espiye";
let age = 32;
let isMarried = false;
console.log(first_name, last_name, country, city, age, isMarried);

const gravity = 9.18;
const pi = 3.14;
const name = 'Adem';
*/
// const gravity = 9.18,
//   pi = 3.14;
// console.log(gravity, pi);

// We tried to learn new commands with JS
// Welcome to 30DaysOfJavaScript

/* My shortcut way for comment is ctrl+k
And we can write many lines for comment*/
// let str = "create",
//   bool = true,
//   undi,
//   name3 = null;

// let my_age = 32;
// let your_age = 25;
// console.log(my_age, your_age);

// let a, b, c, d;
// console.log(a, b, c, d);
// console.log((a = "2"), (b = true), (c = null), (d = 0));

// Declare variables and assign initial values
// let myAge = 32;
// let yourAge = 28;

// Log variables to the browser console
// console.log('I am', myAge, 'years old');
// console.log('You are', yourAge, 'years old');

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// let challenge = "30 Days Of JavaScript";

//Print the string on the browser console using console.log()
// console.log(challenge);

//Print the length of the string on the browser console using console.log()
// console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
// console.log(challenge.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
// console.log(challenge.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method
// console.log(challenge.substr(0, 2));
// console.log(challenge.substring(0, 2));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// console.log(challenge.substring(3));

//Check if the string contains a word Script using includes() method
// console.log(challenge.includes("Script"));

//Split the string into an array using split() method
// console.log(challenge.split(" "));

//Split the string 30 Days Of JavaScript at the space using split() method
// console.log(challenge.split());

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// let newchallenge = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(newchallenge.split(","));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// console.log(challenge.replace("30 Days Of JavaScript", "30 Days Of Python"));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// console.log(challenge.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// console.log(challenge.charCodeAt(15));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// console.log(challenge.indexOf("a"));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// console.log(challenge.lastIndexOf("a"));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// let challenge1 =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(challenge1.indexOf("because"));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// console.log(challenge1.lastIndexOf("because"));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// console.log(challenge1.search("because"));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// let challenge2 = " 30 Days Of JavaScript ";
// console.log(challenge2.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// console.log(challenge.startsWith("30"));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// console.log(challenge.endsWith("JavaScript"));

//Use match() method to find all the a’s in 30 Days Of JavaScript
// console.log(challenge.match(/a/g));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// console.log("30 Days of".concat("JavaScript"));

//Use repeat() method to print 30 Days Of JavaScript 2 times
// console.log(challenge.repeat(2));

//Exercise: Level 2
//1.Using console.log() print out the following statement:
// console.log(
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// );

//2.Using console.log() print out the following quote by Mother Teresa:
// console.log(
//   "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
// );

//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// let str_num = "10";
// let r_num = 10;
// console.log(str_num === r_num);
// let numInt = parseInt(str_num); // let numInt = Number(str_num); or let numInt = +str_num;
// console.log(numInt === r_num);

//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// let p_float = 9.81;
// let ab_num = 10;
// console.log(p_float == ab_num);
// console.log(Math.ceil(p_float) == ab_num);

//5.Check if 'on' is found in both python and jargon
// let python = "python";
// let jargon = "jargon";
// console.log(jargon.includes("on"), python.includes("on"));

//6.I hope this course is not full of jargon. Check if jargon is in the sentence.
// let jargon1 = "I hope this course is not full of jargon.";
// console.log(jargon1.includes("jargon"));

//7.Generate a random number between 0 and 100 inclusively.
// let sayi = Math.floor(Math.random() * 101);
// console.log(sayi);

//8.Generate a random number between 50 and 100 inclusively.
// let rand_num = Math.floor(Math.random() * 51) + 50;
// console.log(rand_num);

//9.Generate a random number between 0 and 255 inclusively.
// let rand_num1 = Math.floor(Math.random() * 256);
// console.log(rand_num1);

//10.Access the 'JavaScript' string characters using a random number.
// let j_str = "JavaScript";
// let r_sayi = j_str.length;
// console.log(j_str.charAt(Math.random() * (r_sayi - 1)));

//11.Use console.log() and escape characters to print the following pattern.
// console.log(
//   "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
// );

//12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
// let scl =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(scl.substr(31, 23));

//Exercises: Level 3
//1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
// let love =
//   "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// let count = love.match(/love/gi);
// console.log(count.length);

//2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// let bcs =
//   "You cannot end a sentence with because because because is a conjunction";
// let count1 = bcs.match(/because/gi);
// console.log(count1.length);

//3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// const sentence =
//   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
// let sn1 = sentence.replace(/%/g, "");
// let sn2 = sn1.replace(/\$/g, "");
// let sn3 = sn2.replace(/@/g, "");
// let sn4 = sn3.replace(/&/g, "");
// let sn5 = sn4.replace(/#/g, "");
// console.log(sn5);
// let wordsArray = sn5.match(/\b\w+\b/g);
// console.log(wordsArray);

//4.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let income = 5000 * 12 + 15000 * 12 + 10000;
// console.log(income);

// let txt20 =
//   "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
// let regEx = /\d+/;

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

// console.log(txt20.match(/regEx/g)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt20.match(/\d+/g)); // ["2019", "30", "2020"]

// let num = "10.7";
// let numInt55 = parseInt(num);
// console.log(numInt55);

// let typeOf10 = typeof '10'; // it's string
// typeOf10 = typeof parseInt('10')
// console.log(typeOf10);

// let valueOf9_8 = parseFloat('9.8') // value is 9.8 exactly so we will change it to 10
// valueOf9_8 = Math.ceil(valueOf9_8);
// console.log(valueOf9_8);

// let onInPython = "Python".includes("on");
// let onInJargon = "jargon".includes("on");
// console.log("\'on\' is present in both Python and Jargon: ", onInPython == onInJargon);
// let a = 'I hope this course is not full of jargon.';
// console.log(a.includes('jargon'));
// let a = Math.floor(Math.random()*101);
// console.log(a);
// let b = Math.floor(Math.random()*51+50) ;
// console.log(b);
// let a = Math.floor(Math.random()*256);
// console.log(a);
// let js = 'JavaScript';
// let randomIndex = Math.floor(Math.random() * (js.length - 1));
// console.log(js[randomIndex]);
// console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");
// let a =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(a.substr(31, 23));

// const date = new Date();

// let year = date.getFullYear(),
//   month = date.getMonth(),
//   day = date.getDate(),
//   dayNumber = date.getDay(),
//   hour = date.getHours(),
//   minute = date.getMinutes(),
//   second = date.getSeconds();

// let months = [
//   "OCAK",
//   "SUBAT",
//   "MART",
//   "NİSAN",
//   "MAYIS",
//   "HAZİRAN",
//   "TEMMUZ",
//   "AGUSTOS",
//   "EYLÜL",
//   "EKİM",
//   "KASIM",
//   "ARALIK",
// ];

// let days = [
//   "PAZARTESİ",
//   "SALI",
//   "ÇARŞAMBA",
//   "PERŞEMBE",
//   "CUMA",
//   "CUMARTESİ",
//   "PAZAR",
// ];

// let humanReadDate = ${day} ${months[month]} ${year} ${days[dayNumber]} ${hour} ${minute} ${second};
// console.log(humanReadDate);
// let a = 1 , b = '2', c = 3;
// console.log(a, b, c);

// let y = 0;
// let x = (y ** 0.5 - 3);
// console.log(x);

// let hours = parseInt(prompt("Enter your worked hours: "));
// let rate_per_h = parseInt(prompt("Enter rate per hour: "));
// console.log("You earned :", hours * rate_per_h);

// let firstName = "Asabeneh";
// let lastName = "Yetayeh";

// firstName.length > lastName.length
//  ? console.log(`Your first name, Asabeneh is longer than your family name, Yetayeh`)
//  : console.log(`false`);

// let year = parseInt(prompt("enter year :"));
// let now = new Date().getFullYear();
// let age = now - year;
// console.log(
//   `You have been living ${age * 365 * 24 * 60 * 60} seconds for years`
// );
// const d = new Date();

// let mins = d.getMinutes();
// mins < 10 ? "0" + mins.toString() : mins;
// let hrs = d.getHours();
// hrs < 10 ? "0" + hrs.toString() : hrs;

// let year = d.getFullYear();
// let month = d.getMonth();
// let date = d.getDate();

// console.log(`${year}-${month + 1}-${date}  ${hrs}:${mins}`);
// let num = 0;
// if (num >= 0) {
//   console.log(`${num} is a positive number`);
// } else {
//   console.log(`${num} is a negative number`);
// }

// Switch More Examples
// let dayUserInput = prompt("What day is today ?");
// let day = dayUserInput.toLowerCase();

// switch (day) {
//   case "monday":
//     console.log("Today is Monday");
//     break;
//   case "tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "thursday":
//     console.log("Today is Thursday");
//     break;
//   case "friday":
//     console.log("Today is Friday");
//     break;
//   case "saturday":
//     console.log("Today is Saturday");
//     break;
//   case "sunday":
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("It is not a week day.");
// }

// let num = prompt("Enter number");
// switch (true) {
//   case num > 0:
//     console.log("Number is positive");
//     break;
//   case num == 0:
//     console.log("Numbers is zero");
//     break;
//   case num < 0:
//     console.log("Number is negative");
//     break;
//   default:
//     console.log("Entered value was not a number");
// }

// let isRaining = true;
// isRaining
//   ? console.log("You need a rain coat.")
//   : console.log("No need for a rain coat.");
// isRaining = false
//   ? console.log("You need a rain coat.")
//   : console.log("No need for a rain coat.");

//Exercises: Level 1
//1
// let age = prompt("Enter your age: ");
// if (age >= 18) {
//     console.log('You are old enough to drive');
// } else {
//     console.log(`You are left with ${18 - age} years to drive.`);
// }

//2
// let my_age = prompt("Enter your age: ");
// let your_age = prompt("Enter your friend age: ");
// if (my_age > your_age){
//     console.log(`I'm ${my_age - your_age} years older than you.`);
// } else {
//     console.log(`You are ${your_age - my_age} years older than me.`);
// }

//3
// let a = 4;
// let b = 3;
// if (a > b) {
//   console.log(`a is greater than b`);
// } else {
//   console.log(`a is less than b`);
// }

//4

// let num = parseInt(prompt("Enter a number: "));
// if (num % 2 == 0) {
//   console.log(`${num} is a even number`);
// } else {
//   console.log(`${num} is a odd number`);
// }

// let number = parseInt(prompt("Enter a number: "));
// number % 2 == 0 ? console.log(`${number} is an even number`): console.log(`${number} is an odd number`);

//Exercises: Level 2

