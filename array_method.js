// toString, join, pop, push, shift, unshift,delete, concat, 
// sort, splice, slice, reverse, foreach, map, filter, reduce, Array.form, for-of, for-in 

// toString 
// let arr = [10,20,30];
// console.log(arr);
// console.log(typeof(arr.toString()))

// join 
// let arr = [10,20,30,40];
// console.log(typeof(arr.join("-")))

// Remove last element 
// let arr = [5,6,7,8]; 
// console.log(arr.length);
// let remove = arr.pop();
// console.log(remove);
// console.log(arr.length);
// pop() last element remove karta hai 

// Add element on the end 

// let arr = [1,2,3];
// let add = arr.push(4);

// console.log(add)
// console.log(arr)

// Remove first element 
//  let arr = [1,2,43,5];
//  let remove = arr.shift();

//  console.log(remove);
//  console.log(arr);

// Add first element 
//  let arr = [1,2,43,5];
//  let remove = arr.unshift(8);

//  console.log(remove);
//  console.log(arr);

// delete element 
// Array [7,8,9,10] me index 1 delete karna hai 

// let arr = [7,8,9,10];
// let del = delete arr[1];
// console.log(del);
// console.log(arr);
// console.log(arr.length);

// (Delete)element remove karta hai but array length same rehti hai 

// Merge two Array 
// Array [1,2] aur [3,4] ko meerge kro 

// let arr = [1,2];
// let arr2 = [3,4];
// console.log(arr.concat(arr2))

// array Sort an array 

// Array [9,5,34,2,1] ko sort kro 

// let arr = [9,5,6,2,1];
// let result = arr.sort()
// console.log(result);

// insert element using splice 
// array [1,2,5] me [3] aur [4] add karo 

// let arr = [1,2,5];
//  arr.splice(2,0,3,4)
// console.log(arr)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");

// console.log(fruits);


// using Map() in js 
// students array diya hai. har student ke marks me 5 bonus marks add karo using Map( )

let students = [
    {name : "Aman" , marks: 70},
    {name : "Riya" , marks: 80},
    {name : "Rahul" , marks: 90}
];
let result = students.map(student=>{
    return{
        name : student.name,
        marks : student.marks+5
    }
})

console.log(result);

