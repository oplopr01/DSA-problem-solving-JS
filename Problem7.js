
// 7) Devide and conquerer Technique [Binary searching]

// find the index of given number in a sorted array => num is 7
// steps:-  binary searching matlb sidhe minIndex + maxIndex)/2  isse hame center ki value mil jayegi ab is value ko apne number se compare krenge or fir aage logic likhenge



//what will we do in binary searchi8hng-: array ka midIndex find krenge "minIndex and maxIndex" k sum ko 2 se devide krke, mile hue midIndex k value ko num jo check kr rhe hai usse compare kreneg, agr num badi ho to array me ab minIndex ko midIndex+1 kr leneg kyuki(agr num bada hai matlb jo mid value ham log find kiye number array me uske right side hogi so ham midIndex ke bad ke values me hi compare kreneg)  same agr num midIndex value se chota ho to mid ke left side ke array me comparison chalega bas so min to wahi index rhega lekin maxIndex midIndex-1 ho jayega| yahi same process chlega jab tak apne ko num nhi mil jata

// time complexity yha linear O(n) hogi kyuki ek hi while loop chla rhe

 arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

function binSearch(arr, num){
        let min =0
        let max=arr.length-1
        while(min<=max){
                let midIndex= Math.floor((min+max)/2)
                if(arr[midIndex]<num){
                        min=midIndex+1
                }

                else if(arr[midIndex]>num){
                        max= midIndex-1
                }

                else{
                        return midIndex
                }


        // return -1
                
        }
}

let a= binSearch(arr, 14)
console.log("index of number is: "+a);