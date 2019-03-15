
/*****************************************************************
 * @purpose ::  For Reading Data From input as Expression and 
 *            check the Expressions Are Balanced or Not .
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 13-03-19
 ****************************************************************/

var ul = require('./Utility');
var list = require('./Stack');
var rd = require('readline-sync');


var stk = stk = new list.Stack();
//call function
EvalutionOfStack();


function EvalutionOfStack() {
    var exp, len, i, ch;

    exp = rd.question('Enter An Expression ::');
    len = exp.length;
    //creating stack object

    for (i = 0; i < len; i++) {
        ch = exp.charAt(i);

        if (ch == '(') {
            stk.push(i);
        } else if(ch == ')'){
            stk.pop();
        }//else
    }//for

}//function


if (stk.size() == 0)
    console.log('Parenthesis are balanced ');
else
    console.log('Parenthesis are not balanced ');
