import re
 
lt = []
d = {}
for i in range(3):
    a = input('请输入第%d个三元式'%(i + 1))
    st = a.split("=")
    r = re.compile('(-?\d?)[xyz]')
    b = re.findall(r, st[0])
    print(b)
    for j in range(3):
        if b[j] == "":
            b[j] = 1
        if b[j] == '-':
            b[j] = -1
    d = {
        'x': int(b[0]),
        'y': int(b[1]),
        'z': int(b[2]),
        'sum':int(st[1])
    }
    lt.append(d)
print(lt)
t = lt[0]['x'] / lt[1]['x']
for i in lt[0]:
    lt[1][i] = lt[1][i] * t - lt[0][i]
 
t1 = lt[0]['x'] / lt[2]['x']
for i in lt[0]:
    lt[2][i] = lt[2][i] * t1 - lt[0][i]
 
t2 = lt[1]['y'] / lt[2]['y']
 
for i in lt[0]:
    lt[2][i] = lt[2][i] * t2 - lt[1][i]
 
 
z = lt[2]['sum'] / lt[2]['z']
y = (lt[1]['sum'] - lt[1]['z'] * z) / lt[1]['y']
x = (lt[0]['sum'] - lt[0]['z'] * z - lt[0]['y'] * y)/lt[0]['x']
 
print(x,y,z)
