

/*****************************************************************
 * @purpose ::  For Reading Data From JSON File buy share and sell share with using Stack
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 20-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
var up = require('util');
var file = require('fs');
var que = require('../DataStructurePrograms/Queue');

//class of QueueStock
class QueueStock {
    constructor() {
        let company, customer;
        company = file.readFileSync('CompanyShare.json');
        this.comp = JSON.parse(company);
        customer = file.readFileSync('Customer.json');
        this.cust = JSON.parse(customer);
        this.queue = new que.Queue();
    }
}

//class of StockStack 
class StockQueue extends QueueStock {

    addStock() {
        let num;
        console.log('1. buy share \n2. sell share \n3. print company \n4. print customer \n5. save \n6. print stack ');
        try {
            num = rd.questionInt('Choose one number of above :: ');
            if (num > 6 || num < 1)
                throw 'Enter a Currect number ';

            while (num != 0) {
                switch (num) {
                    case 1: this.buyShare();

                        break;
                    case 2: this.sellShare();

                        break;
                    case 3: this.printCompany();

                        break;
                    case 4: this.printCustomer();

                        break;

                    case 5: this.save();

                        break;
                    case 5: this.displayQueue()();


                }
            }
        } catch (err) {
            console.log('An Internal Problem Occured ');
            console.log(err);
        }

    }

    buyShare() {
        let custName, temp = 0, key, comName;
        let symbol, flag , dt;
        dt = new Date();
        custName = rd.question('Enter a  customer name :: ');
        for (key in this.cust.customer) {
            if (this.cust.customer[key].cumName == custName)
                temp++;
        }

        if (temp == 0)
            throw 'Enter a Customer Name Currectly ';


        comName = rd.question('Enter a Company Name :: ');

        flag = false;

        for (key in this.comp.company) {
            if (this.comp.company[key].name == comName) {
                flag = true;
                symbol = this.comp.company[key].symbol;

            }
        }

        if (flag == true) {
            this.buyStock(custName);
            this.queue.enqueue(symbol + 's share bought '+dt.getDate()+'-'+dt.getMonth()+'-'+dt.getFullYear()+'  and time is '+dt.getHours()+':'+dt.getMinutes());
            this.addStock();
        } else
            console.log('Company not found ');

    }

    buyStock(custName) {
        let symbol, i, key, check, num;
        symbol = rd.question('Enter the company symbol which share you want to buy ::');
        check = false;

        for (key in this.comp.company) {
            if (this.comp.company[key].symbol == symbol) {
                i = key;
                check = true;
                break;
            }
        }

        if (check) {
            console.log(this.comp.company);
            num = rd.questionInt('Enter How much share you want to buy :: ');
            for (key in this.cust.customer) {
                if (this.cust.customer[key].cumName == custName) {
                    if (num <= this.cust.customer[key].share) {
                        this.cust.customer[key].share += num;
                        this.comp.company[i].share -= num;
                        return this.comp.company[i].symbol;
                    }
                }
            }
        } else
            console.log('Company Not found ');

    }

    sellShare() {
        let custName ,dt, temp = 0, key, comName;
        let symbol, flag;
        dt = new Date();
        custName = rd.question('Enter a  customer name :: ');
        for (key in this.cust.customer) {
            if (this.cust.customer[key].cumName == custName)
                temp++;
        }
        if (temp == 0)
            throw 'Enter a Customer Name Currectly ';

        comName = rd.question('Enter a Company Name :: ');

        flag = false;

        for (key in this.comp.company) {
            if (this.comp.company[key].name == comName) {
                flag = true;
                symbol = this.comp.company[key].symbol;

            }
        }

        if (flag == true) {
            this.sellStock(custName);
            this.queue.enqueue(symbol + 's share bought '+dt.getDate()+'-'+dt.getMonth()+'-'+dt.getFullYear()+'  and time is '+dt.getHours()+':'+dt.getMinutes());
            this.addStock();
        } else
            console.log('Company not found ');
    }

    sellStock(custName) {
        let symbol, i, key, check, num;
        symbol = rd.question('Enter the company symbol which share you want to sold ::');
        check = false;

        for (key in this.comp.company) {
            if (this.comp.company[key].symbol == symbol) {
                i = key;
                console.log(this.comp.company[i].share);
                check = true;
                break;
            }
        }

        if (check) {
            console.log(this.comp.company);
            num = rd.questionInt('Enter How much share you want to sold :: ');
            for (key in this.cust.customer) {
                if (this.cust.customer[key].cumName == custName) {
                    if (num <= this.cust.customer[key].share) {
                        this.cust.customer[key].share -= num;
                        this.comp.company[i].share += num;
                        return this.comp.company[i].symbol;
                    }
                }
            }
        } else
            console.log('Company Not found ');

    }

    printCompany() {
        let key;
        for (key in this.comp.company) {
            console.log(this.comp.company[key]);
        }

        this.addStock();
    }


    printCustomer() {
        let name, key;
        name = rd.question('Enter a Customer Name :: ');
        for (key in this.cust.customer) {
            if (this.cust.customer[key].cumName == name)
                console.log(this.cust.customer[key]);
        }

        this.addStock();
    }


    save() {
        file.writeFileSync('Customer.json', JSON.stringify(this.cust));
        file.writeFileSync('CompanyShare.json', JSON.stringify(this.comp));
        this.addStock();
    }

    displayQueue() {
        this.queue.printQueue();
        this.addStock();
    }

}

//creating object
var stock = new StockQueue();
stock.addStock();
