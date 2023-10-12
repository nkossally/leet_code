// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reorderList: function (A) {
    if (!A.next) return A;
    if (!A.next.next) {
      return A;
    }
    let arr = [];
    let curr = A;
    while (curr) {
      arr.push(curr);
      curr = curr.next;
    }

    curr = A;
    let pairIdx = arr.length - 1;
    while (curr && pairIdx >= arr.length / 2) {
      const pair = arr[pairIdx];
      pair.next = curr.next;
      curr.next = pair;
      // arr[pairIdx - 1].next = null;
      curr = curr.next ? curr.next.next : null;

      pairIdx--;
    }

    arr[Math.ceil((arr.length - 1) / 2)].next = null;

    return A;
  },
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node = new Node(1);
const head = node;
node.next = new Node(2);
node = node.next;
// node.next = new Node(3)
// node = node.next;
// node.next = new Node(4)
// node = node.next;
// node.next = new Node(5)
// node = node.next;
module.exports.reorderList(head);
