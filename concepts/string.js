
function printString() {
    let str = "find the longest word"

    let strings = str.split(' ')
    let myString = ''

    strings.forEach(element => {
        console.log(element)
        if (myString.length < element.length) {
            myString = element
        }

    });
    console.log("longest word is : " + myString)
}

function reverseString() {
    let string = "Hello"
    let stringArray = Array.from(string)
    //     let reversArray =[];
    //     for (let i = stringArray.length -1; i >= 0 ; i--) {
    //           reversArray.push(stringArray[i])      
    //         }

    //    console.log(reversArray.join(""))     

    console.log(stringArray.reverse().join(""))


}

function fizzBuzz(n) {

    let outputArray = []

    for (let i = 1; i <= n; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            outputArray.push('FizzBuzz')
        }
        else if (i % 3 == 0) {
            outputArray.push('Fizz')
        }
        else if (i % 5 == 0) {
            outputArray.push('Buzz')
        }

        else {
            outputArray.push(i.toString())
        }


    }

    console.log(outputArray)

}


function twoSum() {
    let nums =[9, 10 , 2, 12 , 11 , 7, 15 , 4]
    let target =9
    

    for (let i = 0; i < nums.length; i++) {
        
        if(nums[i] < target) {

            for (let j = i; j < nums.length; j++) {
                if(nums[i] + nums[j] == target){
                    console.log(`index for first value : ${nums[i]}`)
                    console.log(`index for second value : ${nums[j]}`)
                }
                
            }
           
        }
       
        
        
    }
}

twoSum()
//fizzBuzz(15)
//reverseString()
//printString()