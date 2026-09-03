// function FibonacciSeries(n){

//   let num1 = 0;
//   let num2 = 1;

//   let NextNum;
//   let i;

//   for(i=0; i<=n; i++){
    
//   }


// }
// let i;

// for(i=1; i<=5; i++){
//   console.log(i);
// }

// for ... of loop is used to directly get the value from iteration data like array and string

let names = "Piyush";
let last = "Koli";

for(let char of names + last){
  console.log("this is my Name Charactors" + " " + char);
  // console.log(char);
}

// for ... in loop is used to get keys or indexes  from object or array

let Employee = {

    name : "Aniket Hasda",
    age : 25,
    Job_profile : "Web Developer" 
}

for(let key in Employee){
  console.log(key + " : " + Employee[key]);
}