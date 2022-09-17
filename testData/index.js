module.exports = [
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
    },
    // {
    //     type: 'jump',
    //     instName: 'jump',
    //     label: 'INFINITE_LOOP'
    // },
]