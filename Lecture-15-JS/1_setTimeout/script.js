let id=setTimeout(function(){
    console.log("hello world")
},5000); //jo id return karti hai wo number har baar unique hoti hai
console.log(id)//it give's number we can us this number
// clearTimeout(id);//ishka use karne se settimeout function kaam karna band kar dega 

setTimeout(function(){
    clearTimeout(id);
},6000);//hello world uppar output me aayega kyunki 6sec ho gaya hai agar ishme kaam kae denge to nahi chalega 

console.log("hey there");
//setTimeout ko rokne ke rokne ke liye hum settimout ko id me bhej 
//kar cleartimeout(id ) kar dete hai

