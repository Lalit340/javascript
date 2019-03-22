
/*****************************************************************
 * @purpose ::  Super class Of AddressBook For loose coupling all method are return in this class .
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 22-03-19
 ****************************************************************/

var rd = require('readline-sync');
var up = require('util');
var file = require('fs');



class Book {

    addressBook(obj) {
        let num;
        console.log('# Person Address Book ');
        console.log('1. add person \n2. remove person \n3. edit person \n4. sort by lastName \n5. sort by Zip code \n6. Display Book');
        num = rd.questionInt('Choose one above number ::');

        switch (num) {
            case 1: this.addPerson(obj);
                break;

            case 2: this.deletePerson(obj);
                break;

            case 3: this.editBook(obj);
                break;

            case 4: this.sortByLName(obj);
                break;

            case 5: this.sortByZipCode(obj);
                break;

            case 6: this.display(obj);
                break;

            default:
                console.log('Enter a valid number ');
        }

    }//addressBook(obj)

    addPerson(obj) {
        let firstName, lastName, address, ID, zipCode;
        firstName = rd.question("Enter first name:");
        lastName = rd.question("Enter last name:");
        address = rd.question("Enter address:");
        ID = rd.questionInt("Enter id:");
        zipCode = rd.questionInt("Enter zip code:");
        obj.person.push({
            "firstName": firstName,
            "lastName": lastName,
            "address": address,
            "ID": ID,
            "zipCode": zipCode
        });
        //write the obj in JSON file
        file.writeFileSync('AddressBook.json', JSON.stringify(obj));
        this.addressBook(obj);
    }//addPerson(obj)

    editBook(obj) {
        let i, fName, bkObj, key, value, num, adds, id;
        bkObj = obj.person;
        fName = rd.question('Enter first name of Customer  :: ');
        value = -1;
        for (i = 0; i < obj.person.length; i++) {
            for (key in obj.person[i].firstName) {
                if (bkObj[key].firstName == fName) {
                    value = key;
                    console.log(obj.person[value]);
                    break;
                }
            }
        }

        if (value == -1)
            throw 'There is no person like your enter name ';

        console.log('1. Edit address \n2. edit ID \n3. edit zipCode');
        num = rd.questionInt('Choose a number ::');

        switch (num) {
            case 1: adds = rd.question('Enter Address ::');
                bkObj[value].address = adds;

                break;
            case 2: id = rd.questionInt('Enter an ID ::');
                bkObj[value].ID = id;

                break;

            case 3: zipCode = rd.questionInt('Enter zipCode ::');
                bkObj[value].zipCode = zipCode;

                break;

            default:
                console.log('Enter a valid number ');

        }

        //write the obj in JSON file
        file.writeFileSync('AddressBook.json', JSON.stringify(obj));
        this.addressBook(obj);
    }//editBook()

    deletePerson(obj) {
        let fName, i, key, value, index;

        fName = rd.question('Enter first name of Customer  :: ');
        value = -1;
        for (i = 0; i < obj.person.length; i++) {

            if (obj.person[i].firstName == fName) {

                console.log(obj.person[i]);
                index = obj.person.indexOf(obj.person[i]);

                obj.person.splice(index, 1);
                console.log('Deleted Successfully .......')
                break;
            }
        }
        //write the obj in JSON file
        file.writeFileSync('AddressBook.json', JSON.stringify(obj));
        this.addressBook(obj);

    }//deletePerson(obj)

    display(obj) {
        let key;
        for (key in obj.person) {
            console.log(obj.person[key]);
        }
        this.addressBook(obj);
    }//display(obj)

    sortByLName(obj) {
        let i, j, temp;
        for (i = 0; i < obj.person.length; i++) {
            for (j = 0; j < obj.person.length - 1; j++) {
                if (obj.person[j].lastName.localeCompare(obj.person[j + 1].lastName) == 1) {
                    temp = obj.person[j];
                    obj.person[j] = obj.person[j + 1];
                    obj.person[j + 1] = temp;
                }
            }
        }
        console.log(obj);
        //write the obj in JSON file
        file.writeFileSync('AddressBook.json', JSON.stringify(obj));
        this.addressBook(obj);

    }//sortByLName(obj)


    sortByZipCode(obj) {
        let i, j, temp;
        for (i = 0; i < obj.person.length; i++) {
            for (j = 0; j < obj.person.length - 1; j++) {
                if (obj.person[j].zipCode > obj.person[j + 1].zipCode) {
                    temp = obj.person[j];
                    obj.person[j] = obj.person[j + 1];
                    obj.person[j + 1] = temp;
                }
            }
        }
        console.log(obj);
        //write the obj in JSON file
        file.writeFileSync('AddressBook.json', JSON.stringify(obj));
        this.addressBook(obj);

    }//sortByZipCode(obj)
}

module.exports = {
    Book
}