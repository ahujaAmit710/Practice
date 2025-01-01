// Given the head of a sorted linked list, delete all duplicates 
// so that each element appears only once. Return the linked list's modified head.

// nums = [1, 1, 2, 3, 3]

// [1, 2, 3]
let nume= [1, 1, 2, 3, 3];

let filterArray =[]

nume.forEach(elements =>{
    
    if(!filterArray.includes(elements)){
        filterArray.push(elements)
    }
})

console.log(filterArray)