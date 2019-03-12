



var rd = require('readline-sync');



// User defined class node 
class Node {
    // constructor 
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

// user dafine LinkedList class
class LinkedList {

    //constructor
    constructor() {
        this.length = 0;
        this.head = null;
    }

    //add method for adding elements
    add(val) {
        var  n, current ;
        
        n = new Node(val);

        if (this.head == null) {
            this.head = n;

        } else {
             current = this.head;
            while (current.next) {
                current = current.next;
            }//while
            current.next = n;

        }//alse
        this.length++;
    }//add

    size() {
        return this.length;
    }


    //Insert element s where you want of the list 
    insert(element, index) {
        var node, curr, it;
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            node = new Node(element);


            curr = this.head;

            // add the element to the 
            // first index 
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                it = 0;

                // iterate over the list to find 
                // the position to insert 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }




    // removes an element from the 
    // specified location 
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element 
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the 
                // position to removce an element 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element 
                prev.next = curr.next;
            }
            this.length--;

            // return the remove element 
            return curr.element;
        }
    }


    // removes a given element from the 
    // list 
    remove(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.length--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }


    // finds the index of element 
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list 
        while (current != null) {
            // compare each element of the list 
            // with given element 
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found 
        return -1;
    }

    //search method for searching an element
    search(dt){

        var data ;
        if(this.head == null)
          return false;

        //operation
        data = this.head ;
        while(data){
            if(data == dt){
                return true ;
            }
                data = this.head.next;
           
        }//while

          return false;
    }

    //is empty method for find the list empty or not
    isEmpty() {
        return this.length == 0;
    }


    // prints the list items 
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }
}

module.exports={
    LinkedList
}

var l = new LinkedList();

l.add(10);
console.log(l.search(10));

