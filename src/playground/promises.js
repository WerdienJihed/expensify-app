const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('somthing went wrong ! ');
    }, 3000)
});

console.log("before");

promise.then((data) => {
    console.log("1", data);
}).catch((error) => {
    console.log("error:", error);
})

console.log("after"); 