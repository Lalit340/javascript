
/*****************************************************************
 * @purpose :: Stopwatch Program for tracking start time and stop time
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 05-03-19
 ****************************************************************/

 var ul = require('./Utility');
 var rd = require('readline-sync');

 var start ,end;
 //calling the function
 stopWatch(); 


 function stopWatch(){
    let no; 
    let t;
    try{
        //enter no. for Start watch
       no = rd.question('Enter "1" for start-watch ::');
       if(no == 1)
         start =  ul.startTime();
        else
           throw "enter 1 any other num not allow";
        //enter second time no  for stop Watch   
           no = rd.question("Enter '0' for stop Watch ::");
           if(no == 0)
             end =  ul.stopTime();
           else
                throw "enter 0 any other num not allow";
          //calculating the time aof running

           t= getElapsedTime();

           console.log('time with milliSecond :: '+t*1000);
           console.log('time with seconds  :: '+t);

     }catch(err){
         console.log(err);
     }

 }//stopWatch()


  function getElapsedTime(){
   //returning the elapsed time 
    return  (end-start);
   }//getElapsedTime()