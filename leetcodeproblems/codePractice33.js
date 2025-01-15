// Given an array of strings strs, return all the strings grouped by their 
// lengths in separate groups. Each group should contain strings of the same 
// length in any order.

let strs = ["apple", "bat", "cat", "tree", "flower", "bee"]

let map={}

strs.forEach((element)=>{

    const key = element.length
    if(!map[key]){
        map[key]=[]
    }
    map[key].push(element)
   
})
console.log(Object.values(map))