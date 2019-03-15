
/*****************************************************************
 * @purpose ::  For Reading 0-1000 From input and Finding Prime & Anagram 
 *              Numbers , Storing in queue and printing the all anagrams
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 14-03-19
 ****************************************************************/

var ul = require('./Utility');
var dque = require('./Queue');
var rd = require('readline-sync');

//call function
getAnagram();

function getAnagram() {

    var num;
    try {
        num = rd.question('Enter a number ::');
        //call util class method
        ul.primeAnagram(num);

    } catch (err) {
        console.log(err);
    }
}