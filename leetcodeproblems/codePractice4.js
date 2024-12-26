
function mergeTwoArray(array1, array2) {
    // Your code here
    let newArray=[]

    //newArray = array1.  

    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i])    
    }

    for (let i = 0; i < array2.length; i++) {
        newArray.push(array2[i])    
    }


    return newArray 
    //return array1.concat(array2);
    //return [...array1,...array2];
    

}

let a= [1,2,3]
let b= [4,5,6]

console.log(mergeTwoArray(a,b))



