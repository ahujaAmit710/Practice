// Problem:
// Given an array nums and an integer k, rotate the array to the right in chunks
// of size k. If the remaining elements are fewer than k, rotate them as they are.
// Input:
// nums = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
// Output:
// [6, 7, 8, 3, 4, 5, 1, 2]


let nums = [1, 2, 3, 4, 5, 6, 7, 8]
let k = 3
const nestedArray = [];
let row=[]
for (let i = nums.length-1; i >= 0; i--) {
    if(row.length >= k){
        console.log('break ', i , "row "+row)
        
        nestedArray.push(row.sort((a,b)=>a-b))  
        row = []
        ++i
    
    }
    else { 
        console.log('add row ', nums[i])
        row.push(nums[i])
        if(i===0 ){
            nestedArray.push(row.sort((a,b)=>a-b))  
        }
    }
        
    //nestedArray.push(row.sort((a,b)=>b-a))
   // console.log(nums[i])
}

console.log(flattenArray(nestedArray))

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