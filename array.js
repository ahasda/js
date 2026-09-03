
// let student =[ ["david",80], ["vinoth",77],["divya",88],["ishitha",95], ["thomas",68] ];
// let arr = [80,77,88,95,68];

// let m = arr.join("-");
// console.log(m)
// console.log(arr)
let arr = [2, 3, 10, 6, 4, 8, 1];
// function maxDifference(arr) {
//     let minElement = arr[0];
//     let maxDiff = arr[1] - arr[0];

//     for (let i = 1; i < arr.length; i++) {
        

//         let currentDiff = arr[i] - minElement;
        
        
//         if (currentDiff > maxDiff) {
//             maxDiff = currentDiff;
//         }

      
//     }

//     return maxDiff;
// }

// console.log(maxDifference(arr));


let text = "Hello";
 let reverse = " ";

 for(let i = text.length -1; i >= 0; i--){
    reverse = reverse+text[i];
 }

 console.log(reverse)