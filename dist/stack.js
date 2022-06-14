"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.container = [];
    }
    push(element) {
        this.container.push(element);
    }
    pop() {
        return this.container.pop();
    }
    peek() {
        return this.container[this.container.length - 1];
    }
    size() {
        return this.container.length;
    }
}
exports.Stack = Stack;
