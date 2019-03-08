
/*****************************************************************
 * @purpose :: For finding there is 3 number whose sum is Zero or not  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 05-03-19
 ****************************************************************/

 var ul = require('./Utility');
 var rd = require('readline-sync');

 //cal function
 threeSum();
 
 function threeSum(){
   var size,   num = [],i;
    
   try{
       size = rd.question('Enter how much value of in array you want to store ::');

        for( i=0 ; i < size ; i++){
         num[i] = rd.question('enter some integer Values ::');
 
     }
         //call the Utility Object method
          var msg = ul.findSum(num);
         console.log(msg);

    }catch(err){
        console.log(err)
    }
    
 }