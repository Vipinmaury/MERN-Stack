// setTimeout(function() {
//     console.log("Mummy Maggi banado");
// },2000);

// setTimeout(function() {
//     console.log("Khud bana le ,mere liye bhi bana dena chai ke saath");
// },2000);

// setTimeout(function() {
//     console.log("Hatash hokar yuvk ne khud maggi nanayi");
// },2000);
//for thge solving this issues we use call back
function maggiLaao(cb) {
    console.log("Maggi lene chale gaye");
    setTimeout(function () {
        console.log("Maggi Lekar aa gaye");
        cb(maggiKhaao);
    }, 2000);
}

function maggiBanao(cb) {
    console.log("Maggi Banana start");
    setTimeout(function () {
        console.log("Maggi Bann gai");
        cb();
    }, 2000);
}

function maggiKhaao() {
    console.log("Maggi Khana start");
    setTimeout(function () {
        console.log("Maggi Khana Samapt");
    }, 2000);
}

maggiLaao(maggiBanao);