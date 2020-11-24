const a = 1
const b = 1

function sync(){
    console.log('sync')
}

function async(){
    console.log('async')
}


setTimeout(async, 500)

sync()