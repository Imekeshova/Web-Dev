length = 109
a = int(input())
b = int(input())

res = (a * b) % 109
if (res) < 0:
    res += 109
print(res)