let body=document.querySelector('body');
let navBar=document.querySelector('.navBar');
console.log(body);


body.onscroll=(ev)=>{
    // console.log(ev)
    console.log(window.scrollY);
    console.log("Scroll");
    if(window.scrollY>300){
        navBar.style.backgroundColor = "orange";
    }
    else{
        navBar.style.backgroundColor = "green";
    }
}









// window.onscrollend = (ev)=>{
//     console.log("Hello")
// }