let time = 0;

// setTimeout method
// only runs 1 time
setTimeout(() => {
    time += 2

    console.log('2 seconds have passed')
}, 2000);

// setInterval method
// runs multiple times until it is stopped
setInterval(function () {
    time += 2;

    console.log(time + ' seconds have passed')
}, 2000)

// clearInterval method
// stops when time is greater then 5 seconds
let timer = setInterval(function () {
    time += 2;

    console.log(time + ' seconds have passed')
    if (time > 5) {
        clearInterval(timer)
    }
}, 2000)

// returns directory name
console.log(__dirname)
// returns file name
console.log(__filename)