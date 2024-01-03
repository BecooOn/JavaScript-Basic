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

// 2;
// let my_age = parseInt(prompt("Enter your age: "));
// let your_age = parseInt(prompt("Enter your friend age: "));
// if (my_age > your_age) {
//   console.log(`I'm ${my_age - your_age} years older than you.`);
// } else {
//   console.log(`You are ${your_age - my_age} years older than me.`);
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
//1
//alert("Enter the grade between 0 and 100");
// let grade = parseInt(prompt("Enter your grade: "));
// switch (true) {
//   case grade >= 80 && grade  :
//     console.log("Your grade is A");
//     break;
//   case grade >= 70:
//     console.log("Your grade is B");
//     break;
//   case grade >= 60:
//     console.log("Your grade is C");
//     break;
//   case grade >= 50:
//     console.log("Your grade is D");
//     break;
//   default:
//     console.log("Your grade is F");
// }

//2
// alert("Seasons are Autumn,Winter,Spring,Summer");

// let season1 = prompt("Enter the season: ");
// let season = season1.toLowerCase();

// if (season == "autumn") {
//   console.log("September, October or November, these months are in Autumn.");
// } else if (season == "winter") {
//   console.log("December, January or February, these months are in Winter.");
// } else if (season == "spring") {
//   console.log("March, April or May, these month are in Spring");
// } else if (season == "summer") {
//   console.log("June, July or August, these are are in Summer");
// } else {
//   console.log("You entered an invalid value!");
// }

// alert("Seasons are Autumn,Winter,Spring,Summer");

// let seasonUserInput = prompt("What is the season ?");
// let season = seasonUserInput.toLowerCase();

// switch (season) {
//   case "autumn":
//     console.log("September, October or November, the season is Autumn.");
//     break;
//   case "winter":
//     console.log("December, January or February, the season is Winter");
//     break;
//   case "spring":
//     console.log("March, April or May, the season is Spring");
//     break;
//   case "summer":
//     console.log("June, July or August, the season is Summer");
//     break;
//   default:
//     console.log("It is not a season.");
// }

//Check if a day is weekend day or a working day. Your script will take day as an input.
// let week_days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
// let weekend = ["saturday", "sunday"];

// let userInput1 = prompt("Enter the day: ");
// let userInput = userInput1.toLowerCase();
// if (week_days.includes(userInput)) {
//   console.log(`${userInput} is a working day.`);
// } else if (weekend.includes(userInput)) {
//   console.log(`${userInput} is a weekend.`);
// } else {
//   console.log("Invalid value!");
// }

//Write a program which tells the number of days in a month, now consider leap year.
// let month = [
//   "january",
//   "february",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "august",
//   "september",
//   "october",
//   "november",
//   "december",
// ];

// let numDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// let userInput1 = prompt("Enter the month: ");
// let userInput = userInput1.toLowerCase();
// let index = month.indexOf(userInput);
// console.log(`${userInput} has ${numDays[index]} days.`);

// İlk harfi büyük yazdırmak
// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// let userInput = prompt("Bir kelime veya cümle girin: ");
// let modifiedInput = capitalizeFirstLetter(userInput);
// console.log(modifiedInput);

