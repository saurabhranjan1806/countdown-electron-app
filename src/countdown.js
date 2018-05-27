module.exports = countdown = (tick) => {
    let count = 10
    console.log('inside countdown.js outside loop')
    let timer = setInterval(() => {
        count--
        tick(count)
        console.log(count)
        if(count === 0){
            clearInterval(timer)
        }
    }, 1000)
}