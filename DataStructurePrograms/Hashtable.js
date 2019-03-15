
var list = require('./LinkedList');
var show = require('util');
class Hashtable {

    // a Constructor
    //intializes the arr variable Array.

    constructor() {
        this.array = [];

    }
    // This method is used to find the hash value where we have to store..


    hash(value) {

        var index = value % 11;
        return index;
       
    }

    // this method is used to add the value in the hash table..

    addHash(value) {
        var index = this.hash(value);

        if (this.array[index] === undefined) {
            this.array[index] = new list.LinkedList();
            this.array[index].add(value);

        } else {

            this.array[index].add(value);
        }

    }
    // this method is used to print the value are present in the hash table 

    print() {
        for (let index = 0; index <= 10; index++) {
            show.print(index + " : ");
            try {
                console.log(this.array[index].printList());

            } catch (err) {
                console.log("NO element");
            }

        }
    }
    search(num) {
        for (let index = 0; index <= 10; index++) {
            show.print(index + " : ");
            try {
                var check = this.array[index].search(num);
                if (check) {
                    this.array[index].remove(num);
                    console.log(this.array[index].printList());
                } else {
                    var index1 = this.hash(num);
                    this.array[index1].add(num);
                    console.log(this.array[index].printList());
                }

            } catch (err) {
                console.log("NO element");
            }

        }
    }
}
module.exports = {
    Hashtable


}
