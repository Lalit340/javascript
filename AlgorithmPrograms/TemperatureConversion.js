
/*****************************************************************
 * @purpose ::  For Finding  temperature to celsius  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 06-03-19
 ****************************************************************/

 var ul = require('./Utility');
 var rd = require('readline-sync');
//call function
 getFahrenheit();

 function getFahrenheit(){
     var temp , celsius , t;
     try{
         temp = rd.question('Enter Temperature in Farhenheit ::');
         t    = rd.question('Enter c or f ::');
         t = t.trim();
         if(t != 'f' && t != 'F' && t != 'c' && t != 'C'){
             throw 'enter a valid character ::';
         }else{
         celsius=ul.getCelsius(temp ,t );
         console.log(' Converted temperature is '+celsius);
         }
     }catch(err){
         console.log(err);
     }
 }