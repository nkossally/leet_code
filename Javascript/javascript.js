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
const testSplice = [1, 2,3, 4, 5];
testSplice.splice(testSplice.indexOf(2), 1)
console.log(testSplice)
console.log("abcde".substring(1, 3))
console.log("abcde".slice(1, 3))
const human = { name: "najja", age: "32" }
const { name } = human
console.log( name )
const destructureArray = ["apple", 3, "banana", 5]
const [element1, element2] = destructureArray;
console.log(element1, element2)

const testFilter = [1, 2, 3, 4, 5, 6, 7, 8]
testFilter.filter(elem => elem < 5)
console.log(testFilter)
console.log(testFilter.filter(elem => elem < 5))

class Interval {
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
}
const testInterval = new Interval(3, 4);
console.log(testInterval.start, testInterval.end)

const testSetHas = new Set([1, 2, 3, 4]);
console.log(testSetHas.has(4))
testSetHas.delete(4)
testSetHas.delete(5)
console.log(testSetHas.has(4))
testSetHas.add(4)
console.log(testSetHas.has(4))
console.log("iterating through set")
testSetHas.forEach(elem =>{
    console.log(elem)
    testSetHas.delete(elem)
})
console.log(testSetHas.size)

const testDeleteArray = [4, 4, 4,4,4, 5,5,5,5];
for(let i = 0; i < testDeleteArray.length; i++){
    console.log("i", i)
    if(testDeleteArray[i] === 4){
        testDeleteArray.splice(i, 1);
        i--;
    }
}
console.log(testDeleteArray)
for(let i = 0; i < testDeleteArray.length; i++){
    console.log("i", i)
    testDeleteArray.splice(i, 1);
    i--;
}
console.log(testDeleteArray)

console.log(-1 % 2)
console.log(-2 % 2)

const abFab = new Set([1, 2, 3])
const fab = new Set([3, 4, 5])
abFab.add(fab);
console.log(abFab)

const deleteStuff = [ 111, 222, 333];
deleteStuff.splice(-1, 1);
console.log(deleteStuff)

const funObj = {1: 1, 2: 2}
delete funObj[2]
console.log(funObj)


const aSet = new Set([[1, 2, 3], 1, 2, new Set([1, 2, 3])])
const bSet = new Set(aSet);
aSet.delete(1)
console.log(aSet)
console.log(bSet)
console.log(bSet.size)
 
const mario = [1, 2, 3]
const luigi = [3, 3, 4, 5]
const octopusoir = Array.from(new Set([...mario, ...luigi]))
console.log(octopusoir)

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}



const node = new Node(5)
console.log(node)

const stringa = "abcde"
const arraya = stringa.split("");
console.log(stringa.indexOf("d"))
console.log(arraya.indexOf("d"))
console.log(arraya.find(elem => elem === "d"))
console.log(arraya.findIndex(elem => elem === "d"))
