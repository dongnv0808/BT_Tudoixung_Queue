import { Queue } from "./queue";
import { Stack } from "./stack";

let arrString = "able was I ere I saw elbb";
let queue = new Queue();
let stack = new Stack();
arrString.split("")
for(let i = 0; i < arrString.length; i++){
    queue.equeue(arrString[i]);
    stack.push(arrString[i]);
}
function check(){
    while(queue.dequeue() !== stack.pop()){
        return false
    } 
    return true
}

if(check()){
    console.log("La chuoi doi xung")
}else{
    console.log("Ko la chuoi doi xung")
}
