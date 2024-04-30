const fs =require('fs/promises');
const filepath=__dirname +'/database/data.json';

function getData(filepath) {
    return new Promise(async (resolve,reject)=> {
        try {
            let data=await fs.readFile(filepath);
        
            data=JSON.parse(data)
            //JSON.parse() method is used to convert a JSON string (which is typically read 
            //from a file using fs.readFile) into a JavaScript object.
            resolve(data);
        }
        catch(err) {
            reject(err);
        }

    })
}
 getData(filepath)
     .then((data)=> {
     console.log(data);
  })
  .catch((err)=> {
    console.log(err);
})