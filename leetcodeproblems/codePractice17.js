for (let i = 0; i < 3; i++) {
   setTimeout(() => {
        console.log("i",i)
   }, 100);
}

for (var j = 0; j < 3; j++) {
    setTimeout(() => {
         console.log(j)
    },0);
 }