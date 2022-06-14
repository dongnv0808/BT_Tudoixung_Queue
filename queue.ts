export class Queue <T>{
    container: T[] = []
    constructor(){

    }
    equeue(element: T ): void{
        this.container.push(element);
    }
    dequeue(): T | undefined{
        return this.container.shift();
    }
    size(): number{
        return this.container.length;
    }
}