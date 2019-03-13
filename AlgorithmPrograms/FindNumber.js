
/*****************************************************************
 * @purpose ::  For Finding  A number between n-1 value 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 08-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
var file = require('fs');

//call function
findNumber();

function findNumber(){
    var n , i ,array = [] ,search;
     try{
        n  = file.readFileSync('NumberFile.txt' ,'utf-8');
        console.log(n);
        array = n.split(' ');
        
         search = rd.question('Enter Which value want to search :: ');

         //call super method for search value
         ul.binarySearchInt(array , search);
     }catch(err){
         console.log(err);
     }
}