//John Michael De Guzman 
//101248107
const fs = require('fs');
let path = require('path')

if(!fs.existsSync('./logs')){
    fs.mkdirSync('./logs');
};

function createLog(){
        for (let i = 0; i < 10; i++){
            fs.writeFile(path.join(`./logs`,`logs${i}.txt`), `Log ${i} creates`, function (err){
                if (err) throw err;
                console.log(`log${i}.txt`)
            })
        }
    
}

createLog();

function deleteLog(){
    setTimeout(() => {
        for (let i = 0; i <10; i++){
            fs.unlink(path.join(`./logs`,`logs${i}.txt`), function(err){
                if (err) throw err;
                console.log(`delete files....log${i}.txt`)
            })
        }
    },1000)
}

deleteLog();