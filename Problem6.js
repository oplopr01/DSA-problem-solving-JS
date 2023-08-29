
//6) count largest sum of consecutive Digits 
//bundel=4

function findLargest(arr, bundel){

    if(bundel>arr.length){
            throw new Error("bundel should not be greater then array")
    }
    else{
            let max=0
            // first loop to find from which index we wil start bundeling of sub bundel
            for(let i=0;i<arr.length-bundel+1;i++){  //after analyzing array we figure out formula that how many iterations will be accure
                    let tmp=0
                //second loop is to create sub bundels from the found array
                    for(let j=0;j<bundel;j++){
                        // yha arr me "j" ke sath i is liye le rhe kyuki "i" jo hai wo bundels ka starting value hoga or har sub bundel me change hote jayega. so agr hm bas "i" ko len to result galt aa jayega 
                            tmp= tmp+arr[j+i]
                    }
                   if(tmp>max){
                    max=tmp
                   }
            }
            return max
    }
}
let arr=[2,4,5,8,1]
let result=findLargest(arr,bundel=3)
console.log(result);
