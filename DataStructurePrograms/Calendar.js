
/*****************************************************************
 * @purpose ::  For  Printing Calendar
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 14-03-19
 ****************************************************************/

var ul = require('./Utility');
var aUl = require('../AlgorithmPrograms/Utility');
var rd = require('readline-sync');
var up = require('util');

//calling function
getCalendar();

function getCalendar() {
    var day, month, year, dayNum;
    var months = [], days = [], i, j;
    try {
        day = process.argv[2];
        month = process.argv[3];
        year = process.argv[4];

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

        for (j = 1; j <= days[month]; j++) {
            if (j < 10)
                up.print('0' + j + '  ');
            else
                up.print(j + '  ');

            if ((j + daynum) % 7 == 0 || (j == days[month]))
                console.log();

        }

    } catch (err) {
        console.log(err);
    }

}