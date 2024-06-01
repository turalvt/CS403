// const students = ['Ibrahim', 'Aysu', 'Tural', '9', 0, true, undefined, 'Isa', 'Elmir', 'Ferhad', 'Ramil']
// //1. Loop values of stuents (for)
// // for (let i = 0; i < students.length; i++) {
// //     const text = students[i];
// // }

// //2. LOop values of students (for_of)
// // let text = ""
// // for (let x of students) {
// //     text += x;
// // }

// //3. Loop only string values of students (for)
// // for (let i = 0; i < students.length ; i++) {
// //     typeof students [i] === 'string'
// // }

// //4. loop only number values of students (For_of)
// for (const onlyNum of students) {
//     if (typeof onlyNum=="number") {
//         console.log(onlyNum);
//     }
    
// }


// //5. loop only treu values of students (for)
// // for (let i = 0; i < students.length ; i++) {
// //     typeof students [i] === 'true'
// // }

// const numbers=[4,7,8,12,22,9,12]
// //6. loop only even values of numbers (for)
// // for (let i = 0; i < numbers.length; i++) {
// //   if (numbers[i] % 2 === 0) {
// //     console.log(numbers[i]);
// //   }
// // }

// //7 . loop only odd values of numbers (for_of)
// // for (const number of numbers) {
// //   if (number % 2 !== 0) {
// //     console.log(number);
// //   }
// // }

// //8. sum values of numbers (for)
// // let sum = 0;
// // for (let i = 0; i < numbers.length; i++) {
// //   sum += numbers[i];
// // }

// //9.Mult values of nummber(for_of)
// // let product = 1;
// // for (const number of numbers) {
// //   product *= number;
// // }

// // 10.Show all values except 12 (for/continue)
// // for (let i = 0; i < numbers.length; i++) {
// //   if (numbers[i] === 12) { continue;
// //   }
// // }
// //   console.log(numbers[i]);
// // 11.Sum values of numbers (reduce)

// const users = [
//     {
//         id: 1,
//         name: 'Isa',
//         age: 19,
//         gender: 'male'
//     },
//     {
//         id: 2,
//         name: 'Aysu',
//         age: 20,
//         gender: 'female'
//     },
//     {
//         id: 4,
//         name: 'Ramil',
//         age: 13,
//         gender: 'male'
//     },
//     {
//         id: 5,
//         name: 'Tural',
//         age: 33,
//         gender: 'male'
//     },
//     {
//         id: 6,
//         name: 'Ayxan',
//         age: 25,
//         gender: 'male'
//     },
// ];

// // const totalNum = users.reduce((sum, user) => sum + user.age + user.id, 0);
// // 12.Sum age of users (reduce)
// // const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// // 13.Mult age of users (reduce)

// const user = {
//     id: 1,
//     name: 'Elnur',
//     surname: 'Elnurlu',
//     age: 19
// };

// const agePro = user.age;
// // 14.Console keys of user(for_in)
// const user = {
//     id: 1,
//     name: 'Elnur',
//     surname: 'Elnurlu',
//     age: 19
// };

// for (let key in user) {
//     console.log(key);
// 31


// // 15.Console values of user(for_in)
// const user = {
//     id: 1,
//     name: 'Elnur',
//     surname: 'Elnurlu',
//     age: 19
// };

// for (let key in user) {
//     console.log(key);
// }
