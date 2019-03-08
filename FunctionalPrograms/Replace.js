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

//read values
var str1 = rl.question("Enter a string:");
var str2 = rl.question('which is u want to replace ?');
var str3 = rl.question('replace value is ::');

//calling supper method
u.replace(str1 ,str2,str3);

