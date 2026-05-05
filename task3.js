var lengthOfLongestSubstring = function(s) {
    let max = 0
    for(let i = 0; i<s.length;i++){
        let set = new Set();// duplicate
        for(let j = i;j<s.length;j++){
            if (set.has(s[j])) {
                break; // duplicate found
            }
            set.add(s[j])
            max = Math.max(max,j-i+1)

    
        }
    }
    return max;
};
console.log(lengthOfLongestSubstring("abcabcbb")) 



let lengthOfLongestSubstring2 = function(s) {
    let max = 0
    let set = new Set();
    let left = 0;
    for(let right = 0; right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        max = Math.max(max,right-left+1)
    }
    return max;
};
console.log(lengthOfLongestSubstring2("bbbbb"))


const map = new Map();

map.set("a", 1);
map.set("b", 2);

console.log(map);