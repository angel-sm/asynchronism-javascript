const sum = (a, b) => a + b;

const calc = (num1, num2, callback) => {
    return callback(num1, num2);
}

console.log(calc(5, 5, sum));

const date = (callback) => {
    console.log(new Date());
    setTimeout(() => {
        let date = new Date;
        callback(date)
    }, 3000)
}

const printDate = (dateNow) => console.log(dateNow);
  
date(printDate)