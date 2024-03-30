let movies=document.querySelectorAll('.movie');
let body=document.querySelector('body');

// movies.forEach((item) => {
//     item.style.color='yellow';
//     item.style.fontSize='30px';
//     item.style.backgroundColor='black';
//     item.style.listStyle='none';  

// })
let x=1;
setInterval(()=> {
    x=1-x;
    if(x) {
        body.style.backgroundColor='black';
        body.style.color='yellow';
    }
    else{
        body.style.backgroundColor='green';
        body.style.color='violet';
    }
    
},1000)



//SET INTERVAL KA USECASE
// let id=setInterval(()=>{
//     console.log("Hello");
// },1000)

// setTimeout(()=>{
//     clearInterval(id);
// },5000)