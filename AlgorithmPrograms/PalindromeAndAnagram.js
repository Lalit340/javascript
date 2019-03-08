
/*****************************************************************
 * @purpose ::  For Finding  0 to 1000 Palindrome And Anagram Values  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 06-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');

//call function
getPalAnagram();

function getPalAnagram(){
    var num ;
    var prime=null;
  //  var ch=[];
    try{
      num = rd.question('Enter a integer number ::');
      prime = ul.getPrimeNumber(num);
      prime = prime.trim();
    //  console.log('haii'+prime);
      ch = prime.split('  ');
     //   console.log(ch);
       ul.palindromAnagram(ch);
    }catch(err){
        console.log(err);
    }
}//getPalAnagram()

  