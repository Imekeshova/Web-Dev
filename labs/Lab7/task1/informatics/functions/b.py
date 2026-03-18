def double_power(a, n):
    return int(a ** n);

a, n = input().split()
a = float(a)
n = int(n)

print(double_power(a, n))