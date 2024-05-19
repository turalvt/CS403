const user = {
    firstName: "Tural" ,
    lastname: "Tenzilzade" , 
    age: "16" ,
    info: {
        address: "sulutepe" ,
        city: "baku" ,
         country: "aze" 
    },
    edu:  {
        uni: "bdrnk" ,
        point: "800" ,
    }, 
    work:  {
        company: "OSCAR" ,
        exper: "i dont need" 
    }

    
    }     

console.log(user.firstName);
console.log(user.lastname);
console.log(user.age);
console.log(user.info);
console.log(user.edu);
console.log(user.work);
console.log(user["first-name"]);
user.lastname = "zakirli"
console.log(user.lastname);

const newobj1 = {...user}
// const newobj1 = user
console.log(newobj1);
user.age = 89
console.log(newobj1);
console.log("user", user);
