
// 3). find unique numbers in sorted array

//Logic0--: 1)first we will compare first element to the next one 
// 2)if its equalt then do nothing just increase index of second compared value, if not then go inside if condition push the current value of array into new array. 
// 3) then give value of 2nd compared to the place of 1st element. 
// 4) then reapit process again untill array element over

let arr = [ 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8]

function uniqNum(arr) {
        let i = 0
        let j = 1
        let arr2=[]
        for (i; i < arr.length; i++) {
                if (arr[i] !== arr[j]) {
                        arr2.push(arr[i])
                        arr[i]=arr[j]
                }
                j++
        }

        return arr2
}
let a=uniqNum(arr)
console.log(a);
