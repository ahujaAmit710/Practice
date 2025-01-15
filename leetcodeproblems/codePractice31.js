// return unique values from array

let nums =[1,3,2,5,7,8,1,4,5,10]
let returnArray=[]

nums.forEach((element)=>{

    if(!returnArray.includes(element))
    {
        returnArray.push(element)
    }
    
})
console.log(returnArray)