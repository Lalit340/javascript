

/*****************************************************************
 * @purpose ::  For Managing Shares and its price count 
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 19-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
var up = require('util');
var file = require('fs');

function stockReport( ) {

    var data ,strData;
    try{
    data = file.readFileSync("StockReport.json");
     strData = JSON.parse(data);

     //calling super method
     ul.getStockReports(strData);
    }catch(err){
        console.log(err);
    }

    
}

//calling function

stockReport( );