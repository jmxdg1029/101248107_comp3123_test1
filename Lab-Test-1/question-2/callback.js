function success(){
    const p = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },500)
    });

    const delaySuccess = () => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }
    const delayedException = () => {
        let er = {'error': 'delayed exception'}
        console.log(er);
    }
    p
    .then(delaySuccess)
}

function exception(){
    const p = new Promise((resolve,reject) => {
        setTimeout(() => {
            reject();
        },500)
    });



    const delaySuccess = () => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }
    const delayedException = () => {
        let er = {'error': 'delayed exception'}
        console.log(er);
    }

    p
    .catch(delayedException)
}

    
success();
exception();
  
    


