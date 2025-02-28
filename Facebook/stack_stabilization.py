N = 5
R = [2, 5, 3, 6, 5]
A = 1
B = 1

def get_min_count(num, radii, inflate_cost, deflate_cost):

    def get_is_stable(stack):
        for i in range(1, len(stack)):
            if stack[i] <= stack[i - 1]:
                return False
        return True
    
    best_counts = []

    def get_best_counts(stack, count):
        if count > 210 or len(best_counts) > 0 and count >= best_counts[0]:
            return
        if get_is_stable(stack):
            print("adding", count)
            best_counts.append(count)
            return

        

        for i in range(1, len(stack)):
            val1 = stack[i]
            val2 = stack[i - 1]
            diff  = abs(val1 - val2)
            if val1 <= val2:
                for num in range(0, diff + 2):
                    if val2 - (diff + 1 - num) > 0:
                        get_best_counts( stack[0 : i - 1] + [val2 - (diff + 1 - num), val1 + num] + stack[i + 1 :],  count +(diff + 1 - num) * deflate_cost + num * inflate_cost)

    get_best_counts(radii, 0)
    print(min(best_counts))

# get_min_count(N, R, A, B)

# N = 3
# R = [100, 100, 100]
# A = 2
# B = 3
# get_min_count(N, R, A, B)


# N = 3
# R = [100, 100, 100]
# A = 7
# B = 3

# get_min_count(N, R, A, B)

# N = 4
# R = [6, 5, 4, 3]
# A = 10
# B = 1

# get_min_count(N, R, A, B)

N = 4
R = [100, 100, 1, 1]
A = 2
B = 1

get_min_count(N, R, A, B)

# N = 6
# R = [6, 5, 2, 4, 4, 7]
# A = 1
# B = 1

# get_min_count(N, R, A, B)
