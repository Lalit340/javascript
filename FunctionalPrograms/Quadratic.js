

/*****************************************************************
 * @purpose :: purpose for finding a quadratic equation root 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 05-03-19
 ****************************************************************/

 var ul = require('./Utility');
 var rd = require('readline-sync');

 //call function
 equation();
 
 function equation(){
    var a , b ,c; 
    try{
       a = rd.question('enter "a" value  :: ');
       b = rd.question('enter "b" value  :: ');
       c = rd.question('enter "c" value  :: ');

       ul.findRoot(a ,b ,c);
     }catch(err){
         console.log(err.message);
     }
 }//equation()