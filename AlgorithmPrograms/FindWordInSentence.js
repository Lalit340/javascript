
/*****************************************************************
 * @purpose ::  For Finding  A String between some String words  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 08-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');


//call function
findWord();

function findWord(){
    var n , i ,array = [] ,search;
     try{
         n  = rd.question('Enter Sentence of words value :: ');
         n = n.trim();
         array = n.split(' ');
  
         search = rd.question('Enter Which value want to search ');

         //call super method for search value
         ul.binarySearchString(array , search);

     }catch(err){
         console.log(err);
     }
}