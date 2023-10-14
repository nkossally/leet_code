 const constructNode = (arr) => {
  let head = new Node(arr[0]);
  let node = head;
  for (let i = 1; i < arr.length; i++) {
    node.next = new Node(arr[i]);
    node = node.next;
  }
  return head;
};

 class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
