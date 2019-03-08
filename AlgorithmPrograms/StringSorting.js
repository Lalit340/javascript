
/*****************************************************************
 * @purpose ::  For sortting   String words  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 08-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');


//call function
sortString();

function sortString(){
    var str ,array = [] , temp;
     try{
         str  = rd.question('Enter Sentence of words value :: ');
         str = str.trim();
         array = str.split(' ');
  
      

         //call super method for search value
      temp = ul.insertionSort(array );
      console.log(temp);

     }catch(err){
         console.log(err);
     }
}