let obj={
    a: 1,
    b: 2,
    fun: function() {
        console.log("a",this.a);
        console.log("b",this.b);
        //adding another key 'c'
        this.c='Hello';
    }
}
//dot operator se call krne obj.fun() par function ke andar ka this 
//point karta hai "obj" object ko
obj.fun();
console.log(obj);