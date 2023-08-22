
// -----------------------------------------------------------------------

// 1)  checking if sum zero of any pair
// input -> [-5, -4, -3, -2, 0, 2, 4, 6, 8]

// let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8]


                //-- straight forward Solution ---\\
// this solution comes under Big 'O' natation time complexity and Quadratic time o(n^2)
// which is wrost condition

// for(let i=0; i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         let sum = arr[i]+arr[j]
//         if(sum==0){
//             console.log(`sum of index ${i} & index ${j} is zero`)
//         }
//     }
// }



            //-- little optimized Solution ---\\
//-- process is-: we will add left most and right most element of arr if value of sum is 
//  positive then will decrease the index of rightmost now again sum it if value of sum will
//  be negative then we will move to the next leftmost element and make sum with right most
//  and so on..  


// function sum1(arr) {

//     let leftCount = 0
//     let rightCount = arr.length - 1;
//     while (leftCount < rightCount) {

//         let sum = arr[leftCount] + arr[rightCount]
//         if (sum === 0) {
//             return [arr[leftCount], arr[rightCount]]

//         }
//         else if (sum > 0) {
//             rightCount--
//         }
//         else {
//             leftCount++
//         }
//     }
// }
// console.log(sum1(arr));




//------------------------------------------------------------------------------\\

// 2) string Anagram