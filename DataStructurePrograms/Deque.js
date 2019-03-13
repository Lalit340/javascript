

//class for Deque
class Deque {
    //constructor for deque
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return (this.items.length == 0)
    }


    addRear(element) {

        this.items.push(element);
    }


    addFront(element) {

        this.items.unshift(element);
    }


    deleteFront() {
        if (this.isEmpty()) {
            console.log('Deque underFlow');
            return;
        }
        return this.items.shift();
    }

    deleteRear() {
        if (this.isEmpty()) {
            console.log('Deque underFlow');
            return;
        }
        return this.items.pop();
    }


}

module.exports = {
    Deque
}