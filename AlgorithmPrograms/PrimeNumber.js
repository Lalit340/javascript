
/*****************************************************************
 * @purpose ::  For Finding  0 to 1000 prime Numbers  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 06-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');

//call function
getPrime();

function getPrime(){
    try{
       var num = rd.question('Enter a integer  number ::');
       if(num >= 1 ){
           //call super method
           ul.getPrimeNumber(num);
       }else{
           throw 'enter a valid number';
       }
    }catch(err){
        console.log(err);
    }
}//getPrime