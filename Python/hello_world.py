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

print(astring.upper())
print(astring.lower())

print(astring.startswith("Hello"))
print(astring.endswith("asdfasdfasdf"))

astring = "Hello world!"
afewwords = astring.split(" ")
print(afewwords)


# Prints out 0,1,2,3,4 and then it prints "count value reached 5"

count=0
while(count<5):
    print(count)
    count +=1
else:
    print("count value reached %d" %(count))

# Prints out 1,2,3,4
for i in range(1, 10):
    if(i%5==0):
        break
    print(i)
else:
    print("this is not printed because for loop is terminated because of break but not due to fail in condition")





# define the Vehicle class
class Vehicle:
    name = ""
    kind = "car"
    color = ""
    value = 100.00
    def description(self):
        desc_str = "%s is a %s %s worth $%.2f." % (self.name, self.color, self.kind, self.value)
        return desc_str
# your code goes here
car1 = Vehicle()
car1.name = "car1"
car1.kind = "convertible"
car2 = Vehicle()

# test code
print(car1.description())
print(car2.description())


# define the Vehicle class
class AnotherVehicle:
    def __init__(self, name, kind, color, value):
        self.name = name
        self.kind = kind
        self.color = color
        self.value = value
    def __str__():
        return "hello whatever no"
    def description(self):
        desc_str = "%s is a %s %s worth $%.2f." % (self.name, self.color, self.kind, self.value)
        return desc_str
# your code goes here
car3 = AnotherVehicle("car3", "van", "purple", 5)

print(car3.description())
# print(car3)