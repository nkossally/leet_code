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

// function watchTutorialCallback(callback, errorCallback) {
//     if(userLeft){
//         errorCallback(
//             {
//                 name: "User Watching Cat Meme",
//                 message: "like cats"
//             }
//         )
//     } else {
//         callback("Hey it worked")
//     }
// }

// watchTutorialCallback((message) => {
//     console.log("Success " + message)

// }, error =>{
//     console.log("error is" +  " " + error.name + " "  + error.message)
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
      resolve({ name: "Hey it worked", message: "ello" });
    }
  });
}

watchTutorialPromise()
  .then((message) => console.log("meow", message))
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

// const recordVideo1 = new Promise((resolve, reject) => {
//   resolve("Video 1 recorded");
// });

// const recordVideo2 = new Promise((resolve, reject) => {
//   resolve("Video 2 recorded");
// });

// const recordVideo3 = new Promise((resolve, reject) => {
//   resolve("Video 3 recorded");
// });

// Promise.all([
//     recordVideo1,
//     recordVideo2,
//     recordVideo3
// ]).then(messages =>{
//     console.log(messages)
// })
// Promise.race([
//     recordVideo1,
//     recordVideo2,
//     recordVideo3
// ]).then(message =>{
//     console.log(message)
// })

// const arrgg = [1, 2, 3, 4, "hey"];
// console.log(arrgg.find(elem => elem === 4))
// console.log(arrgg.find(elem => elem[0] === "h"))
// console.log(arrgg.find(elem => elem === 5))

// new Promise((resolveOuter) => {
//     resolveOuter(
//       new Promise((resolveInner) => {
//         setTimeout(resolveInner, 1000);
//       }),
//     );
//   });

// new Promise((resolveOuter) => {
//     resolveOuter(
//       new Promise((resolveInner) => {
//         setTimeout(() => resolveInner(console.log("pizza")), 2000);
//       }),
//     );
//   });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// const aThenable = {
//   then(onFulfilled, onRejected) {
//     onFulfilled({
//       // The thenable is fulfilled with another thenable
//       then(onFulfilled, onRejected) {
//         onFulfilled(console.log(42));
//       },
//     });
//   },
// };

// Promise.resolve(aThenable); // A promise fulfilled with 42

// const promiseWrapper = () => {
//   const rand = Math.floor(100 * Math.random());
//   console.log(rand);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (rand % 2 === 0) {
//         resolve("It's even!");
//       } else {
//         reject("It's odd");
//       }
//     }, 1000);
//   });
// };

// promiseWrapper()
//   .then((message) => {
//     console.log("success" + " " + message);
//   })
//   .catch((err) => {
//     console.log("oh no!" + " " + err);
//   });

// const wrapAroundTheWrap = async () => {
//   try {
//     const result = await promiseWrapper();
//     console.log("the success message is " + result);
//   } catch (err) {
//     console.log("the error is " + err);
//   }
// };

// wrapAroundTheWrap();

// const resolvedPromise = new Promise((resolve, reject) =>{
//   resolve("it worked!")
// })

// const rejecteddPromise = new Promise((resolve, reject) =>{
//   reject("it did not work!")
// })

// const rejecteddPromise2 = new Promise((resolve, reject) =>{
//   reject("the second did not work!")
// })

// Promise.race([
//   rejecteddPromise2,
//   rejecteddPromise,
//   resolvedPromise,
// ]).then(message =>{
//   console.log(message)
// }).catch(err =>{
//   console.log(err)
// })

// Promise.all([
//   rejecteddPromise2,
//   resolvedPromise,
//   rejecteddPromise
// ]).then(message =>{
//   console.log(message)
// }).catch(err =>{
//   console.log(err)
// })

// Promise.any([
//   rejecteddPromise2,
//   resolvedPromise,
//   rejecteddPromise
// ]).then(message =>{
//   console.log(message)
// }).catch(err =>{
//   console.log(err)
// })

const slowPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("slow promise resolved");
  }, 2000);
});

const fastPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("fast promise resolved");
  }, 1000);
});

Promise.all([fastPromise, slowPromise])
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log("error is " + err);
  });
