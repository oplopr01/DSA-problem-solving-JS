
// 8) check that if we do square of elements of first array then this squares are available at second array

let arr1 = [8, 2, 3, 4]
let arr2 = [4, 64, 9, 16]

const checkSquare = function () {
    for (let i = 0; i < arr1.length; i++) {
        let isSquare = false;
        let square1 = arr1[i] * arr1[i]
        for (let j = 0; j <= arr2.length; j++) {
            if (square1 === arr2[j]) {
                isSquare = true;
            }
            if (j === arr2.length - 1) {
                if (!isSquare) {
                    return false
                }
            }
        }
    }
    return true
}

let a = checkSquare(arr1, arr2)
console.log(a);
//Time complexity O(n^2)  