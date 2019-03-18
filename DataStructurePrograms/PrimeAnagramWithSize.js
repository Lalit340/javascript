
/*****************************************************************
 * @purpose ::  For  Printing Prime Numbers And Anagrams using 2D array
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 16-03-19
 ****************************************************************/

var ul = require('./Utility');
var aUl = require('../AlgorithmPrograms/Utility');
var rd = require('readline-sync');
var up = require('util');

//calling function
printAnagram();

function printAnagram() {

    var num , arr =[];
    try{
    num = rd.question('Enter a number :: ');
   

    ul.getPrimeAnagram(num);
  // console.log(arr);
    }catch(err){
        console.log(err);
    }
    
}