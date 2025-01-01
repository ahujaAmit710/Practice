let array=[1,2,34,5,9,10];

let largestElement = 0
let secondLarge = 0
array.forEach(element =>{
    if(largestElement < element){
        largestElement =element
    }
})



console.log(array.sort((a,b) => a-b))


console.log(`largest element ${largestElement}`)
console.log(`second largest element ${array[array.length-2]}`)