const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hey!')
        } else {
            reject('whooops!')
        }
    });
}

somethingWillHappen()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('hey 2!');
            }, 2000);
        } else {
            const error = new Error('whooops 2!')
            reject(error)
        }
    });
}

somethingWillHappen2()
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.error(error)
    });

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.error(error)
    });