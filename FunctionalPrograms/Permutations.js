
/*****************************************************************
 * @purpose :: For generating Strings different permutations and combinations  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 05-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
//call function
stringOperations();

function stringOperations(){
      try{
         let str = rd.question(' Enter a String value ::');

         //call utility object method
         ul.permutations(str.split('') , 0);
      }
      catch(err){
        console.log(err.message);
     }
}