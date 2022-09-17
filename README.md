# cpu-simple-simulator
for usage open testData, and change values,
now doesnt exist validations, but I hope in weakend if it is important, I will add.
Now its working simple way

example
[
    {
        type: 'instruction',
        instName: 'mov',
        args: ['eax', 10]
    },
    {
        type: 'instruction',
        instName: 'sumImm',
        args: ['ebx', 15]
    },
    {
        type: 'instruction',
        instName: 'sumReg',
        args: ['eax', 'ebx']
    },
    {
        type: 'label',
        labelName: 'INFINITE_LOOP',
    },
    {
        type: 'instruction',
        instName: 'sumImm',
        args: ['ecx', 17]
    }
]
