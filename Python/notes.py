import math
# You cannot join an array of ints
arr = [1, 2, 3]
str_arr = list(map(str, arr))
string = "".join(list(map(str, arr)))

# Create Nested Array
# Do it this way
empty_lists = [[] for _ in range(5)] 

# Not this way
dp = [[]] * len("word")

my_set = {1, 2, 3, 4, 5} 

empty_set = set() 

my_list = [1, 2, 3, 4, 5, 5, 3] 
my_set = set(my_list)

numbers = [1, 2, 3, 4]

# Define a condition function (check if even)
def is_even(n):
    return n % 2 == 0

# filtering
even_numbers = list(filter(is_even, numbers)) 
even_numbers = [num for num in numbers if num % 2 == 0] 


my_list = ['apple', 'banana', 'cherry']
for index, value in enumerate(my_list): 
    print(f"Index: {index}, Value: {value}")


my_list = ['a', 'b', 'c'] 
for index, value in enumerate(my_list): 
    print(f"Index: {index}, Value: {value}")

nums = map(str, range(1, 27))

sqrt_result = 49 ** 0.5 
sqrt_result = math.sqrt(49) 

my_string = "hello" 
reversed_string = my_string[::-1]


arr = [1, 2, 3, 4, 5] 
reversed_arr = arr[::-1]
 
reversed_arr = list(reversed(arr)) 

# remove last element
arr = [1, 2, 3, 4, 5]
arr.pop()  # Removes the last element (5)
print(arr)  # Output will be [1, 2, 3, 4]
# or
arr = [1, 2, 3, 4, 5]
arr = arr[:-1]  # Removes the last element

# convert list to string
my_list = ['a', 'b', 'c']
result = ''.join(my_list) 
print(result)
result = ', '.join(my_list)

# nonstring array 
my_list = [1, 2, 3]
result = str(my_list) 

my_string[::-1]

my_list = [2, 4, 6, 8, 10] 
# Find the first element greater than 5 f
# irst_match = next((x for x in my_list if x > 5), None) 
# print(first_match) # Output will be 6

# i_group = next((group for group in groups if i in group), None )


# Example: Filter even numbers from the list
my_list = [1, 2, 3, 4, 5, 6]



# Use filter to apply the condition
filtered_list = filter(is_even, my_list)

# Convert the filter object to a list
filtered_list = list(filtered_list)
print(filtered_list)  # Output will be [2, 4, 6]

# Delete from array
my_list = [1, 2, 3, 4] 
del my_list[2] # Removes the item at index 2 (which is 3) 
print(my_list) # Output: [1, 2, 4]


my_lists = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

# Sum of the lengths of all arrays
total_length = sum(len(lst) for lst in my_lists)

print(total_length)  # Output will be 9 (3 + 2 + 4)


positive_infinity = float('inf') 
negative_infinity = float('-inf')


my_dict = {'a': 1, 'b': 2, 'c': 3} 
values = my_dict.values()

absolute_value = abs(-5) 

my_dict = {'a': 1, 'b': 2, 'c': 3} 
del my_dict['b'] 
print(my_dict)

arr = [1, 2, 3]
sum(arr, start=0)
ord("A")

numbers = [1, 2, 3, 4]
result = sum(numbers)
print(result)


character = 'A'
result = ord(character)
print(result)

my_list = ['apple', 'banana', 'cherry', 'date']

# Custom function to return the length of each string
my_list.sort(key=len)

print(my_list)

my_list = ['apple', 'banana', 'cherry', 'date']

# Custom function to return the length of each string
sorted_list = sorted(my_list, key=len)

print(sorted_list)\

my_list = ['apple', 'banana', 'cherry', 'date']

# Custom function to sort by the last character of each string
my_list.sort(key=lambda x: x[-1])

print(my_list)


my_list = ['apple', 'banana', 'cherry', 'date']

# Custom function to sort by the last character of each string
my_list.sort(key=lambda x: x[-1])

print(my_list)

string = "hello"
num = "el" in string

my_list = [1, 2, 3, 4, 5, 6]
filtered_list = filter(lambda x: x % 2 == 0, my_list)

# Convert the filter object to a list
filtered_list = list(filtered_list)
print(filtered_list)

my_list = ['apple', 'banana', 'kiwi', 'cherry']

# Custom function to sort by length of the string, in reverse order
sorted_list = sorted(my_list, key=lambda x: len(x), reverse=True)

my_variable = 42
print(type(my_variable))

