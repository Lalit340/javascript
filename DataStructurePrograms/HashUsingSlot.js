/*****************************************************************
 * @purpose ::   Creating a Slot of 10 to store Chain of Numbers that belong to each 
 *             Slot to efficiently search a number from a given set of number.
 * 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 14-03-19
 ****************************************************************/


var hash = require('./Hashtable');
var rd = require('readline-sync');


//calling function
hashStore();



function hashStore() {
    try {
        var num = rd.question("Enter the number of hash elements :: ");
        if (isNaN(num)) throw "PLZ ENTER A VALID NUMBER "
        var arr = [];
        for (let i = 0; i < num; i++) {
            arr[i] = rd.questionInt("Enter the hash element:")
        }
        console.log(arr);
        var hs = new hash.Hashtable();
        for (let index = 0; index < arr.length; index++) {

            hs.addHash(arr[index]);
        }
        hs.print();
        var num = rd.questionInt("Enter a number u want to search:");
        hs.search(num);
    } catch (err) {
        console.log("ERROR :" + err);

    }
}
