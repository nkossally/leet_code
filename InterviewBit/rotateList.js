module.exports = {
    //param A : head node of linked list
    //param B : integer
    //return the head node in the linked list
    rotateRight: function (A, B) {
        if (!A.next) return A
        let tail = A;
        let l = 1
        while (tail.next) {
            tail = tail.next
            l++;
        }
        if(B % l === 0) return A
        const newTailPos = l - (B % l)
        let newTail = A;
        let count = 0;
        
        while(count < newTailPos - 1){
            newTail = newTail.next;
            count++
        }
        const newHead  = newTail.next
        tail.next = A;
        newTail.next = null
        console.log(newHead)
        return newHead

    }
};

class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

let node = new Node(1)
const head = node
node.next = new Node(2)
node = node.next;
node.next = new Node(3)
node = node.next;
node.next = new Node(4)
node = node.next;
node.next = new Node(5)
node = node.next;
module.exports.rotateRight(head, 3)