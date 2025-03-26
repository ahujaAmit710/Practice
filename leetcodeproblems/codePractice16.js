let array =[2,5,7,10];

let largNumber =0 

array.forEach(element => {
    if(largNumber < element){
        largNumber=element
    }

});
console.log(largNumber)

for (let i = 0; i < largNumber; i++) {
    const element = i;
    if(!array.includes(element)){
        console.log(`Missing number ${element}`)
    }
    
}