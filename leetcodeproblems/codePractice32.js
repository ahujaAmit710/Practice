// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]  
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

// Hints for Solution:

// Use a hashmap (object) to group words by their sorted character strings.
// Iterate through the array, and for each string, sort its characters 
// alphabetically (e.g., "eat" becomes "aet").
// Use the sorted string as a key in the object to group the anagrams.

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]  

let map = {}

strs.forEach((string)=>{

    const key = string.split('').sort().join('')
    if(!map[key]){
        map[key]=[]
    }
    map[key].push(string)
        


})

console.log(Object.values(map))
