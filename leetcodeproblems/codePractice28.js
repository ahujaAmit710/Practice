let array =[1,2,3];
let newArray =[];


for (let i = 0; i < array.length; i++) {
        let row =[]    
    for (let j = array.length-1; j >= 0; j--) {
            row.push(array[j])

    }
    array=row
    newArray.push(row)
    row=[]

    
}

console.log(newArray)