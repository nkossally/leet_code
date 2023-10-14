module.exports = {
    /**
     * Interval: [start, end]
     * 
     * param A: intervals, a list of Intervals
     * return :a list of Intervals
     */
    solve: function (intervals, new_interval) {
        if(intervals.length === 0) return [new_interval]
        intervals.sort((a, b) => {
            return a[0] - b[0]
        })
        let newInterval = new_interval;
        let idx;
        for (let i = 0; i < intervals.length; i++) {
            const interval = intervals[i]
            if ((newInterval[0] >= interval[0] && newInterval[0] <= interval[1]) ||
                (interval[0] >= newInterval[0] && interval[0] <= newInterval[1])) {
                const newStart = Math.min(interval[0], newInterval[0]);
                const newEnd = Math.max(interval[1], newInterval[1])
                newInterval = [newStart, newEnd]
                intervals[i] = undefined;
                if (idx === undefined) idx = i
            }
        }
        intervals = intervals.filter(elem => elem !== undefined)
        if(idx !== undefined){
             intervals.splice(idx, 0, newInterval);
        } else {
            intervals.push(newInterval)
        }
        console.log(intervals)
        return intervals;
    },
};
const A  = [ [6037774, 6198243], [6726550, 7004541], [8842554, 10866536], [11027721, 11341296], [11972532, 14746848], [16374805, 16706396], [17557262, 20518214], [22139780, 22379559], [27212352, 28404611], [28921768, 29621583], [29823256, 32060921], [33950165, 36418956], [37225039, 37785557], [40087908, 41184444], [41922814, 45297414], [48142402, 48244133], [48622983, 50443163], [50898369, 55612831], [57030757, 58120901], [59772759, 59943999], [61141939, 64859907], [65277782, 65296274], [67497842, 68386607], [70414085, 73339545], [73896106, 75605861], [79672668, 84539434], [84821550, 86558001], [91116470, 92198054], [96147808, 98979097] ]
const B =  [36210193, 61984219] 

module.exports.solve(A, B)
