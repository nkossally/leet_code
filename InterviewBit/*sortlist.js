// Definition for singly-linked list.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  sortList: function (A) {
    const merge = (list1, list2) => {
      let node1 = list1;
      let node2 = list2;
      const dummy = new Node();
      let tail = dummy;
      while (node1 && node2) {
        if (node1.data < node2.data) {
          tail.next = node1;
          node1 = node1.next;
        } else {
          tail.next = node2;
          node2 = node2.next;
        }
        tail = tail.next;
      }
      tail.next = node1 ? node1 : node2;
      return dummy.next;
    };

    const mergeSort = (node) => {
      if (!node || !node.next) return node;

      let slow = node;
      let fast = node;
      let prev;
      while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
      }
      prev.next = null;

      return merge(mergeSort(node), mergeSort(slow));
    };
    return mergeSort(A);
  },
};
