/*
*
*  Main Utility class for implementing all logics
*
*/

var ul = require('./Utility');
var rd = require('readline-sync');
var file = require('fs');

module.exports = {


       /*******************************************************************************
        * 
        * ************** UnoderedList Operation Like Reading txt file and spliting the file data
        * 
        * 
        ***********************************************************************************/

       readSplit(text) {
              var data, array = [];
              data = file.readFileSync(text, 'utf-8');
              array = data.split(' ');
              console.log(array);
              return array;
       },//readSplit()



       
}