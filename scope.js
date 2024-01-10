// //scope.js
// a = "JavaScript"; // is a global scope it will be found anywhere in this file
// b = 10; // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b); // JavaScript 10, accessible
//   if (true) {
//     let a = "Python";
//     let b = 100;
//     console.log(a, b); // Python 100
//   }
//   console.log(a, b);
// }
// letsLearnScope();
// console.log(a, b); // JavaScript 10, accessible

//scope.js
// let a = "JavaScript"; // is a global scope it will be found anywhere in this file
// let b = 10; // is a global scope it will be found anywhere in this file
// // Function scope
// function letsLearnScope() {
//   console.log(a, b); // JavaScript 10, accessible
//   let value = false;
//   // block scope
//   if (true) {
//     // we can access from the function and outside the function but
//     // variables declared inside the if will not be accessed outside the if block
//     let a = "Python";
//     let b = 20;
//     let c = 30;
//     let d = 40;
//     value = !value;
//     console.log(a, b, c, value); // Python 20 30 true
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, value); // JavaScript 10 true
// }
// letsLearnScope();
// console.log(a, b); // JavaScript 10, accessible

// //scope.js
// function letsLearnScope() {
//   var gravity = 9.81;
//   console.log(gravity);
// }
// console.log(gravity); //Uncaught ReferenceError: gravity is not defined

// if (true) {
//   var gravity = 9.81;
//   console.log(gravity); // 9.81
// }
// console.log(gravity); // 9.81

// for (var i = 0; i < 3; i++) {
//   console.log(i); // 0, 1, 2
// }
// console.log(i); // 3

//object
// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   isMarried: true,
// };
// console.log(person);

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
//       return `${this.firstName}${this.lastName}`
//     },
//     'phone number': '+3584545454545' // neden phone number tırnak içinde yazıldı, dikkat edelim.
//   }

//   console.log(person['phone number'])

// let a = "ali";
// let b = 20;

// function call() {
//   let a = "veli";
//   let b = 21;
//   console.log(a, b);

//   if (true) {
//     let a = "Python";
//     let b = 20;
//     let c = 30;
//     let d = 40;
//     value = true;
//     console.log(a, b, c, d, value);
//   }
//   console.log(a, b);
// }
// call();
// console.log(a, b);

// function letsLearnScope() {
//   let gravity = 9.81;
//   console.log(gravity);
// }
// console.log(gravity);

// if (true){
//     var gravity = 9.81
//     console.log(gravity) // 9.81
//   }
//   console.log(gravity)  // 9.81

// for (var i = 0; i < 3; i++) {
//   console.log(i); // 0, 1, 2
// }
// console.log(i); // 3

