"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("./queue");
const stack_1 = require("./stack");
let arrString = "able was I ere I saw elbb";
let queue = new queue_1.Queue();
let stack = new stack_1.Stack();
arrString.split("");
for (let i = 0; i < arrString.length; i++) {
    queue.equeue(arrString[i]);
    stack.push(arrString[i]);
}
function check() {
    while (queue.dequeue() !== stack.pop()) {
        return false;
    }
    return true;
}
if (check()) {
    console.log("La chuoi doi xung");
}
else {
    console.log("Ko la chuoi doi xung");
}
