def merge(intervals)
  
  result = []
  for interval in intervals
    if result.empty?
      result.push(interval)
    else
      i = 0
      bool = false
      while i< result.length
        interval2 = result[i]
        if subsumed?(interval, interval2)
          bool = true
          break
        end
        merged = merge_two_intervals(interval, interval2)
        interval = merged
        if subsumes?(merged, interval2)
          result[i] = nil
        end
        i += 1
      end
      if !bool
          result.push merged
      end
      result = result.select{ |interval| interval }
    end
  end
  result
end

def merge_two_intervals(interval1, interval2)
  if interval1 && interval2 && (interval1.start > interval2.end || interval2.start > interval1.end) 
    return interval1
  end
  interval_start = interval1.start < interval2.start ? interval1.start : interval2.start
  interval_end = interval1.end > interval2.end ? interval1.end : interval2.end
  new_interval =  Interval.new(interval_start, interval_end)
  return new_interval
end

def subsumes?(interval1, interval2)
  return interval1.start <= interval2.start && interval1.end >= interval2.end
end

def subsumed?(interval1, interval2)
  return interval1.start >= interval2.start && interval1.end <= interval2.end
end

# p merge([[1,3],[2,6],[8,10],[15,18]])

# p merge([[1,3],[2,6],[8,10],[15,18],[19,20]])

