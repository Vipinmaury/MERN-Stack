//Let's create a function to add 1 second of delay..
//endTime - startTime >= 1sec
function delayOneSec() {
    let currentTime=new Date().getTime();

    while(new Date().getTime() - currentTime<1000) {

    }
}
// delayOneSec();//one second delay
//for n second delay
function delayNsec(n) {
    for(let i=0;i<n;i++) {
        delayOneSec();
    }
}
delayNsec(5);
console.log("hello world")

