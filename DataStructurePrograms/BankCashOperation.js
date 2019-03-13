
/*****************************************************************
 * @purpose ::  For Reading Data From input to add queue and 
 *              doing some operations like Withdraw balance or deposite Balance .
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 13-03-19
 ****************************************************************/

var ul = require('./Utility');
var que = require('./Queue');
var rd = require('readline-sync');

//call function
bank();

function bank() {
    var num, i, name1, name2, balance, temp, deposite, withdraw;
    var q = new que.Queue();
    try {
        num = rd.question('Enter how much people are in line ::');

        for (i = 0; i < num; i++) {
            name1 = rd.question('Enter a name ::');
            q.enqueue(name1);
        }
        if (q.isEmpty())
            throw 'Queue is Empty !';
        for (i = 0; i < num; i++) {
            name2 = q.dequeue();

            balance = 1000;

            temp = rd.questionInt('Welcome Mr/Mrs/Miss '+name2 + ' Enter 1 for Deposite and 2 For withdraw  ::');
            if (temp == 1 || temp == 2) {
                switch (temp) {
                    case 1: deposite = parseInt(rd.question('Enter Deposite Amount ::'));
                        balance += deposite;
                        console.log(name2 + ' your deposite is success  and your balance is :: ' + balance);
                        console.log();
                        break;
                    case 2: withdraw = parseInt(rd.question('Enter Withdraw Amount ::'));
                        if (withdraw > balance) {
                            throw 'Insufficient Balance Please Enter some valid amount ';
                        } else {
                            balance -= withdraw;
                            console.log(name2 + ' your withdraw is succeded and your main balance is :: ' + balance);
                            console.log();
                        }
                        break;

                }
            } else
                console.log('Enter a valid Number ');
                continue ;
        }
    } catch (err) {
        console.log(err);
    }
}