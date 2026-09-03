// (try) :- 
// is block me hum wo code likhte hain jahan error aane ka chance 
// js phale isko run karta hai 

// const { reject } = require("async");

// (catch):-
// agar (try) me error aa jaye to ye block run hota hai
// yahan hum error ko handle karta hain (message show, fallback, etc)

// try{
//     let result = 10 / undefinedVariable;
//     console.log(result);
// }catch(error){
//     console.log("Error: " + error.message);
// }

// example 

// function checkNumber(num) {
//     try {
//         if (isNaN(num)) {
//             throw "yah ek number nahi hai";
//         }
//         console.log("valid Number Hai", num);
//     } catch (error) {
//         console.log(error);
//     }
// }


// checkNumber(10);
// checkNumber("Hello");


// Promise kiya Hota hai 
// abhi nahi baad mein result milega -
// [yah voh Success hoga yah fail]

// example:- 
// order diya -> Pending 
// food mil gaya -> success 
// order cancel -> fail 

// js asynchronous language hai. mltb kuch kaam time lete hai jaise 
// api call 
// file load
// database call 
// in sabka result future mai aata hai

// callback function 
// getUser(function(user){
//     getOrder(user,function(order){
//         getPayment(order,function(payment){
//             console.log(payment);
//         })
//     })
// });


// code bahut messy ho jaata hai 
// read karne mai problem
// Debug karna tough 
// error handling confusing


// promise 

// getUser()
// .then(user=>getOrder(user))
// .then(order=>getPayment(order))
// .then(payment=>console.log("Failed Payment"),payment)
// .catch(err=>console.log(err));


// promise ka solution 

// function getUser(){
//     return new Promise((resolve ,  reject)=>{
//         setTimeout(()=>{
//             console.log("User Fetched");
//             resolve({id: 1, name: "Aniket"});
//         }, 1000);
//     });
// }

// function getOrder(user) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Order fetched for", user.name);
//             resolve({ orderId: 101, product: "Laptop" });
//         }, 2000);
//     });
// }

// function getPayment(order) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Payment details fetched");
//             resolve({ status: "Paid", amount: 50000 });
//         }, 3000);
//     });
// }

// getUser()
// .then(user => getOrder(user))
// .then(order => getPayment(order))
// .then(payment => console.log("Final Payment:", payment))
// .catch(err => console.log(err));



// Step 1: Get User
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ User fetched");
            resolve({ id: 1, name: "Aniket" });
        }, 1000);
    });
}


// Step 2: Get Order
function getOrder(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!user) {
                reject("❌ No user found");
            } else {
                console.log("📦 Order fetched for:", user.name);
                resolve({ orderId: 101, product: "Laptop" });
            }
        }, 1000);
    });
}


// Step 3: Get Payment
function getPayment(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!order) {
                reject("❌ No order found");
            } else {
                console.log("💳 Payment details fetched");
                resolve({ status: "Paid", amount: 50000 });
            }
        }, 1000);
    });   
}


// Final Flow (Promise Chaining)
getUser()
    .then(user => {
        return getOrder(user);
    })
    .then(order => {
        return getPayment(order);
    })       
    .then(payment => {
        console.log("Final Payment:", payment);
    })
         