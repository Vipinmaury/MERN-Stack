let body = document.querySelector('body');
let navBar = document.querySelector('.navBar');
 
function scrollKaFunction() {
    console.log("Scrolling")
}

window.addEventListener('scroll',debounce(scrollKaFunction,7000));

// window.addEventListener('Scroll',function)
function debounce(fun,delay) {
    let id;
    return function() {
        console.log("Clearing Interval",id);
        clearTimeout(id);
        id=setTimeout((id)=> {
            fun();

        },delay);
        console.log("New Interval id",id);
    }
}
