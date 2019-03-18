

/*****************************************************************
 * @purpose ::  For Reading Data From JSON File
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 18-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
var up = require('util');
var file = require('fs');

function inventory( ) {

    var text ,object;
    try{
        text = file.readFileSync("InventoryData.json");
         object = JSON.parse(text);

         ul.getInventory(object);
    }catch(err){
        console.log(err);
    }
    
}

//call function
inventory();
