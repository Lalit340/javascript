
/*****************************************************************
 * @purpose ::  For Finding  A number between n-1 value 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 08-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');


//call function
findNumber();

function findNumber(){
    var n , i ,array = [] ,search;
     try{
         n  = rd.question('Enter array value :: ');
         for(i = 0 ;i < n ; i++){
             array[i] =  i+1;
         }
        
         search = rd.question('Enter Which value want to search ');

         //call super method for search value
         ul.binarySearchInt(array , search);
     }catch(err){
         console.log(err);
     }
}