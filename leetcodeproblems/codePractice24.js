console.log("Hello")


setTimeout(() => {
    console.log("Time Out")
}, 0);


let myPromise = new Promise(function(myResolve, myReject) {
    console.log("Promise")
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
 
console.log("End")