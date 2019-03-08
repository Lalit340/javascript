
/*****************************************************************
 * @purpose ::  For Merge sorting   Number values  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 08-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');


//call function
sortMerge();

function sortMerge(){
    var n ,a,array = [] ,i , temp;
     try{
         n = rd.question('Enter array size value :: ');
   
     for(i = 0;i < n ; i++){
        array[i] = rd.question('Enter a Number :: ');
        
      }
      

  //   array = ul.createArray(n);
         //call super method for search value
      temp = ul.sort(array);
      console.log(temp);

     }catch(err){
         console.log(err);
     }
}