

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

class Clinic {

    getCliniqueRecords(object) {
        let num;
        console.log('1. search doctor \n2. search patient \n3. add doctor \n4. add patient \n5. appointment \n6. specialist ');
        num = rd.questionInt('choose a number ::');

        switch (num) {
            case 1: this.searchDoctor(object);

                break;
            case 2: this.searchPatient(object);

                break;
            case 3: this.addDoctor(object);

                break;
            case 4: this.addPatient(object);

                break;
            case 5: this.appointment(object);

                break;
            case 6: this.specialist(object);

                break;
            default:
                console.log('Choose a valid number ');
        }

    }//getCliniqueRecords(object)

    addDoctor(obj) {
        let drName, id, avail, spec, imfo;
        drName = rd.question('Enter a Doctor name :: ');
        id = rd.question('Enter id :: ');
        avail = rd.question('Enter availavility of doctor am or pm ::');
        spec = rd.question("Enter Doctor's  speciality :: ");
        imfo = {
            "drName": drName,
            "drId": id,
            "speciality": spec,
            "availability": avail,
            "NoOfAppointment": 0
        };
        obj.doctor.push(imfo);
        // write object data into JSOn file
        file.writeFileSync('Clinique.json', JSON.stringify(obj));
        this.getCliniqueRecords(obj);

    }//addDoctor(obj)

    addPatient(obj) {
        let pName, pId, phNo, age;
        pName = rd.question('Enter Patient name :: ');
        pId = rd.question('Enter Patient Id    ::');
        phNo = rd.question('Enter Patient mobile number ::');
        age = rd.question('Enter Patient age ::');
        obj.patient.push({
            "pName": pName,
            "pId": pId,
            "mobNo": phNo,
            "age": age
        });
        // write object data into JSOn file
        file.writeFileSync('Clinique.json', JSON.stringify(obj));
        this.getCliniqueRecords(obj);
    }//addPatient(obj)

    appointment(obj) {
        let drName, pName, time, key, i;
        drName = rd.question('Enter doctor Name :: ');
        pName = rd.question('Enter Patient name :: ');
        time = rd.question('Enter timing for Appointment like am ,pm or both :: ');
        i = -1;
        for (key in obj.doctor) {
            if (obj.doctor[key].drName == drName) {
                i = key;
            }
        }

        if (i != -1) {
            if (obj.doctor[i].appointment < 8) {
                if (obj.doctor[i].availability == time) {
                    obj.cliniqueAppointment.push({
                        "drName": drName,
                        "pName": pName,
                        "time": time
                    });
                    obj.doctor[i].NoOfAppointment++;
                    console.log('Appontment Booked')
                } else {
                    console.log('In this time doctor not available ');
                }
            } else {
                console.log('all slots of appointment are filled ');
            }
        } else {
            console.log('In this Name do not have any Doctor ');
        }

        // write object data into JSOn file
        file.writeFileSync('Clinique.json', JSON.stringify(obj));
        this.getCliniqueRecords(obj);
    }//appointment(obj)


    searchDoctor(obj) {
        let name, i, num, id, spec;
        console.log('#Doctor Details ');
        console.log('1. Search by Name \n2. search by Id \n3. search by Speciality \n4. search by Availability ');
        num = rd.questionInt('Choose a number of above :: ');
        switch (num) {
            case 1: name = rd.question('Enter Doctor Name :: ');
                for (i in obj.doctor) {
                    if (obj.doctor[i].drName == name) {
                        console.log(obj.doctor[i]);
                    }
                }

                break;

            case 2: id = rd.questionInt('Enter Doctor ID:: ');
                for (i in obj.doctor) {
                    if (obj.doctor[i].drId == id) {
                        console.log(obj.doctor[i]);
                    }
                }

                break;

            case 3: spec = rd.question('Enter Doctor Speciality :: ');
                for (i in obj.doctor) {
                    if (obj.doctor[i].speciality == spec) {
                        console.log(obj.doctor[i]);
                    }
                }

                break;

            case 4: avail = rd.question('Enter Doctor availability :: ');
                for (i in obj.doctor) {
                    if (obj.doctor[i].availability == avail) {
                        console.log(obj.doctor[i]);
                    }
                }

                break;

            default: console.log('Enter a valid number ');

        }

        this.getCliniqueRecords(obj);
    }//searchDoctor(obj)



    searchPatient(obj) {
        let name, i, num, id, spec;
        console.log('#Patient Details ');
        console.log('1. Search by Name \n2. search by Id \n3. search by mobile number ');
        num = rd.questionInt('Choose a number of above :: ');
        switch (num) {
            case 1: name = rd.question('Enter patient Name :: ');
                for (i in obj.patient) {
                    if (obj.patient[i].pName == name) {
                        console.log(obj.patient[i]);
                    }
                }

                break;

            case 2: id = rd.questionInt('Enter patient ID:: ');
                for (i in obj.doctor) {
                    if (obj.patient[i].pId == id) {
                        console.log(obj.patient[i]);
                    }
                }

                break;

            case 3: mob = rd.questionInt('Enter patient Speciality :: ');
                for (i in obj.patient) {
                    if (obj.patient[i].mobNo == mob) {
                        console.log(obj.patient[i]);
                    }
                }

                break;


            default: console.log('Enter a valid number ');

        }

        this.getCliniqueRecords(obj);
    }//searchDoctor(obj)


    specialist(obj) {
        let speciality, key, i = 0;
        speciality = rd.question("Enter speciality:");
        for (key in obj.doctor) {
            if (obj.doctor[key].speciality == speciality) {
                console.log("Doctor name:" + obj.doctor[key].drName);
                console.log("Availability:" + obj.doctor[key].availability);
                i++;
            }
        }
        if (i == 0)
            console.log("No doctors with this speciality");

        this.getCliniqueRecords(obj);
    }// specialist(obj)

}

module.exports = {
    Clinic
}