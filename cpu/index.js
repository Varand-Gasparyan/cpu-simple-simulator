class Cpu {
    constructor() {
        this.registers = {
            eax: null,
            ebx: null,
            ecx: null,
            edx: null,

            ip: 0,
            label: null,
            flag: null,
        }

        this.instructions = {
            mov: this.#mov,
            sumReg: this.#sumReg,
            sumImm: this.#sumImm,
            cmp: this.#cmp,
            jump: this.#jump
        }
    }

    run = (array) => {
        while (this.registers.ip < array.length) {
            const item = array[this.registers.ip];

            if (item.type === 'instruction') {
                this.instructions[item.instName](...item.args);
                ++this.registers.ip;
                continue;
            }
            if (item.type === 'label') {
                this.registers.label = item.labelName;
                ++this.registers.ip;
                continue;
            }
            if (item.type === 'jump') {
                const index = array.findIndex(el => el.labelName === item.label);

                if (index === -1)
                    ++this.registers.ip;
                else
                    this.registers.ip = index;

            }
        }
    }

    #mov = (dest, source) => {
        if (!(dest in this.registers))
            throw 'Invalid Reg Name';
        this.registers[dest] = source;
    }

    #sumReg = (reg1, reg2) => {
        if (!(reg1 in this.registers) || !(reg2 in this.registers))
            throw 'Invalid Reg Name';
        this.registers[reg1] = this.registers[reg1] + this.registers[reg2];
    }

    #sumImm = (reg1, val) => {
        if (!(reg1 in this.registers))
            throw 'Invalid Reg Name';
        this.registers[reg1] = this.registers[reg1] + val;
    }

    #cmp = (val1, val2) => {
        let cmpResult = null;
        if (this.registers[val1] && this.registers[val2]) {
            cmpResult = this.registers[val1] > this.registers[val2]
                ? 1 : this.registers[val1] < this.registers[val2]
                ? -1 : 0;
            this.registers.flag = cmpResult;
        }
        if (this.registers[val1] && !this.registers[val2]) {
            cmpResult = this.registers[val1] > val2
                ? 1 : this.registers[val1] < val2
                    ? -1 : 0;
            this.registers.flag = cmpResult;
        }
        if (!this.registers[val1] && this.registers[val2]) {
            cmpResult = val1 > this.registers[val2]
                ? 1 : val1 < this.registers[val2]
                    ? -1 : 0;
            this.registers.flag = cmpResult;
        }
        if (!this.registers[val1] && !this.registers[val2]) {
            cmpResult = val1 > val2 ? 1 : val1 < val2 ? -1 : 0;
            this.registers.flag = cmpResult;
        }
    }

    #jump = (label) => {
    }

    logRegisters = () => {
        console.log(this.registers)
    }
}

module.exports = Cpu;