// let year = parseInt(prompt("Enter the year: "));
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year`);
// }

//which season
// let month = prompt('enter a month');
// switch (month) {
//     case 'january':
//         console.log(the season is winter);
//         break;
//     case 'february':
//         console.log(the season is winter);
//         break;
//     case 'march':
//         console.log(the season is spring);
//         break;
//     case 'april':
//         console.log(the season is spring);
//         break;
//     case 'may':
//         console.log(the season is spring);
//         break;
//     case 'june':
//         console.log(the season is summer);
//         break;
//     case 'july':
//         console.log(the season is summer);
//         break;
//     case 'august':
//         console.log(the season is summer);
//         break;
//     case 'september':
//         console.log(the season is autumn);
//         break;
//     case 'october':
//         console.log(the season is autumn);
//         break;
//     case 'november':
//         console.log(the season is autumn);
//         break;
//     case 'december':
//         console.log(the season is winter);
//         break;
//     default:
//         console.log('invalid month')
// }console.log('sum');
// }

//second method
// let month = {
//   spring: ["march", "april", "may"],
//   summer: ["june", "july", "august"],
//   autumn: ["september", "october", "november"],
//   winter: ["december", "january", "february"],
// };

// let userInput1 = prompt("Enter the month: "); // bu şekilde de yapılabilirdi "prompt("Enter the month: ").toLowerCase();" ve diğer blok kod iptal edilebilirdi.
// let userInput = userInput1.toLowerCase();

// if (month.spring.includes(userInput)) {
//   console.log("it is spring");
// } else if (month.summer.includes(userInput)) {
//   console.log("it is summer");
// } else if (month.autumn.includes(userInput)) {
//   console.log("it is autumn");
// } else if (month.winter.includes(userInput)) {
//   console.log("it is winter");
// } else {
//   console.log("Not found in any season");
// }

// const arr = Array(5);
// console.log(arr);

// const arr1 = Array(5, "a");
// console.log(arr1);

// let arr2 = Array(2).fill(3);
// console.log(arr2);

// const arr3 = [];
// console.log(arr3);

// const arr4 = [2];
// console.log(arr4);

// const fruits = ["banana", "orange", "mango", "lemon"]; // array of fruits
// const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables);
// console.log(fruitsAndVegetables);

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers.lastIndexOf(2)) // 7
// console.log(numbers.lastIndexOf(0)) // -1
// console.log(numbers.lastIndexOf(1)) //  6
// console.log(numbers.lastIndexOf(4)) //  3
// console.log(numbers.lastIndexOf(6)) // -1

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.toString()); // 1,2,3,4,5
// console.log(typeof numbers.toString()); // 1,2,3,4,5

// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook
// let aa = names.toString();
// console.log(aa);

//Exercise: Level 1
//1.Declare an empty array;
// const arr = []; // const arr = Array();
// console.log(arr);

//2.Declare an array with more than 5 number of elements
// const arr = Array(10);
// console.log(arr);

//3.Find the length of your array

//4.Get the first item, the middle item and the last item of the array
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];
// console.log(
//   "begin: ",
//   countries[0],
//   "middle: ",
//   countries[parseInt(countries.length / 2)],
//   "end: ",
//   countries[countries.length - 1]
// );

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// console.log(itCompanies);

//7.console.log(itCompanies);

//8.console.log(itCompanies.length);

//9.Print the first company, middle and last company
// console.log(
//   "begin:",
//   itCompanies[0],
//   " middle:",
//   itCompanies[parseInt(itCompanies.length / 2)],
//   " end:",
//   itCompanies[itCompanies.length - 1]
// );

//10.Print out each company
// for (let i = 0; i < itCompanies.length; i++) {
//   console.log(itCompanies[i]);
// }

//11.Change each company name to uppercase one by one and print them out
// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
//   }

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// let Companies = itCompanies.toString();
// let text = `${Companies} are big IT companies`;
// console.log(text);

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// itCompanies.includes('Google') === true
//     ? console.log('Google')
//     : console.log('Company is not found')

//14.Filter out companies which have more than one 'o' without the filter method
//?

//15.Sort the array using sort() method
// console.log(itCompanies.sort());

//16.Reverse the array using reverse() method
// console.log(itCompanies.reverse());

//17.Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0,3));

//18.Slice out the last 3 companies from the array
// console.log(itCompanies.slice(-3));

//19.Slice out the middle IT company or companies from the array
// console.log(itCompanies[parseInt(itCompanies.length/2)]);

//20.Remove the first IT company from the array
// console.log(itCompanies.shift());

//21.Remove the middle IT company or companies from the array
// console.log(itCompanies.shift(itCompanies.length / 2));

//22.Remove the last IT company from the array
// console.log(itCompanies.pop());

//23.Remove all IT companies
// console.log(itCompanies.splice());

// let number = parseInt(
//   prompt("Enter the number for the multiplication table: ")
// );
// for (let i = 1; i <= number; i++) {
//   console.log();
//   for (let j = 1; j <= number; j++) {console.log(`${i} * ${j} = ${i * j}`);}
//   console.log();
// }

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// for (const tech of webTechs) {
//   console.log(tech.toUpperCase());
//   console.log(typeof tech);
// }

// const numbers = [1, 2, 3, 4, 5];
// let sum = [];
// for (const num of numbers) {
//   sum.push(num);
//   console.log(typeof num);
// }
// console.log(sum);

// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// const newArr = [];
// for (const country of countries) {
//   newArr.push(country.toUpperCase());

// }console.log(newArr);

// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

//Exercises:Day 6
//Exercises: Level 1
//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(let i = 0; i <= 10 ; i++){
//     console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//2.Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// let i = 10;
// do {
//   console.log(i--);
// } while (i >= 0);

// let n = parseInt(prompt("enter a number: "))
// for(let i = 0; i<=n; i++){
//     console.log(i);
// }

//4.Write a loop that makes the following pattern using console.log():

// let i = 1;
// let sekil = "";
// while (i <= 7) {
//   sekil += "#";
//   console.log(sekil);
//   i++;
// }

//5.Use loop to print the following pattern:
// for (let i = 0; i < 11; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }

//6.Using loop print the following pattern
// console.log(`i  i^2  i^3`);
// for (let i = 0; i < 11; i++) {
//   console.log(`${i}  ${i ** 2}    ${i ** 3}`);
// }

//7.Use for loop to iterate from 0 to 100 and print only even numbers
// let arr = [];
// for(let i = 0; i <= 100; i++){
//     if(i%2 == 0){
//         arr.push(i);
//     }
// }
// console.log(arr);

// for (let i = 0; i <= 100; i += 2) {
//   arr.push(i);
// }
// console.log(arr);

//8.Use for loop to iterate from 0 to 100 and print only odd numbers
// let arr = [];
// for (let i = 1; i <= 100; i += 2) {
//   arr.push(i);
// }
// console.log(arr);

//9.Use for loop to iterate from 0 to 100 and print only prime numbers

// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(i);
//   }
// }

//10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// for(let i = 0; i<=100; i++){
//     sum += i;
// }
// console.log("The sum of all numbers from 0 to 100 is", sum);

// let sum = 0;
// for(let i = 0; i < 101; i++) {
//    sum += i;
// } console.log("Sum of 0-100: ", sum);

//11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i < 101; i++) {
//   if (i % 2 == 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }
// console.log(sumEven, sumOdd);

//12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i < 101; i++) {
//   if (i % 2 == 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }
// console.log([sumEven, sumOdd]);

//13.Develop a small script which generate array of 5 random numbers
// let randomNums = [];
// for (let i = 0; i < 5; i++) {
//   randomNums.push(parseInt(Math.random()*100));
// }
// console.log(randomNums);

//14.Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let randomNums = [];
// let a = 0;
// for (let i = 0; i < 5; i++) {
//   a = parseInt(Math.random() * 100);
//   if (!randomNums.includes(a)) {
//     randomNums.push(a);
//   }
// }
// console.log(randomNums);

//15.Develop a small script which generate a six characters random id:
//Zeynep hocam
// let alphabets = 'abcdefghijklmnopqrstuvwxyz';
// let randoms = [];
// for(let i = 0; i < 6; i++) {
//    if(i%2 == 0) randoms.push(i);
//    else randoms.push(alphabets[parseInt(Math.random() * 25)])
// }
// console.log(randoms.join(''));

//Seda hocam
// let alphabets = 'abcdefghijklmnopqrstuvwxyz0123456789';
// let randoms = [];
// for(let i = 0; i < 6; i++) {
// randoms.push(alphabets[parseInt(Math.random() * 37)])
// }
// console.log(randoms.join(''));

// const chars = "0123456789abcdefghiklmnopqrstuvwxyz";
//     let id = '';

//     while (id.length < 6) {
//         let index = Math.floor(Math.random() * chars.length);
//         let charsIn = chars[index]
//             id += charsIn
//     }
//     console.log(id);


//Akmaral hocam
// const randomId = Math.random().toString(36).substr(2, 6);
// console.log(randomId);

