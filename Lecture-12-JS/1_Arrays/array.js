var arr=[1,2,3,4,"Hello",true,1.11]
console.log(arr)

arr.unshift("Valentine");

console.log(arr);
arr.shift();
console.log(arr);

arr.push("Basant Panchami");
console.log(arr);
arr.pop();
console.log(arr);

//for of loop
for(let el of arr) {
    console.log(el);
}

//searching key
let indx=arr.indexOf("Hello");
console.log("index:",indx);
