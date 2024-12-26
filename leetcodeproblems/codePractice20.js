//filter string by length 

let arr = ["apple", "cat", "banana", "dog"] 
let length = 3

arr.forEach(element => {
    if(element.length === length){
        console.log(element)
    }
});