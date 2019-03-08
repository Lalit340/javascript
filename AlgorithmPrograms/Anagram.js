
/*****************************************************************
 * @purpose ::  For Finding  two Strings are anagram or not 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 06-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');



// call function
anagram();


function anagram(){
  try{
    var str1 = rd.question('Enter First string value ::');
    var str2 = rd.question('enter second string value ::');
    //calling super method
    if(ul.findAnagram(str1 ,str2)){
        console.log(str1+' and '+str2+' are anagram ');    
   
         }
    else
      console.log(str1+' and '+str2+' are not anagram ');
  }
  catch(err){
    console.log(err);
   }
}//function