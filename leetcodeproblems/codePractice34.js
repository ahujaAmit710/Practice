// Longest Substring Without Repeating Characters
// Input: "abcabcbb"
// Expected Output: 3
// (Longest substring is "abc" with length 3.)

console.log(Array.from('abcabcbb'))

function lengthOfLongestSubstring(s) {
    let set = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        // If the character is already in the set, remove from the left
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        // Add the character to the set and update the max length
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example Usage
const input = "abcabcbb";
console.log(lengthOfLongestSubstring(input)); // Output: 3
