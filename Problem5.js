
// 5) count the uniqe elementsin a sorted array

let arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8]

function uniqNum(arr) {
        if (arr.length) {
                let i = 0
                let j = 1
                for (j; j < arr.length; j++) {
                        if (arr[i] !== arr[j]) {
                                i++
                                arr[i] = arr[j]
                        }
                }

                return i+1
        }
        else{
                throw new Error("Array is empty")
        }
}

let a = uniqNum(arr)
console.log(a);
