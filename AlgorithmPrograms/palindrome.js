
/*****************************************************************
 * @purpose ::  For Finding   Palindrome  Values  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 06-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');

//call function 
sendNumber();

function sendNumber(){
  var num1 = rd.question('Enter a number :: ');
  var num2 = rd.question('Enter a number :: ');

  if(ul.getPalindrome(num1 , num2)){
    console.log(num1+' and '+num2+' are  palindrome');
   }
   else{
    console.log(num1+' and '+num2+' are  not palindrome');
   }
}