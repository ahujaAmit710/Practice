let stringArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Not Solved
function groupAnagrams(strs) {
        const map = {};
        for (const str of strs) {
            // Sort the letters of the word to create a key
             const key = str.split('').sort().join('');
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(str); // Group anagrams under the same key

          
        }
        console.log(map)
        return Object.values(map);

        return strs.sort()
    }

console.log(groupAnagrams(stringArray)) 