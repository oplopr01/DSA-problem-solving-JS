
// 2)  checking if strings are anagram
//   ajay->jaay  it is anagram. "ayyj" it is not

// logic to check->  first chck the length, if length not same then it is not possible,second will chek that 2nd word contains equal number of each leters as first has
// jistne bhi char hai str1 me unko key ke place me obj bna ke or pure string jitne bar wo aye hai use "value" ki trha obj me add kiye, fir
// same thing second str ke liye krrnge, but reverse, str2 se jitne char match hoti jayegi utni "value" decrease krte jayenge

function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return "length is not equal so cant be Anagram strings"
    }
    let counter = {}  // created empty obj
    for (let letter of str1) {  // iterating through each char of str1
        counter[letter] = (counter[letter] || 0) + 1  // assigning key and value both in counter obj, || this sign assigning 0 where if found "undefined"
    }

    for (let letter2 of str2) {
        if (!counter[letter2]) {  // inside paranthisis checking if obj has letter2 or not if not then run code inside if statement
            return "one letter in str2 has come more times then str1 has"
        }
        //if yes then decrease the values which key is matching from str2
        counter[letter2] = (counter[letter2] || 0) - 1
    }
    return "these strings are Anagram strings"
}

let a = isAnagram("hello", "lelhl")
console.log(a);

// -------------- Another way to Solve this problem ------------\\

function isAnagram(string1, string2) {
    let sortedStr1 = string1.split("").sort().join("")
    let sortedStr2 = string2.split("").sort().join("")

    return sortedStr1 === sortedStr2;

}

let string1 = "hello"
let string2 = "elloo"

let result = isAnagram(string1, string2)
if (result) {
    console.log("It's Anagram")
}
else {
    console.log("its not an anagram string");

}
