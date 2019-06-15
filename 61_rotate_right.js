var rotateRight = function(head, k) {
  if (!head) {
    return null;
  }
  let length = 0;
  let pointer = head;
  while (pointer.next) {
    length += 1;
    pointer = pointer.next;
  }
  length += 1;
  k = k % length;
  let pointer1 = head;
  let i = 0;

  while (i < length - k - 1) {
    pointer1 = pointer1.next;
    i += 1;
  }
  pointer.next = head;
  head = pointer1.next;
  pointer1.next = null;

  return head;
};
node5 = new Node(5);
node4 = new Node(4, node5);
node3 = new Node(3, node4);
node2 = new Node(2, node3);
node1 = new Node(1, node2);

console.log(rotateRight(node1, 2));
