let array= [1,2,3,2,4,2,5];

//unsolved
getReapetedValue(array)
function getReapetedValue(params) {
let reapetedValue =[]    
    for (let i = 0; i < params.length; i++) {
      
        
            console.log('current value' , params[i])
            if(reapetedValue.includes(params[i]))
            {
               
               reapetedValue.push(params[i])     
            }else{
              
                if(reapetedValue.length == 0){
                    reapetedValue.push(params[i])     
                }else{
                    reapetedValue.slice(params.indexOf(params[i]))
                }
                
                

            }
        
        
    }
    console.log(reapetedValue)
}