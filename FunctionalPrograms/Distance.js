
/*****************************************************************
 * @purpose :: For generating Two Dimensional array  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 05-03-19
 ****************************************************************/

 var ul = require('./Utility');
 var rd = require('readline-sync');

 var x= rd.question('enter x distance  ::');
 var y= rd.question('Enter y distance ::');

 ul.findDistance(x ,y);