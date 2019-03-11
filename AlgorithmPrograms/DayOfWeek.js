

/*****************************************************************
 * @purpose ::  For finding  Day Of the date 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 08-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');

//call fuction
getDay();

function getDay(){
    var d, m , y ,day = [],num , da =[] ,j;
   try{ 
    d = rd.question('Enter a date ::');
   //if for date validation 
    if(d < 1 || d > 31)
        throw 'Enter valid date ::';
        
   
    m = rd.question('Enter a month :: ');
    //if for month validation
    if(m < 1 || m > 12)
        throw 'Enter valid month ::';
       
    
       
      y = rd.question('Enter a year ::');
        da = y.split('');
       j=da.length;

       // if condition for year validation
       if(j < 4 || j > 4)
        throw 'Enter a valid with full qualified year ';
       
      num = ul.getDayOfWeek(y ,m ,d);

     day = ['sunday' , 'monday' , 'tuesday' , 'wednesday' , 'thursday' , 'friday' ,'saturday'];

     
         console.log('the day of the date is ::'+day[num]);
     
   
    
   }catch(err){
       console.log(err);
   }
}