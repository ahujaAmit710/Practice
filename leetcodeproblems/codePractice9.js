let array =[1,2,3,0,5,0,6,0]

moveZeros(array)
function moveZeros(params) {
    
    let outputArray=[]
    for (let i = 0; i < params.length; i++) {
      
        if(params[i] == 0){
                //outputArray.unshift(params[i]) 
                
                outputArray.splice(0 ,0 , params[i])
        }else{
            outputArray.push(params[i])
        }
    
    }
    console.log(outputArray)

}