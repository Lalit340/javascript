

/*****************************************************************
 * @purpose ::  For finding  Day Of the date 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 08-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');


//call function
getMonthlyPay();

function getMonthlyPay(){
    var  p , r , y;
  try{
    // read input values
  p = rd.question('Enter Principal amount ::');
  r = rd.question('Enter Rate of Interest ::');
  y = rd.question('Enter year ::');

  console.log(' monthly payment is ::'+ ul.getPayment(p , r , y));
  }
  catch(err){
      console.log(err);
  }

}
