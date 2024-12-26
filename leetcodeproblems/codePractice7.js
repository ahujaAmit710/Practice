let nums =[1,2,3,4,5,6,7];
let k=3;

console.log(reverseStepArray(nums, k))

function reverseStepArray(array, setp) {

    let returnArray=[];

    for (let i = array.length-1; i >= 0; i--) {
          
        returnArray.push(array[i])
    }

    console.log(returnArray)
}