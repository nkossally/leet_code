var rotateRight = function(head, k) {
  if (!head) {
    return null;
  }

  length = 0;
  pointer = head;
  while (pointer) {
    length += 1;
    pointer = pointer.next;
  }
  k = k % length;

  pointer1 = head;
  pointer2 = head;
  i = 0;
  while (i < k) {
    pointer1 = pointer1.next;
    if (!pointer1) {
      pointer1 = head;
    }
    i += 1;
  }
  while (pointer1.next) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  pointer1.next = head;
  head = pointer2.next;
  pointer2.next = null;
  return head;
};

class Node {
  constructor(val, next = null) {
    (this.val = val), (this.next = next);
  }
}
node5 = new Node(5);
node4 = new Node(4, node5);
node3 = new Node(3, node4);
node2 = new Node(2, node3);
node1 = new Node(1, node2);

console.log(rotateRight(node1, 2));
