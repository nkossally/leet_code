var rotateRight = function(head, k) {
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
  pointer2.next = NULL;
};
