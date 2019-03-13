
var ul = require('./Utility');
var list = require('./LinkedList');
var rd = require('readline-sync');

// User defined class node 
class Node {

    constructor(data) {

        this.data = data;

        this.next = null;

    }

}
// linkedlist class 
class LinkedList {

    constructor() {

        this.first = null;

        this.size = 0;



    }

  

    search(item) {
        //check the first node is empty or not
        if (this.first == null) {

            return false;

        }


        var temp = this.first;

        while (temp) {

            if (temp.data == item) {
                //item is found
                return true;

            }

            // not found then search next node.
            temp = temp.next;

        }

        return false;

    }

    addToPos(data) {

        var temp = this.first;

        var prev = temp;


        if (data < temp.data) {

            this.insertFirst(data);

            return

        }

        var node = new Node(data);

        while (temp.next) {

            if (temp.data < data) {

                prev = temp;

                temp = temp.next;

            } else {

                prev.next = node

                node.next = temp


                break;

            }

        }

        if (!temp.next) {

            temp.next = node;

        }

        this.size++;

    }

    remove(data) {


        var temp = this.first;

        if (temp.data == data) {

            this.deleteFirst();

            return;

        }

        var prev = temp;

        while (temp) {

            if (temp.data == data) {

                prev.next = temp.next;

                this.size--;

                return temp.data;


            }


            prev = temp;

            temp = temp.next;
           

        }

        return null;

    }

    display() {

        var temp = this.first;

        var str = "";

        while (temp) {

            str = str + " " + temp.data;

            temp = temp.next;

        }

        return str;

    }

    isEmpty() {

        return this.size == 0;

    }

    insertFirst(element) {

        var n = new Node(element);

        if (this.first == null) {

            this.first = n;

            this.size++;

            return;

        } else {

            n.next = this.first;

            this.first = n;

            this.size++;

            return;

        }

    }

    deleteFirst() {

        if (this.first == null) {

            return;

        }

        var n = this.first.data;

        this.first = this.first.next;

        this.size--;

        return n;

    }

    printList() {

        try {

            var curr = this.first;

            var str = "";

            while (curr) {

                str += curr.data + " ";

                curr = curr.next;

            }

            return str
        } catch (error) {

            console.log(error.message);

        }

    }

    add(data) {

        try {

            var node = new Node(data);

            var current = this.first;

            if (this.first == null) {

                this.first = node;

            } else {

                current = this.first;

                while (current.next) {

                    current = current.next;

                }

                current.next = node;

            }

            this.size++;

        } catch (error) {

            console.log(error.message);

        }

    }

    removeItem(data) {

        try {

            var current = this.first;

            var prev = null;



            while (current != null) {



                if (current.data == data) {

                    if (prev == null) {

                        this.first = current.next;

                    } else {


                        prev.next = current.next;

                    }

                    this.size--;

                    return true;

                }

                prev = current;

                current = current.next;

            }

            return false;

        } catch (error) {

            console.log(error.message);

        }

    }
    sort() {

        var temp;


        temp = this.first;

        var p = this.size;

        while (p > 0) {

            temp = this.first;


            while (temp.next !== null) {

                if (parseInt(temp.data) >parseInt(temp.next.data)) {

                    var t = parseInt(temp.data);

                    temp.data = parseInt(temp.next.data);

                    temp.next.data = parseInt(t);

                }

                temp = temp.next;

            }

            p--;

        }

    }

}
module.exports = {
    LinkedList
}


