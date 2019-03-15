

//Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Stack class 
class Stack {
    //constructor of stack class
    constructor() {
        this.top = null;
        this.size = 0;
    }
    //push  method for adding an element  
    push(data) {
        var node = new Node(data);
        // it will add the data into stack 
        if (this.isEmpty()) {//if the stack is empty the data will add as first node into the stack

            this.top = node;//adding first data into stack
            this.size++;
            return;
        }
        else {

            node.next = this.top;
            this.top = node
            this.size++
        }
    }

    pop() {
        //return data which are in the stack
        if (this.isEmpty()) {
            return 'no data'
        }

        var dat = this.top.data;
        this.top = this.top.next;
        this.size--;
        //console.log("popped value "+dat);
        return dat;
    }

    isEmpty() {
        //checking wether the stack contain any data if it is not return true
        if (this.size === 0) {
            return true;
        }
        else
            return false
    }

    peek() {
        return this.top.data//return the top value i.e added in the last
    }

    print() {
        var str = '';
        //printing the values
        var t = this.top;
        while (t != null) {
            str += t.data + '  ';
            t = t.next;
        }
        return str;
    }

    getSize() {
        //it returns the size of the Stack
        return this.size;
    }

}

module.exports = {
    Stack
}