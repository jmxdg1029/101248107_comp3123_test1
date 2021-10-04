function lowerCaseWords(arr){
    new Promise(function(resolve,reject){
        if(arr){
            const res = arr.filter(el => typeof el === 'string')
            const lower = res.map(res => res.toLowerCase())
             console.log(lower)
            return resolve('success')
        }
        else
            return reject('failed')
    })
    
    
    
    
}

const mixedArray = ['PIZZA',10,true,25,false,'Wings']
console.log(lowerCaseWords(mixedArray));


