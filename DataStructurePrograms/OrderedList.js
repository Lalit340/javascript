
/*****************************************************************
 * @purpose ::  For Reading Data From A file and add The element in LinkedList 
 *               and Sort the Number In Ascending Order .
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 09-03-19
 ****************************************************************/

var ul = require('./Utility');
var list = require('./LinkedList');
var rd = require('readline-sync');
var fs = require('fs');


//call function
getAscendingNumber();

function getAscendingNumber() {

    var arr, i, len ,check , val;
    var link = new list.LinkedList();
    arr = ul.readSplit('MyText.txt');
    len = arr.length;
    //forloop for adding elements in LinkedList
    for (i = 0; i < len; i++) {
        link.add(arr[i]);
    }

    link.sort();
    console.log(link.printList());

    val = rd.question(' enter a number ::');

    check = link.search(val);

     if(check){
         link.remove(val);
     }else{
         link.addToPos(val);
     }
     console.log(link.printList());
}