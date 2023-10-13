class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  insertionSortList: function (A) {
    let node = A;

    while (node !== null) {
      let curr = A;
      while (curr && curr.data !== node.data) {
        if (curr.data > node.data) {
          const temp = curr.data;
          curr.data = node.data;
          node.data = temp;
        }
        curr = curr.next;
      }
      node = node.next;
    }
    console.log(A)
    return A;
  },
};

const constructNode = (arr) => {
  let head = new Node(arr[0]);
  let node = head;
  for (let i = 1; i < arr.length; i++) {
    node.next = new Node(arr[i]);
    node = node.next;
  }
  return head;
};
const A = [
  192, 856, 647, 251, 498, 749, 252, 577, 322, 794, 490, 278, 754, 505, 688,
  418, 486, 3, 700, 680, 707, 892, 37, 666, 9, 858, 802, 82, 441, 500, 64, 373,
  174, 779, 346, 803, 760, 48, 783, 654, 731, 391, 733, 480, 5, 144, 919, 291,
  180, 50, 326, 90, 437, 502, 527, 648, 361, 828, 729, 546, 934, 69, 209, 187,
  365, 329, 276, 86, 348, 986, 344, 183, 495,
];
const node = constructNode(A);
module.exports.insertionSortList(node, 40);
