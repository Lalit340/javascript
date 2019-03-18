
var ul = require('./Utility');
var file = require('fs');
var rd = require('readline-sync');

module.exports = {


    /************************************************************************** 
     * 
     * ********* JSON Inventory Data Management of Rice, Pulses and Wheats *************
     * 
    ************************************************************************/
    getInventory(obj) {
        var ch, weight, i;
        console.log('Choose a number \n 1. Rice \n 2.pulses \n 3. Wheats ');
        ch = rd.questionInt('Enter a choice ::');
        console.log();

        switch (ch) {
            case 1: weight = rd.question('Enter Some Weight of Rice ::');
                for (i = 0; i < obj.Rice.length; i++) {
                    console.log(obj.Rice[i].name + ' price per kg is ' + obj.Rice[i].price + ' for weight of ' + weight + ' of price is ' + weight * obj.Rice[i].price);
                }
                break;

            case 2: weight = rd.question('Enter Some Weight of Pulses ::');
                for (i = 0; i < obj.Pulses.length; i++) {
                    console.log(obj.Pulses[i].name + ' price per kg is ' + obj.Pulses[i].price + ' for weight of ' + weight + ' of price is ' + weight * obj.Pulses[i].price);
                }
                break;

            case 3: weight = rd.question('Enter Some Weight of Wheats ::');
                for (i = 0; i < obj.Wheats.length; i++) {
                    console.log(obj.Wheats[i].name + ' price per kg is ' + obj.Wheats[i].price + ' for weight of ' + weight + ' of price is ' + weight * obj.Wheats[i].price);
                }
                break;

            default : console.log('Invalid Number Entered ');    
        }

    },//getInventory(obj)



    /************************************************************************** 
     * 
     * ********* Using JSON replacing String Values  *************
     * 
    ************************************************************************/


   getReplacer(str, name, fullName, phNo, date){
 
     

      str = str.replace("<<name>>" , name);
      
      str = str.replace("<<full name>>" , fullName);

      str = str.replace("xxxxxxxxxx" , phNo);
     
      str = str.replace("XX/XX/XXXX" , date);

      console.log(str);

   }
}