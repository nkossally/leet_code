arr = [1, 2, 3, 4, 5] 
reversed_arr = arr[::-1]
 
string = "_".join(map(str, arr))

print("string", string)

reversed = string[::-1]

print("reversed", reversed)

# arr = [1, 2, 3, 4, 5, 6]
# val = next((x for x in arr if x % 3 == 0 ), None)

# print(val)
# arr.insert(0, 12)
# print(arr)
# val = next((x for x in arr if x % 3 == 0 ), None)
# print(val)


# arr = [3, 6, 9, 12]
# evens = [ x for x in arr if x % 2 == 0]
# print("evens", evens)

# next_even = next((x for x in evens if x % 2 == 0), None)
# print("next_even", next_even)
# next_even = next((x for x in evens if x % 2 == 0), None)
# print("next_even", next_even)
# next_even = next((x for x in evens if x % 2 == 0), None)
# print("next_even", next_even)
# next_even = next((x for x in evens if x % 2 == 0), None)
# print("next_even", next_even)
# next_even = next((x for x in evens if x % 2 == 0), None)
# print("next_even", next_even)
# next_even = next((x for x in evens if x % 2 == 0), None)
# print("next_even", next_even)
# next_even = next((x for x in evens if x % 2 == 0), None)
# print("next_even", next_even)

# print("arr", arr)


arr = [7, 4, 9, 1, 2]

print("arr", arr)
arr.sort()
print("arr", arr)
def lexi_sort(a):
    a_char = str(a)[0]
    print(a,  a_char ,ord(a_char))
    return ord(a_char)
arr = ["hellow", "alabama", "t-rex", "pizza", "al"]
arr.sort(key = lexi_sort)
print(arr)

arr = [" " for _ in range(len("five"))]
print(arr)

class Node:
    def __init__(self, data):
        self.data = data  # The value or data the node will hold
        self.next = None  # Reference to the next node (useful in linked lists)
    
root = Node(5)
root.next = Node(7)
