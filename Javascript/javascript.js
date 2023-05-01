// Array .keys
const arr2 = ["a", "b", "c"]
let arr = Array.from(Array(5).keys());
console.log(arr2.keys())


// sets ane arrays
const arr3 =  [1, 5, 1, 1, 2,3, 5, 4, 3]
const set = new Set(arr3);
const arrayNoDuplicates = Array.from(set);
console.log(arrayNoDuplicates);
const infinities = new Array(8).fill(1/0);
infinities[4] = 7;
console.log(infinities)

const letters = "iidgiiidnnngiiseutabrt".split("")
letters.sort((a, b) => a.charCodeAt(0)- b.charCodeAt(0));
console.log(letters)

const set2 = new Set([3, 4, 5])
set2.add(99)
set2.forEach(num =>{
    console.log(num)
}
    )

const newSet = new Set(set2);
set2.delete(4)
console.log(set2.size)
console.log(set2)
console.log(newSet)
let hello = "hello"
console.log(hello)
