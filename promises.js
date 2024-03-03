// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is  complete')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise is consumed')
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject({username: "lokesh sharma" , email: "iamlokeshsharmaa@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })



// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "loeksh",password: "1245"})
//         } else {
//             reject ('Error, something went wrong')
//         }
//     },1000)
// })

// promisefour.then(function(user){
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// })


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javaScript", password: "1234"})
        } else {
            reject('ERROR, something went wrong')
        }
    },1000)
})


async function consumePromiseFive(){

    try {
        const response = await promiseFive()
        console.log(response)
    } catch (Errror){
        console.log(Errror)
    }
}

consumePromiseFive()