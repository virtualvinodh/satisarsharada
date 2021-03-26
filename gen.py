vowels = ['a', 'A', 'i', 'I', 'u', 'U', 'R', 'RR', 'lR', 'lRR', 'e', 'ai', 'o', 'au']
cons = ['k', 'kh', 'g', 'gh', 'G', 'c', 'ch', 'j', 'jh', 'J', 'T', 'Th', 'D', 'Dh', 'N', 't', 'th', 'd', 'dh', 'n', 'p', 'ph', 'b', 'bh', 'm', 'y', 'r', 'l', 'v', 'z', 'S', 's', 'h']
ayoga = ['M', 'H', '~']

print(''.join(vowels))

for a in ayoga:
    line = '' 
    for v in vowels:
        line = line + v + a
    print(line)


print(''.join(cons))

for c in cons:
    line = c + ' '
    for v in vowels:
        line = line + c + v
    print(line)


for v in vowels:
    line = '' 
    for c in cons:
        line = line + c + v
    print(line)

for a in ayoga:
    for v in vowels:
        line = '' 
        for c in cons:
            line = line + c + v + a
        print(line)


