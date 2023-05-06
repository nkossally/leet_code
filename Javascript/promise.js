// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if(a === 2) {
//         resolve("Success")
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) =>{
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log("This is in the catch " + message)
// })

const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if(userLeft){
        errorCallback(
            {
                name: "User Watching Cat Meme",
                message: "like cats"
            }
        )
    } else {
        callback("Hey it worked")
    }
}

// watchTutorialCallback((message) => {
//     console.log("Success " + message)

// }, error =>{
//     console.log(error.name + " "  + error.message)
// })

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User left",
        message: "oh no",
      });
    } else if (userWatchingCatMeme) {
        reject({
            name: "User watching cat meme",
            message: "like cats",
          });
    } else {
      resolve("Hey it worked");
    }
  });
}

watchTutorialPromise((message) => {
    console.log("Success " + message)

}).catch((error) =>{
    console.log(error.name + " " + error.message)
})


const recordVideo1 = new Promise((resolve, reject) =>{
    resolve("Video 1 recorded")
})

const recordVideo2 = new Promise((resolve, reject) =>{
    resolve("Video 2 recorded")
})

const recordVideo3 = new Promise((resolve, reject) =>{
    resolve("Video 3 recorded")
})

Promise.all([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then(messages =>{
    console.log(messages)
})
Promise.race([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then(message =>{
    console.log(message)
})