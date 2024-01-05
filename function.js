//3.Declare a function addNumbers and it takes two two parameters and it returns sum.
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(2,3));

//4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// function sum(a, b){
//     return a * b;
// }
// console.log(sum(2,3));

// const result = (a,b) => a*b
// console.log(result(5,8));

//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// const perimeter= (length, width) => 2*(length + width)
// console.log(perimeter(5,8));

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// const multiAllNums = (a,b,c) => a * b * c;
// console.log(multiAllNums(2,3,4));

//7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// let areaOfCircle = (r,pi=3) => pirr;
// console.log(areaOfCircle(3));

//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// function circumOfCircle(r) {
//     return 2* Math.PI * r
//   }
//   console.log(circumOfCircle(5));

//9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// function densityOfSubstance (m, v) {
//     return m/v;
// } console.log(densityOfSubstance(23, 3));

//10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// function speed(distance, time) {
//     return distance / time;
//   }
//   console.log(speed(10, 5));

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// function calWeight(mass, gravity = 9.81) {
//   let weight = mass * gravity;
//   return weight;
// }
// console.log(calWeight(10));

//12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// const temp = (c) => (F = (c * 9) / 5 + 32);
// console.log(temp(180));

//13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// const bmi = (w, h) => {
//   let a = w / h ** 2;
//   if (a < 18.5) {
//     return "Underweight";
//   } else if (a > 18.5 && a <= 24.9) {
//     return "Normal weight";
//   } else if (a > 24.9 && a <= 29.9) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// };
// console.log(bmi(69, 1.66));

//14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// function checkSeason(month) {
//     let lowerCase = month.toLowerCase();
//     let writeMonth = prompt("Enter month:")
//     if (lowerCase === "december" || lowerCase === "january" || lowerCase === "february") {
//         return "winter";
//     } else if (lowerCase === "march" || lowerCase === "april" || lowerCase === "may") {
//         return "spring";
//     } else if (lowerCase === "june" || lowerCase === "july" || lowerCase === "august") {
//         return "summer";
//     } else if (lowerCase === "september" || lowerCase === "october" || lowerCase === "november") {
//         return "autumn";
//     } else {
//         return "invalid month";
//     }
//   }

//15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
//   function findMax(a, b, c) {
//     let max = 0;
//     for(const elem of arguments) {
//        if (elem > max) max = elem;
//     } return max;
//  } console.log(findMax(2, 34, 4));

//Exercises: Level 2

//1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// function solveLinEquation(a, b, c) {
//   let x = (c - b) / a;
//   let y = (c - a * x) / b;
//   return { x: x, y: y };
// }
// console.log(solveLinEquation(5, 4, 6));

//2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// const solveQuadEquation = (a, b, c) => {
//   let d = b * b - 4 * a * c;
//   let x1 = 0;
//   let x2 = 0;
//   if (d >= 0) {
//     x1 = (-b + Math.sqrt(d)) / (2 * a);
//     x2 = (-b - Math.sqrt(d)) / (2 * a);
//   }
//   return [x1,x2];
// };
// console.log(solveQuadEquation()) // {0}
// console.log(solveQuadEquation(1, 4, 4)) // {-2}
// console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
// console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
// console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
// console.log(solveQuadEquation(1, -1, 0)) //{1, 0}

// let solveQuadEquation = (a, b, c) => {
//   let d = b * b - 4 * a * c;

//   if (d > 0) {
//     let x1 = (-b + Math.sqrt(d)) / (2 * a);
//     let x2 = (-b - Math.sqrt(d)) / (2 * a);
//     return [x1, x2];
//   } else if ((d = 0)) {
//     let x = -b / (2 * a);
//     return [x];
//   } else {
//     return [];
//   }
// };

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
//   person.nationality = 'Ethiopian'
//   person.country = 'Finland'
//   person.title = 'teacher'
//   person.skills.push('Meteor')
//   person.skills.push('SasS')
//   person.isMarried = true

//   person.getPersonInfo = function() {
//     let skillsWithoutLastSkill = this.skills
//       .splice(0, this.skills.length - 1)
//       .join(', ')
//     let lastSkill = this.skills.splice(this.skills.length - 1)[0]

//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
//   }
//   console.log(person)
//   console.log(person.getPersonInfo())

// const person = {
//   firstName: "Asabeneh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: ["HTML", "CSS", "JS"],
//   title: "teacher",
//   address: {
//     street: "Heitamienkatu 16",
//     pobox: 2002,
//     city: "Helsinki",
//   },
//   getPersonInfo: function () {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
//   },
// };

// //Object methods: Object.assign, Object.keys, Object.values, Object.entries
// //hasOwnProperty

// const copyPerson = Object.assign({}, person);
// console.log(copyPerson);
