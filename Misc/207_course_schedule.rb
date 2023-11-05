def can_finish(num_courses, prerequisites)
  prerequisites = prerequisites.uniq
  prerequisites.each do |pair|
      seen = Set.new
      seen.add(pair[1])
      if has_cycle(pair[0], seen, prerequisites)
          return false
      end
  end
  return true
end

def has_cycle(course, seen, prerequisites)
  check_courses = seen
  while check_courses.size > 0
      check_courses.each do |seen_course|
          new_courses = Set.new
          prerequisites.each do |pair|
              if pair[0] == seen_course
                  if pair[1] == course
                      return true
                  elsif !seen.include?(pair[1])
                      new_courses.add(pair[1])
                  end
              end
          end
          seen.merge(check_courses)
          check_courses = new_courses
      end
  end
  return false
end