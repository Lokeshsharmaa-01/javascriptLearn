// const promiseOne = new Promise(function (resolve,reject){
//     console.log("async one is complete")
//     resolve()
// })

// promiseOne.then(function(){
//     console.log('abhi hum chalte hain')
// })


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async 2 task')
        resolve();
    })
}).then(function(){
    console.log("ho gya itni jaldi")
})
