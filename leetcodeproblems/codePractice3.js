

function removeDuplicates(array){
    // let newArray =[]

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     if(i > 0){
    //         if(!newArray.includes(array[i])){
    //             newArray.push(element)
    //         }
    //     }
    //     else{
    //         newArray.push(element)
    //     }
        
    // }

    // return newArray

    return array.filter((element, index) => array.indexOf(element) === index);
    
}

let array =[1,1,2,2,3,3,4,4,5,5]
console.log(removeDuplicates(array)) 