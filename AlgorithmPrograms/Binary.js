

/*****************************************************************
 * @purpose ::  For Converting Decimal to binary and Swap nibbles and find the new number.
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 09-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
//call function
  getNewNumber();

  function getNewNumber(){
      let num;
    try{   
      num = rd.question('Enter a Number :: ');

      ul.getBinary(num);

    }catch(err){
        console.log(err);
    }
  }
