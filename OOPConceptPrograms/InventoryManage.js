

/*****************************************************************
 * @purpose ::  For Reading Data From JSON File Managing the Objects
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 19-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
var up = require('util');
var file = require('fs');

function inventoryManage( ) {

    var data , object ;
    try{
        data = file.readFileSync('StockReport.json');

        object =JSON.parse(data);

        ul.getInventoryManage(object);
    
    }catch(err){
        console.log(err);
    }
    
}

//calling function
inventoryManage( ) ;