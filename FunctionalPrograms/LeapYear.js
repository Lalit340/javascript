
/*****************************************************************
 * @purpose :: For Finding Leap Year 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 04-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');

var year=rd.question('Enter a year ::\n');

//call the method
ul.leapYear(year); 
