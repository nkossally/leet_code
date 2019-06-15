def insert(intervals, new_interval)
  result = []
  overlapping_intervals = Set.new
  for interval in intervals
    if overlap?(new_interval, interval)
      overlapping_intervals.add(interval)
    else
      result.push(interval)
    end
  end
  overlapping_intervals.add(new_interval)
  new_interval = merge(overlapping_intervals)
  j = 0
  while(j != result.length && result[j].start < new_interval.start)
    j+=1
  end
  result.insert(j, new_interval)
  result
end

def overlap?(interval1, interval2)
  return (interval1.start>=interval2.start && interval1.start<=interval2.end) ||
    (interval2.start>=interval1.start && interval2.start<=interval1.end)
end

def merge(intervals)
  start = nil
  ending = nil
  for interval in intervals
    if !start || interval.start<start
      start = interval.start
    end
    if !ending || interval.end>ending
      ending = interval.end
    end
  end
  return Interval.new(start, ending)
end