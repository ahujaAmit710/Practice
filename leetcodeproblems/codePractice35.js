// Word Frequency

// Problem: Given a file of words, count the frequency of each word.
// Example Input: "word word example test example"
// Expected Output: { word: 2, example: 2, test: 1 }
// Practice frequency counts with objects.

let array = "word word example test example".split(' ')

let object ={}

array.forEach((element)=>{
    if(!object[element]){
        object[element] = 1
    }
    else
    {
        object[element] = object[element] + 1 
    }
    
})
console.log(object)