// // const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// // 1.Sum all the numbers in 'arr1'
// //sum=0 
//arr1.map((item) => sum+=item)
//console.log(sum);

// // 2.Add two numbers (10,88) to end of arr1 (push methods)
// arr1.push(10 , 88);
// console.log(arr1);

// // 3.Remove first two numbers from arr1
// arr1.splice(0, 2);

// // 4.Add three numbers (0,9,11) in front of arr1(unshift)
// // arr1.unshift(0,9,11);
// console.log(arr1);

// // 5.Remove four numbers in front of arr1(shift)
// arr1.shift;
// arr1.shift;
// arr1.shift;
// arr1.shift;

// // ////////////// TASK 7 //////////////
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// // 1.Console values from "Rufet" to "Fuad"
// console.log(arr2.slice(2, 8));

// //  2.Change Gulshen to Rovshen 
// const result = arr2.map(item=> item.replace('Gulshen', 'Rovshen'))

// //  3.Console each name with map


// // 4.Console only names which is Anar

// //  5.Console all names where name is Anar, then change it to "Perviz"


// //  6.Console last second value of arr2
// console.log(arr2[arr2.length - 2]);

// // 7.Console length of arr2
// console.log(arr2.length);

// /////////////////////////////TASK8///////////////////////////////////////////////////
// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// // // 1.Show only numbers
// console.log(arr3.filter(_ ,item => typeof item === "number"));

// // // 2.Show only true values
// console.log(arr3.filter(_, item => item === true));

// // // 3.Show only false values
// console.log(arr3.filter(_, item => item === false));

// // // 4.Show only strings
// console.log(arr3.filter(_, item => typeof item === "string"));


// // ////////////// TASK 8 //////////////
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// // // 1.Console (only even numbers)
// const evenNumbers = numbers.filter(number => number % 2 === 0);

// // // 2.Console (only odd numbers)
// const oddNumbers = numbers.filter(number => number % 2 !== 0);


// ////////////// TASK 9 ////////////////////////////////
// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// // 1.Console all values of arr4 -
// // if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// // Example: [10,'true',false]
// // Result: [20, "true is string", "false is falsy value"]
// //minLengthStr=1
// let updated = arr4.map((value) => {
//  if (typeof value === 'number'&&value!==0) {
//    return value + 10;
//  }else if (typeof value === 'string'&& value.length>=minLengthStr) { 
//    return value + " is string";
//  }else if( !value){
//    return value + " is falsy value";
//  }else {
//    return value + " is truthy"
//  }}); 
//console.log( updated);

// // 2.Sum all numbers of arr4
//sumInt=0
//arr4.filter((number)=>{
//    if( typeof number==="number"){
//        sumInt+=number
//    }
//});
//console.log(sumInt);

// // 3.Count only the values that are true
//console.log(arr4.filter((truthy)=>truthy ).length);

// // 4.Count only the values that are string
//console.log(arr4.filter((str)=>typeof str == 'string').length);

// // 5.Count only the values that are false
//console.log(arr4.filter((falsly)=>!falsly ).length);




// ////////////// TASK 10 //////////////
// // 1.Create a object add your name, surname, age and city.
// const objt = {
//     name :'tural',
//     surname:'tanzilzada',
//     age: '16',
//     city: 'baku'
// }
// objt.name = "John"
// console.log(objt.name);
// // 2.Then change name to "Jhon"

// const obj = {
//     email: 'ulfat@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Baku",
//             street: 'Nizami 22',
//             education: {
//                 "uni name": "ADNSU",
//             }
//         }
//     }
// }

// // // 3.Console gender
// console.log(obj.info.gender);
// // // 4.Console city
// console.log(obj.info.loc.city);
// ////////////// TASK 11 //////////////

// // let fullName = 'Ulfat Zakirli Rovshen'

// // 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// console.log(fullName.split(""));

// // 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
//
//fullName=fullName.split(" ")
//console.log(fullName);
//firstName=fullName[0]
//surName=fullName[1]
//fatherName=fullName[2]
//console.log(fullName[1],fullName[0],fullName[2]);
//
//replacedFullName=[fullName[1],fullName[0],fullName[2]]//next questions want array to me that is why i create this
//console.log(replacedFullName);

// // 3) Alinan yeni arrayi stringe cevirin(join)
//console.log(replacedFullName.join());

// // let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
//count=0
//arr.filter((numCount)=>{
//  if (numCount===5) {
//    count+=1
//  }
//})
//console.log(count);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
//sum=0
//arr.filter((numSum)=>sum+=numSum)
//console.log(sum);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

//console.log(arr.sort());//sort code is true for this situation
//count=0
//arr.filter((repeatedNumbers)=>{
//  if (repeatedNumbers) {
//  }
//})
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
//maxNum = Math.max(...arr)
//console.log(maxNum);
//countOfMax=0
//arr.filter((maxn)=>{
//  if (maxn===maxNum){
//    countOfMax+=1
//  }
//})
//console.log(countOfMax);


//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
//let myName="Elmir"
//nameLength=myName.length
//console.log(nameLength);
//console.log(arr.includes(nameLength));
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
///easiest option
//firstindex=[]
//arr.filter((first,index)=>{
//  if (first%3==2&& first !==2)  {
//    firstindex.push(index);
//  }
//});
//console.log(firstindex[0]);

//10) arraydaki en boyuk reqemin ilk indexini tapin
//max=0
//console.log(arr.filter((maxnum)=>{
//  if (maxnum>max){
//    max=maxnum
//  }
//}));
//console.log(max);
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//let  newArr=[]
//arr.map((numbers,index)=>{
//  if (numbers===4){
//    newArr.push(index)
//  }
//})
//console.log(newArr);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
//console.log(arr.indexOf(5));
//console.log(arr.lastIndexOf(5));
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin//suali basa dusmedim dusduyum kimi edirem

//let newArr=[]
//arr.filter((number)=>{
//  if (number>2) {
//    newArr.push(number)
// }
//})
//console.log(newArr);
//console.log(arr.length-newArr.length);
//14) 7 reqeminin indexleri cemini tapin.
//countIndex=0
//arr.filter((num)=>{
//  if (num===7) {
//    countIndex+=1
//  }
//})
//console.log(countIndex);


// ///////////// TASK 12//////////////

// let arr2 = [
//     {
//         name: 'test',
//         key: 1
//     },
//     {
//         name: 'task',
//         key: 2
//     },
//     {
//         name: 'tanqo',
//         key: 3
//     },
//     {
//         name: 'like',
//         key: 4
//     },
//     {
//         name: 'task',
//         key: 5
//     },
//     {
//         name: 'trust',
//         key: 6
//     },
//     {
//         name: 'test',
//         key: 7
//     },
//     {
//         name: 'last',
//         key: 8
//     },
//     {
//         name: 'tanqo',
//         key: 9
//     },
//     {
//         name: 'elephant',
//         key: 10
//     },
//     {
//         name: 'love',
//         key: 11
//     },
//     {
//         name: 'small',
//         key: 12
//     },
//     {
//         name: 'little',
//         key: 13
//     },
// ]


// QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.