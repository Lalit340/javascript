
//Stack class 
class Stack {
    //constructor of stack class
    constructor() {
        this.items = [];
    }
    //push  method for adding an element  
    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0)
            return 'UnderFlow';

        return this.items.pop();
    }

    isEmpty() {
        return this.items.length == 0;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    print() {
        var str = '', i;

        for (i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' ';
        }
        return str;

    }

    size(){
        return this.items.length ;
    }

}

module.exports = {
    Stack
}