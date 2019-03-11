/************************************************* 
*@Purpose : Replacing String value
* @author  :: Lalit Pradhan
* @version :: 1.0.0
* @Since   :: 04-03-19
*************************************************************/

//utility object
var u = require('./Utility');
//readline for reading values
var rl = require('readline-sync');

//cal function
replacer();

function replacer() {
    //read values
    var str1;
    try {
        str1 = rl.question("Enter a string:");


        //calling supper method
        u.replace(str1);
    } catch (err) {
        console.log(err);
    }
}
