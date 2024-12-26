let words = ["i", "love", "leetcode", "i", "love", "coding"]
let k = 2

returnArray =[]
words.forEach(element => {
    
    if(returnArray.includes(element)){
        console.log(`Repeated values: ${element}`)
    }
    else
    {
        returnArray.push(element)
    }
});

//output
//["i", "love"]