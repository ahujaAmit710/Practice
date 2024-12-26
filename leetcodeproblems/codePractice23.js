//Return the middle node of a linked list.


let array =[1,2,3,4,5]
let length = Math.trunc(array.length / 2)
//array.splice(0, length)
//console.log(array)


//reverse Link list
let reverseArray=[]
console.log(`Link List before${array}`)
for (let index = array.length-1 ; index >=0 ; index--) {
    reverseArray.push(array[index])
}

console.log(`Link list after revers ${reverseArray}`)


//Binary search 

let nums= [-1, 0, 2,3, 5, 9, 12]
let target = 2

//console.log(nums.indexOf(target))
//without indexOf
let targetIndex =-1
for (let i = 0; i < nums.length; i++) {
    if(target === nums[i]){
        targetIndex=i
    }

}
console.log(targetIndex)



let sorting =[1,4,2,3,5]

for (let i = 0; i < sorting.length; i++) {
    for (let j = 0; j < sorting.length - i - 1; j++) {
      if (sorting[j] > sorting[j + 1]) {
        // Swap elements
        let temp = sorting[j];
        sorting[j] = sorting[j + 1];
        sorting[j + 1] = temp;
      }
    }
  }
  
  console.log(sorting); 


