function outerFun (){
    //inner functions create kia hai
    function innerFun(){
        console.log("Inside Inner Fun");
        //function kenandar se kuchh na karne par it return undefined by default
    }
    return innerFun;
    // return innerFun();
}
  let f=outerFun();
  console.log(f)
  f();


function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function merafunction(add,sub) {
    console.log(add(10,20));
    console.log(subtract(30,20));
}

//The below given both operation is valid
//(1)meraFunction(add,subtract);
merafunction(function add(a,b) {//(2)
    return a+b;
}, function subtract(a,b) {
    return a-b;
});
//where we can pass our function and return our function  is called higher order function