
/*****************************************************************
 * @purpose :: For generating Coupons code without having same coupon code  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 04-03-19
 ****************************************************************/

 var ul = require('./Utility');
 var rd = require('readline-sync');

 var num=rd.question('Enter a number ::');
 //call method
 ul.getCoupon(num);