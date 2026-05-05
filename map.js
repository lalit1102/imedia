const map = new Map();

// map.set("a", 1);
// map.set("b", 2);

// console.log(map);

// console.log(map.get("a")); // 1
// console.log(map.get("z")); // undefined

// console.log(map.has("a")); // true
// console.log(map.has("x")); // false

// map.set("a", 100);

// console.log(map.get("a")); // 100

// map.delete("b");

// console.log(map);

// console.log(map.size); // number of items

// let str = "aabbccc";

// for (let char of str) {
//     console.log(char);
//     if (map.has(char)) {
//          console.log(map.has(char));
//         map.set(char, map.get(char) + 1);
//         console.log(map.get(char));
//     } else {
//         map.set(char, 1);
//             console.log('else block'+ map.has(char));
//     }
// }

// console.log(map);

// let arr = [{name: "Alice", age: 25}, {name: "Bob", age: 25} ,{name: "Charlie", age: 30}, {name: "David", age: 30}];

// let ageMap = new Map();

// for (let person of arr) {
//     // console.log(person);
//     if (ageMap.has(person.age)) {
//         // console.log(ageMap.has(person.age));

//         ageMap.get(person.age).push(person.name);
//         console.log(ageMap.get(person.age));
//     } else {
//         ageMap.set(person.age, [person.name]);
//     }
// }

// console.log(ageMap);

function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    // console.log(diff);
    if (map.has(diff)) {
      console.log(map.get(diff))
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }

  return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
