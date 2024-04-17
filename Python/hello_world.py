print(float(7))

mylist = []
mylist.append(1)

for x in mylist:
    print(x)

lotsofhellos = "hello" * 10
print(lotsofhellos)

squared = 7 ** 2
cubed = 2 ** 3
print(squared)
print(cubed)

even_numbers = [2,4,6,8]
odd_numbers = [1, 2, 3,5,7]
all_numbers = odd_numbers + even_numbers
print(all_numbers)

print([1,2,3] * 3)

x = object()
print(x)
y = {}
print(y)

name = "John"
age = 23
print("%s is %d years old." % (name, age))

data = ("John", "Doe", 53.44)
format_string = "Hello %s %s. Your current balance is $%s."

print(format_string % data)

data = ("John", "Doe", 53.44)
format_string = "Hello %s %s. Your current balance is $%.1f."

print(format_string % data)

astring = "Hello world!"
print(len(astring))
print(astring.index("o"))

astring = "Hello world!"
print(astring.count("l"))

print(astring[3:7])

print(astring[-3:-1])

print(astring[0:12:2])
print(astring[0:12:1])

print(astring[::-1])