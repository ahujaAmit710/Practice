// console.log(2 - "Hello");
// console.log(typeof(2-"Hello"));
//  let ab = ""
//  console.log(ab || "aaaa");
// console.log({} == {})
//  const array = [];
//  array[10] = 0;
//  console.log(array)


let nums =[1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < 3; i++) {
   setTimeout(() => {
    console.log(i)
   }, 1000);
    
}

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
     console.log(i)
    }, 1000);
     
 }
