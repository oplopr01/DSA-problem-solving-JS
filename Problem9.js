// 9) recurssion explaination:-  when function call itself we call it recurssion!

// rules:- when we call recurssion we should allways give a conditional statement inside this function to prevent fro infinite loop/calling.
let counter=0;
function dem(n){
    if(counter>=n){   //created conditional block to prevent infinite loop
        return;     //it will breack execution
    }
    counter++;  // increamenting counters value per function calling
    console.log("functoion called "+ counter+ "times");

    dem(n); // recurssion calling
}
dem(10);  // calling function from outside 