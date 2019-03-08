
/*****************************************************************
 * @purpose :: For Finding Harmonic Numbers
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 04-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');

var harNum=rd.question('Enter a number ::');


ul.harmonicValue(harNum);