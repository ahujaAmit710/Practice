function commonPrefix(strings) {
        if (!strings.length) return "";
    
        let prefix = strings[0];
        for (let i = 1; i < strings.length; i++) {
            while (strings[i].indexOf(prefix) !== 0) {
                prefix = prefix.slice(0, -1);
                if (!prefix) return "";
            }
        }
        return prefix;
    }
    
    // Example usage
    const strings = ["flower", "flow", "flight"];
    console.log(commonPrefix(strings)); // Output: "fl"