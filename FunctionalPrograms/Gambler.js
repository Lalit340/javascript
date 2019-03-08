

/*****************************************************************
 * @purpose :: For gambler Program
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 04-03-19
 ****************************************************************/

 var ul = require('./Utility');
 var rd = require('readline-sync');

 var stake = rd.question('enter a amount ::');
 var goal  = rd.question('enter target value ::');
 var trial = rd.question('how many time you want to bet ::');

 //call methodn
 ul.gambler(stake ,goal ,trial);