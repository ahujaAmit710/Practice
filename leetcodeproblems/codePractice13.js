let objectArray =[
    { id: 1, name: "Alice", score: 50 },
    { id: 2, name: "Bob", score: 40 },
    { id: 3, name: "Bob", score: 50 },
    { id: 4, name: "Alice", score: 70 }
]

let objectValue ={ }

for (let i = 0; i < objectArray.length; i++) {
        if(objectArray[i].name in objectValue){
            objectValue[objectArray[i].name] = objectValue[objectArray[i].name] + objectArray[i].score
        }
        else 
        {
            objectValue[objectArray[i].name] =objectArray[i].score
            
        }
    
}
console.log(objectValue)