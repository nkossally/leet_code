class Interval{
    constructor(start, end){
        this.start  = start;
        this.end = end;
    }
}

const mergeIngervals = intervals =>{
    intervals.sort((a, b) => a.start - b.start);
    const stack = [intervals[0]];
    for(let i = 1; i < intervals.length; i++){
        console.log(stack)
        const top = stack[stack.length - 1]
        const interval = intervals[i];
        if(interval.start <= top.end){
            top.end = Math.max(interval.end, top.end);
            stack.pop();
            stack.push(top);
        } else {
            stack.push(interval)
        }
    }
    console.log(stack)

}

const interval1 = new Interval(3, 4)
const interval2 = new Interval(1, 3)
const interval3 = new Interval(11, 14)
const interval4 = new Interval(5, 7)
const interval5 = new Interval(6, 10)
const intervals = [
    interval1, interval2, interval3, interval4, interval5
]
mergeIngervals(intervals)