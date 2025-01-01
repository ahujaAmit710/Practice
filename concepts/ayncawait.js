
let p1 = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve(`Promise success p1`)    
    }, 5000);

})

let p2 = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve(`Promise success p2`)    
    }, 10000);

})


async  function handlePromise() {
    console.log('Hello')
    let val1 = await p1
    console.log(val1)

    let val2 = await p2
    console.log(val2)


    console.log('End of the program')

}

handlePromise()