
/*****************************************************************
 * @purpose ::  For Vending machine Program  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 08-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');

//call function
getNoteCount();


function getNoteCount(){

  var array =[] , price;
  try{ 
    array =[1000,500,200,100,50,20,10,5,2,1];

    price = rd.question('Enter Some Value ::');

    ul.findNote(array , price ,0);
  }catch(err){
    console.log(err);
  }

}
