let arr = [1, 3, 5, 7, 9, 11];
let target = 8;
let index= -1

for (let i = 0; i < arr.length; i++) {
    
    if(target === arr[i])
    {
        index =i
    }
    
}

console.log(`Index ${index}`)