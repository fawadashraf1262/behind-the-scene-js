'use strict';
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       //   var millenial = true;
//       const firstName = 'Jawad';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       //   function add(a, b) {
//       //     return a + b;
//       //   }
//     }
//     // console.log(add(2, 8)); //this will not work when we enable strict mode
//   }
//   printAge();
//   console.log(firstName);
//   return age;
// }
// // console.log(millenial);
// // console.log(age);
// const firstName = 'Fawad';
// calcAge(1991);

// // Variable Hoisting
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Fawad';
// let job = 'developer';
// const year = 2000;

// //function hoisting

// // pitfall of hoisting

// if (!numProducts) {
//   deleteShopingCart();
// } else {
//   console.log('Not Deleted');
// }
// var numProducts = 10;

// function deleteShopingCart() {
//   console.log('All products are deleted');
// }

// var x = 3;
// const y = 9;

// console.log(x === window.x);
// console.log(y === window.y);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(2020);
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(2020);

// const fawad = {
//   year: 2000,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// fawad.calcAge();

const me = {
  name: 'Fawad',
  age: 23,
};
const friend = me;
friend.age = 24;
console.log(me, friend);
