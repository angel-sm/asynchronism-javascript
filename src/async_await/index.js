const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        true 
        ? setTimeout(() => {
            resolve('Do something')
        }, 3000)
        : reject(new Error('Error doing something'))
    });
}

const doSomething = async () => {
    const response = await doSomethingAsync();
    console.log(response);
}

console.log('before')
doSomething()
console.log('after');