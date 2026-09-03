// Normal Functions 
// function add(a,b){
//     return a+b;
// }
// let result = add(10,50);
// console.log(result);


// Arrow function 
// const multi = (c,d) => c*d;
// console.log(multi(2,4));

// js Map Function 
// javascript me Map() ek special Object hota hai joo data ko key-value pair mai store karta hai  

// new Map () :- ek naya Map Object Create karta hai 

// set():- key aur value store karta hai (yah Method Map me data Add karne ke liye use Hota hai) 

// let user = new Map();

// user.set("Name","Aniket");
// user.set("age",25);

// console.log(user);

// get() :- yeh method Map se value nikale ke kaam liye use hota hai 

// let person = new Map();

// person.set("Name","Aniket");
// person.set("age",25);

// console.log(person.get("Name"));

// has() :- yeh check karta hai ke key exist karta hai yah nahi  

// let person = new Map();

// person.set("Name","Aniket");
// person.set("age",25);

// console.log(person.has("Name"));

// delete() :- yeh Map() se Specific Key delete karta hai 

// let user = new Map();
// user.set("name", "Aniket");
// user.set("age",35);
// user.set("city","Delhi");

// console.log(user.delete("name"))
// console.log(user)


// Ques :- Even Number  find karo 
 
// normal 
// let numbers = [1,2,3,4,5,6];

// let even = numbers.filter(num => num % 2 === 0);
// console.log(even);

let even = numbers.map(num =>{
    if(num % 2===0){
        return num;
    }
})

console.log(even)
