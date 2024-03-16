function fun() {
    console.log(x);//undefined
    var x=10;
    console.log(x);//output=10;
}
fun();

for(var i=0 ; i<10; i++) {

}
console.log(i);//output=10;
// console.log(x);out of scope 