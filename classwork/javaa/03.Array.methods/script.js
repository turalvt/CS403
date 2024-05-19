// let user = "tural"
// let user2 = "tural tenzilzade"
// // console.log(user.toUpperCase().slice(0,1) + user.slice(1))
// // console.log(user2.replaceAll("t" , "T" ));
// console.log(user.slice(0, 6).replace("t", "T") + user2.slice(6).replace("t", "T"));
// console.log(user2.replaceAll("t", "T"));
const students = [
{
    name: "Tural" ,
    age: 16,
    gender: "Male"
} , 
{
    name: "Elmir" ,
    age: 31 ,
    gender: "Male"
} , 
{
    name: "Aysu" ,
    age: 21 ,
    gender: "FeMale"
} , 
{
    name: "Isa" ,
    age: 18 ,
    gender: "Male"
} , 
{
    name: "Ferhad" ,
    age: 20 ,
    gender: "Kruohsan"
}  
] 
//1
console.log(students.map((student) => student.name));
//2
console.log(students.map((student) => student.age));
//3
console.log(students.map((student) => student.gender));
//4
console.log(students.filter((student) => student.age>= 20));
//5
console.log(students.filter((gender) => gender.gender === "FeMale"));
//6
console.log(students.filter((start)=> start.name.startsWith("E")));
//7
console.log(students.filter((inculudes) => inculudes.name.includes('a')));
//8
console.log(students.filter((odd) =>odd.age%2!=0));
//9
console.log(students.filter((even)=>even.age%2==0));
//10
console.log(students.map((_, index) => index));
//11
console.log(students.filter((item, even_index) => even_index.index % 2==0));
//12
let sum=0
console.log(students.map ((age)=> sum +age.age));
console.log(sum);
//13
// idex=(students.map((item ,index)=>index+=1));