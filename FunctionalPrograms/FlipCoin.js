
/*****************************************************************
 * @purpose :: For FlipCoin Whether the coin is Head or Tail
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 04-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');


//call function
getCoin();

function getCoin() {
    try {
        var flipCoin = rd.question('enter a number ::');

        //calling supper method 
        ul.flipCoin(flipCoin);
    }
    catch (err) {
        console.log(err);
    }
}