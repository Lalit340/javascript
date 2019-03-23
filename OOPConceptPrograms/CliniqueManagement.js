
/*****************************************************************
 * @purpose ::  Super class Of AddressBook For loose coupling all method are return in this class .
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 22-03-19
 ****************************************************************/

var rd = require('readline-sync');
var up = require('util');
var file = require('fs');
//var ul = require('./Utility');

var clc = require('./Clinic');


function cliniqueRecord(){
   let data , object , clinic;
   try{
       clinic = new clc.Clinic();
       data = file.readFileSync('Clinique.json');
       object = JSON.parse(data);
       clinic.getCliniqueRecords(object);
   }catch(err){
       console.log(err);
   }
}

//calling function
cliniqueRecord();