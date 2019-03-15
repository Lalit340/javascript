

//node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Queue class implemetation
class Queue {
    //queue Constructor
    constructor() {
        this.size = 0;
        this.top = null;
        this.front = null;
    }

    isEmpty() {
        //checking wheather the queue is is full or not
        if (this.size === 0) {
            return true;
        }
        else
            return false
    }

    getSize() {
        //return the size value of the queue
        return this.size;
    }

    enqueue(data) {
        //adding element to queue
        //if the queue is empty the data will add as first node into the queue
        var node = new Node(data)
        if (this.isEmpty()) {

           
            this.top = node;   //adding first data into the queue
            this.front = node;
            this.size++;
            return;
        }
      
        this.top.next = node;     //adding data at the end 
        this.top = node;
        this.size++;
    }

    dequeue() {
        //removing datas which are in the queue
        if (this.isEmpty()) {
            // console.log('no elemets found')
            return;
        }
        var dat = this.front.data
        this.front = this.front.next;//taking ref of next node into first of qeue
        this.size--;
        return dat;//return data to the user
    }

    printQueue() {
        //printing the datas inthe queue
        var t = this.front;
        while (t != null) {
            console.log(t.data);
            t = t.next;
        }
    }
}

module.exports = {
    Queue
}