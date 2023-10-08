class MaxHeap{
    constructor(){
        this.heap = [];
    }

    leftIdx = (idx) => {
        return 2*idx + 1;
    }

    rightIdx = (idx) => {
        return 2*idx + 2;
    }

    parentIdx = idx =>{
        return Math.floor((idx - 1) / 2)
    }

    swap = (a, b) => {
        const temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    bubbleDown = () =>{
        const getMaxChildIdx = idx =>{
            const leftIdx = this.leftIdx(idx)
            const rightIdx = this.rightIdx(idx)
            let maxIdx = leftIdx;
            if(this.heap[leftIdx] !== undefined){
                if(this.heap[rightIdx] !== undefined && this.heap[rightIdx] > this.heap[leftIdx]){
                    maxIdx = rightIdx;
                }
            } else {
                return undefined;
            }
            return maxIdx;
        }

        let idx = 0; 
        while(idx < this.heap.length){
            const newIdx = getMaxChildIdx(idx);
            if(newIdx){
                if(this.heap[idx] < this.heap[newIdx]){
                    this.swap(idx, newIdx)
                    idx = newIdx;
                } else {
                    break
                }
            } else {
                break;
            }
        }
    }

    insert = val => {
        this.heap.unshift(val);
        this.bubbleDown()
        
    }

    remove = () => {
        this.heap.shift();
        this.bubbleDown()
    }
}

const heap = new MaxHeap()

heap.insert(1)
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(6)
heap.insert(7)
console.log(heap)
heap.remove()
console.log(heap)
heap.insert(3)
heap.insert(2)
console.log(heap)
heap.remove()
console.log(heap)
heap.insert(3)
console.log(heap)
heap.insert(3)
console.log(heap)