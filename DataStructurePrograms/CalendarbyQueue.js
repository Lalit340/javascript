
/*****************************************************************
 * @purpose ::  For  Printing Calendar with using Queue
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 15-03-19
 ****************************************************************/

var ul = require('./Utility');
var aUl = require('../AlgorithmPrograms/Utility');
var rd = require('readline-sync');
var up = require('util');
var que = require('./Queue');

//calling function
getCalendar();

function getCalendar() {
    var day, month, year, dayNum ,q;
    var months = [], days = [], i, j;
    var size ,data;
    try {
        //creating object of queue
        q = new que.Queue();
        day = '1';
        month = rd.question('Enter a Month ::');
        year = rd.question('Enter a Year ::');

        months = ["", "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"];

        days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (month == 2 && ul.leapYear(year) ) {
            days[month] = 29;
        }else{
            console.log('Not a leapYear  ::');
        }

        daynum = aUl.getDayOfWeek(year, month, day);

        console.log('su  mo  tu  we  th  fr  sa');
        for (i = 0; i < daynum; i++) {
           up.print('    ');
        }
       // adding the elements to queue
        for(j = 1 ; j <= days[month] ; j++){
            q.enqueue(j);
        }
        
        size = q.getSize();
        
        for (j = 1; j <= size ; j++) {
            data = q.dequeue();
         
            if (data < 10)
                up.print('0' + data + '  ');
            else
                up.print(data + '  ');

            if ((j + daynum) % 7 == 0 || (j == days[month]))
                console.log();

        }

    } catch (err) {
        console.log(err);
    }

}