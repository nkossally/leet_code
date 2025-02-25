arr = [1, 2, 3, 4, 5, 6]
val = next((x for x in arr if x % 3 == 0 ), None)

print(val)
arr.insert(0, 12)
print(arr)
val = next((x for x in arr if x % 3 == 0 ), None)
print(val)
