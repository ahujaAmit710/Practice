let nums =[5 , 2 , 7, 11, 15]
let target =9


for (let i = 0; i < nums.length; i++) {
    
    if(nums[i] < target) {

        for (let j = i; j < nums.length; j++) {
            if(nums[i] + nums[j] == target){
                console.log(`index for first value : ${i}`)
                console.log(`index for second value : ${j}`)
            }
            
        }
       
    }
   
    
    
}