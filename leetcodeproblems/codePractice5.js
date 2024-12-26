let array =[1,2,3,4,5];

console.log(returnSum(array))

function returnSum(params) {
      let arraySum=0; 
      for (let i = 0; i < params.length; i++) {
        //const element = params[i];
        
        arraySum +=params[i]
      }    
      return arraySum;  
}
