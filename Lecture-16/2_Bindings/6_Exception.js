function outerFun() {

    console.log("outer fun",this);



    function innerFun() {
        console.log("inner Fun",this);

    }
    innerFun();


}
let obj={
    a:1,
    b:2
}
outerFun.call(obj);