// if (i == 3) {
//   console.log(i);
// }

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   isMarried: true,
// };
// console.log(person);

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullName: function () {
//     return `${this.firstName}${this.lastName}`;
//   },
//   "phone number": "+3584545454545",
// };

// const person = {
//   firstName: "Seda",
// };

// console.log(typeof firstName);

// let keyName = "firstName";
// console.log(person[keyName]);

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// person.nationality = "Ethiopian";
// person.country = "Finland";
// person.title = "teacher";
// person.skills.push("Meteor");
// person.skills.push("SasS");
// person.isMarried = true;

// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(", ");
//   console.log(skillsWithoutLastSkill);

//   let lastSkill = this.skills.splice(this.skills.length - 1)[0];
//   console.log(lastSkill);

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
//   return statement;
// };
// console.log(person)
// console.log(person.getPersonInfo());

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

// const a = {
//   isim: "Ali",
//   yas: 25,
//   ulke: "Turkey",
// };

// Object methods: Object.assign, Object.keys, Object.values, Object.entries
// hasOwnProperty

// const copyPerson = Object.assign({}, person, a);
// console.log(copyPerson);
// console.log(Object.keys(person));
// console.log(Object.keys(copyPerson));
// console.log(Object.values(person));
// console.log(Object.values(copyPerson));
// console.log(Object.entries(person));
// console.log(Object.entries(copyPerson));
// console.log(copyPerson.hasOwnProperty('firstName'))
// console.log(copyPerson.hasOwnProperty('score'))

//Exercises: Level 1
//3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// const dog = {
//   name: "Buddy",
//   legs: 4,
//   color: "white",
//   age: 4,
//   bark: function () {
//     return "woof woof";
//   },
// };

// console.log(dog.bark());

// Exercises: Level 2
// 1.Find the person who has many skills in the users object.

// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// let max = 0;
// let person = " ";
// for (const name in users) {
//   let count = users[name].skills.length;
//   if (count > max) {
//     max = users[name].skills.length;
//     person = name;
//   }
// }

// console.log(person);

//2.Count logged in users, count users having greater than equal to 50 points from the following object.

// let log_count = 0;
// let point_count = 0;
// for (const user in users) {
//   if (users[user].isLoggedIn === true) {
//     log_count++;
//   }
//   if (users[user].points >= 50) {
//     point_count++;
//   }
// }
// console.log(log_count, point_count);

//Exercises: Level 3

//3.The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// const users = [
//   {
//     _id: "ab12ex",
//     username: "Alex",
//     email: "alex@alex.com",
//     password: "123123",
//     createdAt: "08/01/2020 9:00 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "fg12cy",
//     username: "Asab",
//     email: "asab@asab.com",
//     password: "123456",
//     createdAt: "08/01/2020 9:30 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "zwf8md",
//     username: "Brook",
//     email: "brook@brook.com",
//     password: "123111",
//     createdAt: "08/01/2020 9:45 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "eefamr",
//     username: "Martha",
//     email: "martha@martha.com",
//     password: "123222",
//     createdAt: "08/01/2020 9:50 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "ghderc",
//     username: "Thomas",
//     email: "thomas@thomas.com",
//     password: "123333",
//     createdAt: "08/01/2020 10:00 AM",
//     isLoggedIn: false,
//   },
// ];

// const products = [
//   {
//     _id: "eedfcf",
//     name: "mobile phone",
//     description: "Huawei Honor",
//     price: 200,
//     ratings: [
//       { userId: "fg12cy", rate: 5 },
//       { userId: "zwf8md", rate: 4.5 },
//     ],
//     likes: [],
//   },
//   {
//     _id: "aegfal",
//     name: "Laptop",
//     description: "MacPro: System Darwin",
//     price: 2500,
//     ratings: [],
//     likes: ["fg12cy"],
//   },
//   {
//     _id: "hedfcg",
//     name: "TV",
//     description: "Smart TV:Procaster",
//     price: 400,
//     ratings: [{ userId: "fg12cy", rate: 5 }],
//     likes: ["fg12cy"],
//   },
// ];

//eksik çözümlü kodlar
// let bool = true;
// let user_id = prompt("Enter your id: ");
// function contid(user_id) {
//   for (const property of users) {
//     if (property._id == user_id) {
//       bool = true;
//       break;
//     }
//   }
//   if (bool) {
//     return `the user that he has already an account`;
//   } else {
//     let a = {};
//     a._id = user_id;
//     let name = prompt("enter your name");
//     a.username = name;
//     users.push(a);
//     return users;
//   }
// }
// console.log(contid(user_id));



//tam çözümlü kodlar
// let user_id = prompt("Enter your id: ");
// function contid(user_id) {
//   let bool = false;
//   for (const property of users) {
//     if (property._id === user_id) {
//       bool = true;
//       break;
//     }
//   }
//   if (bool) {
//     return `The user already has an account`;
//   } else {
//     let a = {};
//     a._id = user_id;
//     let name = prompt("Enter your name");
//     a.username = name;
//     users.push(a);
//     return users;
//   }
// }
// console.log(contid(user_id));


// let user_id = prompt("Enter your id: ");
// function signUp(user_id) {
//     for(let i = 0; i < users.length; i++) {
//         if(users[i]._id === user_id) {
//             return 'User already has an account'
//         }
//     }
//     const user_name = prompt('Please enter name')
//     const user_email = prompt('Please enter your email')
//     const user_password = prompt('Please enter password')
//     const user_createdAt = ${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}
//     const user = {}
//     user._id = user_id
//     user.username = user_name
//     user.email = user_email
//     user.password = user_password
//     user.createdAt = user_createdAt
//     user.isLoggedIn = true

//     users.push(user)

//     return 'User added successfully.'
// }

// console.log(signUp(user_id))
// console.log(users)