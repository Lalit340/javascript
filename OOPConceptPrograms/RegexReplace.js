

/*****************************************************************
 * @purpose ::  For Replacing Name to a Text file
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 18-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
var up = require('util');
var file = require('fs');

function regex() {
    var data, str, name, fullName, phNo, dt, date;
    try {
        data = file.readFileSync("Replacer.txt");
        str = data.toString();

        //Entering Name and Name Validation
        name = rd.question(' Enter a name :: ');
        if (!isNaN(name))
            throw 'Enter a valid name ';

        //Entering FullName And FullName Validation
        fullName = rd.question('Enter Your Full name ::');
        if (!isNaN(fullName))
            throw 'Enter a valid Full name  ';

        //Entering Phone number And Phone Nunmber validation
        phNo = rd.question('Enter a phone Number ::');
        if ( phNo.length != 10 || isNaN(phNo))
            throw 'Enter a 10 digit mobile Number';



        //creating date object
        dt = new Date();

        //reading day, month , year of date object
        date = dt.getDay() + '-' + (dt.getMonth() + 1) + '-' + dt.getFullYear();
        console.log(date);

        ul.getReplacer(str, name, fullName, phNo, date);



    } catch (err) {
        console.log(err);
    }

}

//call functiion
regex();
