
/*****************************************************************
 * @purpose ::  For Reading Data From input to add Dequeue and 
 *              checking the String is palindrome or not .
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 13-03-19
 ****************************************************************/

var ul = require('./Utility');
var dque = require('./Deque');
var rd = require('readline-sync');

//call function
checkPalindrome();

function checkPalindrome() {
    var dq, palStr, array = [], len, i;
    var str1 = '', str2 = '';

    //creating Deque object
    dq = new dque.Deque();
    try {
        palStr = rd.question('Enter a String ::');
        if (!isNaN(palStr))
            throw 'Enter  string value only';

        palStr = palStr.trim();

        array = palStr.split('');
        len = array.length;

        //for loop for inserting data
        for (i = 0; i < len; i++) {
            dq.addFront(array[i]);
        }

        for (i = 0; i < len; i++) {
            str1 += dq.deleteFront() + '';
        }

        for (i = 0; i < len; i++) {
            dq.addRear(array[i]);
        }

        for (i = 0; i < len; i++) {
            str2 += dq.deleteFront() + '';
        }
        console.log(str1 + " <----------> " + str2);

        if (str1 == str2) {
            console.log(palStr + ' is a Palindrome String ');
        } else
            console.log(palStr + ' is a not  Palindrome String ');
    } catch (err) {
        console.log(err);
    }
}