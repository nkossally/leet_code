def merge(intervals)
  
  result = []
  for interval in intervals
    if result.empty?
      result.push(interval)
    else
      i = 0
      bool = false
      while i< result.length
        merged = merge_two_intervals(result[i], interval)
        if merged != interval
          result[i] = nil
        end
        i += 1
      end
      result.push merged
      result = result.select{ |interval| interval }
    end
  end
  result
end

def merge_two_intervals(interval1, interval2)
  if interval1 && interval2 && (interval1.start > interval2.end || interval2.start > interval1.end)
    return interval2
  end
  interval_start = [interval1.start, interval2.start].min
  interval_end = [interval1.end, interval2.end].max
  new_interval =  Interval.new(interval_start, interval_end)
  return new_interval
end

p merge([[1,3],[2,6],[8,10],[15,18]])

# p merge([[1,3],[2,6],[8,10],[15,18],[19,20]])
