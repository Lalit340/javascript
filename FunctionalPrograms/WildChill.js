
/*****************************************************************
 * @purpose :: For generating effective Temperature  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 05-03-19
 ****************************************************************/

 var ul = require('./Utility');
 var rd = require('readline-sync');

 //call function 
 effectiveTemp();

 function effectiveTemp(){
    var  speed ,temp ;
    try{
    var temp = rd.question('Enter temperature value ::');
    var  speed = rd.question('Enter speed value ::'); 
     
    ul.getEffective(temp ,speed);

   }catch(err){
       console.log(err);
   }
 }
