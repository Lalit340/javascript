
/*****************************************************************
 * @purpose ::  For Finding  Squar Root Of a Number 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 09-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
//call function
getSquar();

  function getSquar(){
      var num ;
    try{
      num = rd.question('Enter a number :: ');
      
      console.log('Squer root of the number is :: '+ul.getRoot(num));
    }catch(err){
        console.log(err);
    }

  }