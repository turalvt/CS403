const arr1 = [5, 8, 2, 11, 9]
const arr2 = [ 50, 8, 25, 12, 9]

// // 1calcMult of arrays in fuction
// function calcAvg(anyarr){
//     let sum = 0
//     anyarr.map(item => sum += item)
//     return sum
// }
// console.log(calcAvg(arr1));
// console.log(calcAvg(arr2));



const users = [
    {
        id: 1,
        name: 'Isa',
        age: 19,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Aysu',
        age: 20,
        gender: 'female'
    },
    {
        id: 4,
        name: 'Ramil',
        age: 30,
        gender: 'male'
    },
]

// 2. get only odd values

function getOddValues(arr) {
    return arr.filter(index => index % 2 !== 0);
}

console.log(getOddValues(arr1)); 
console.log(getOddValues(arr2)); 

//3. get only even value
function getEvenValues(arr) {
    return arr.filter(index => index % 2 == 0);
}

console.log(getEvenValues(arr1)); 
console.log(getEvenValues(arr2)); 

// 4. write function that return name of users
function getNames(users) {
    return users.map(user => user.name);
}
console.log(getNames(users));

// 5. Write a function that returns the genders of the users
function getGenders(users) {
    return users.map(user => user.gender);
}

console.log(getGenders(users));
//6. write function that return age of users
function getAge(users){
    return users.map(user => user.age)
}
console.log(getAge(users));
// 7 write function that return age of users
function getMale(users){
    return users.map(user => user.gender)
}
console.log(getMale(users));
// 8.write function that return users whose age is greater than 20 
function get20Age(users, age) {
    return users.filter(user => user.age > age);
}

console.log(get20Age(users, 20)); 

// // 9. Write a function that takes firstName, lastName, and age as parameters and prints them
// //  give these values to function(age can be empty,give default value)

function getValue(firstName, lastName, age = '---') {
    return firstName + ' ' + lastName, age
}
 //