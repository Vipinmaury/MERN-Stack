let lib2=require('./lib2');
// the require function is used to include and use modules 
// within your application. When you use require('./lib2'), it tells Node.js 
// to look for a file named lib2.js (or lib2.json, lib2.node, etc., based on the extensions) 
// in the current directory ('./' represents the current directory). If lib2.js exists in that location, 
// Node.js will load the module and make its exports (functions, objects, variables) available for use in your code.
console.log("Running lib1");
let a=10;

module.exports={
    a,
    lib2
}
//Module:-You can directly assign a value to module
//.exports to export that value as the entire module
module.exports={
    a,
    lib2
}