export class Stack<T>{
    container: T[] = [];
    constructor(){

    }
    push(element: T): void{
        this.container.push(element);
    }
    pop(): T | undefined{
        return this.container.pop();
    }
    peek(): T{
        return this.container[this.container.length-1];
    }
    size(): number{
        return this.container.length;
    }
}