const Cpu = require("./cpu");
const Parser = require("./parser")

const data = require('./testData')

const cpu = new Cpu();
const parser = new Parser();


cpu.run(data);


cpu.logRegisters();