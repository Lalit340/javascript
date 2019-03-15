

/*****************************************************************
 * @purpose ::  For Reading Data From A file and add The element in LinkedList if is not present
 *              Otherwise remove the Element From the File .
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 09-03-19
 ****************************************************************/

var ul = require('./Utility');
var list = require('./LinkedList');
var rd = require('readline-sync');
var fs = require('fs');


//call function
getList();

function getList() {
    var arr = [], len, i, val, check;
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
        check = link.search(val);

        if (check) {
            link.remove(val);
        } else {
            link.add(val);
        }

        console.log(link.printList());
    } catch (err) {
        console.log(err);
    }

}

