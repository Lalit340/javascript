

/*****************************************************************
 * @purpose ::  For Converting Decimal to binary and again convert to decimal
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 09-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
//call function
  getBinary();

  function getBinary(){
      let num;
    try{   
      num = rd.question('Enter a Number :: ');

      ul.getToBinary(num);

    }catch(err){
        console.log(err);
    }
  }
