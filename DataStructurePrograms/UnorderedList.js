

var ul = require('./Utility');
var list = require('./LinkedList');
var rd = require('readline-sync');
var fs = require('fs');


//call function
getList();

function getList() {
    var arr = [], len, i, val;
    //creating list object
    link = new list.LinkedList();
    //call utility class method
    try {
        arr = ul.readSplit('MyText.txt');
        len = arr.length;
        //for loop for adding element in linkedlist
        for (i = 0; i < len; i++) {
            link.add(arr[i]);
        }

        console.log(link.printList());

        //read value form input
        val = rd.question('Enter a word ::');

        if (link.search(val)) {
            console.log(link.remove(val));
        } else {
            link.add(val);
        }

        console.log(link.printList());
    } catch (err) {
        console.log(err);
    }

}

