

/*****************************************************************
 * @purpose ::  For Mantaining Records On Address Book .
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 22-03-19
 ****************************************************************/

var rd = require('readline-sync');
var up = require('util');
var file = require('fs');


var cls = require('./AddressBookRecords');

class AddressBook {
    getBook() {
        var data, object , book;
        try {
            book = new cls.Book();
            data = file.readFileSync('AddressBook.json', 'utf8');
            object = JSON.parse(data);
            //calling the utility class method
            book.addressBook(object);
        } catch (err) {
            console.log(err);
        }
    }
}
//calling function
// getBook();

var adb = new AddressBook();
adb.getBook();