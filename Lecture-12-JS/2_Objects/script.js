let obj={
    a:1,
    "Hello World":"Earth",
    "":"Empty String",
    " ":"Space",
    "hello":"Kya haal chal hai bhai"
};
console.log(obj.a);
console.log(obj["Hello World"]);
console.log(obj.hello);
//for of loop
for(let k in obj) {
    console.log(obj[k]);
}
