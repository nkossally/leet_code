//param A : head node of linked list
//param B : integer
//param C : integer
//return the head node in the linked list
function reverseBetween(A, B, C) {
  if (!A.next) return A;

  let node = A;
  for (let i = 1; i < B; i++) {
    node = node.next;
  }
  const start = node;
  const vals = [];
  for (let i = 0; i <= C - B; i++) {
    vals.push(node.data);
    node = node.next;
  }
  console.log(vals)

  let count = vals.length;
  node = start;
  while (count > 0) {
    node.data = vals[count - 1];
    count--;
    node = node.next;
  }
  console.log(A.next.next)
  return A;
}

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

const arr = [1, 2, 3, 4, 5];
const node = constructNode(arr);

reverseBetween(node, 2, 4);
