let id=setTimeout(function(){
    console.log("hello world")
},5000,setTimeout(function(){
    clearTimeout(id);
},6000)); 

