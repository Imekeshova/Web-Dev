N = int(input())
arr = list(map(int, input().split()))

x = True
for i in range(len(arr)- 1):
    if (arr[i] > 0 and  arr[i + 1] > 0):
        x = True
        break
    elif (arr[i] < 0 and  arr[i + 1] < 0):
        x = True
        break
    else:
        x = False
        break


if x:    
    print("YES")
else:    
    print("NO")
 