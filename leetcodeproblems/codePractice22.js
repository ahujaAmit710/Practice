let nums =[5 , 2 , 7, 11, 15]
let target =9
let returnValue =[]

for (let i = 0; i < nums.length; i++) {
    if(nums[i] < target) {
        for (let j = i; j < nums.length; j++) {
            if(nums[i] + nums[j] == target){
                returnValue.push(nums[i])
                returnValue.push(nums[j])
            }
            
        }
    }
}

console.log(returnValue)