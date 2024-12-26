let array= [{"id": 1, "value": 5},    
            {"id": 2, "value": 10},    
            {"id": 1, "value": 15}]

 //Expected output
 //[{"id" : 1 , "Value":20},
 // {"id" : 1 , "Value":20}]
 
let newArray=[]

 for (let i = 0; i < array.length; i++) {
    let existingItem = newArray.find(item => item.id === array[i].id);
    if (existingItem) {
        // Add the current value to the existing item's value
        existingItem.value += array[i].value;
    } else {
        // Push a new item if id doesn't exist
        newArray.push({ id: array[i].id, value: array[i].value });
    }
}

console.log(newArray)