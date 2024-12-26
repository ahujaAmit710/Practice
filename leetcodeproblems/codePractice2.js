// Input: [1, [2, [3, [4]], 5]]
// Output: [1, 2, 3, 4, 5]

let nestedArray =[1, [2, [3, [4]], 5]];

function flattenArray(nestedArray) {
let array =[]
nestedArray.forEach(element => {
    if(Array.isArray(element)){
            array.push(...flattenArray(element))
    }
    else {
        array.push(element)
    }
    });

return array
} 

console.log(flattenArray(nestedArray))

