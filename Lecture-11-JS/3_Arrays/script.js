let arr=[1,2,3,4,5];

console.log(arr);
console.log("Length:",arr.length)

for(let i=0;i<arr.length;i++) {
    console.log(arr[i])//last me enter apne aap daal deta hai
}

let str='';
for(let i=0;i<arr.length;i++) {
    str+=arr[i]+' ';// Ek line me print karta hai 
}
console.log(str)
//command line se input le sakte hai bs JS ke andar
console.log(process.argv) 
let inp1=process.argv['2'];
let inp2=process.argv['3'];
let inp3=process.argv['4'];
console.log(inp1,inp2,inp3);