
/*****************************************************************
 * @purpose :: For generating Two Dimensional array  
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 05-03-19
 ****************************************************************/

 var ul = require('./Utility');
 var rd = require('readline-sync');

 var rows = rd.question('Enter row size how much you want ::' );
 var cols = rd.question('Enter Colunm values how much you want ::');

 //call method of utility object
 ul.arrayGenerate(rows ,cols);