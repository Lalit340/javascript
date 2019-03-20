

/*****************************************************************
 * @purpose ::  For Reading Data From JSON File buy share and sell share with using Commercial Data processing
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 20-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
var up = require('util');
var file = require('fs');

//class of Company
class Company {
    constructor(comName, symbol, share, price) {
        this.comName = comName;
        this.symbol = symbol;
        this.share = share;
        this.price = price;
    }
}

//class of Cuctomer
class Customer {
    constructor(cusName, share, price) {
        this.cusName = cusName;
        this.share = share;
        this.price = price;
    }
}

class StockAccount extends Customer {

    operate() {
        let num, comNo;
        console.log("#Commercial Data Processing");
        console.log('1. company updation ');
        console.log('2. customer Updation ');
     try{
        num = rd.questionInt('Choose a above number :: ');
        if (num < 1 || num > 2)
            throw 'Choose a Currect Number ';

        switch (num) {
            case 1: console.log('#Company portal');
                console.log('1. Add company ');
                console.log('2. List of companies ');
                comNo = rd.questionInt('Choose a above number ::');
                if (comNo < 1 || comNo > 2)
                    throw 'Choose a Currect Number ';
                //calling the company portal method
                stock.companyPortal(comNo);

                break;

            case 2: console.log('#Customer portal');
                console.log('1. New User/Customer ');
                console.log('2. Old customer / Sign in  ');
                comNo = rd.questionInt('Choose a above number ::');
                if (comNo < 1 || comNo > 2)
                    throw 'Choose a Currect Number ';
                //calling Customer Portal method
                stock.customerPortal(comNo);
                break;
        }
    }catch(err){
        console.log(err);
    }

    }

    companyPortal(conNo) {
        let comName, symbol, comShare, price, obj, imfo, data;
        switch (conNo) {
            case 1: comName = rd.question('Enter a company name :: ');
                symbol = rd.question('Enter symbol of the Company ::');
                comShare = rd.question('Enter share of the Company ::');
                price = rd.question('Enter Amount of the Company ::');

                //creating object of company 
                obj = new Company(comName, symbol, comShare, price);
                imfo = file.readFileSync('CompanyShare.json', 'utf8');
                data = JSON.parse(imfo);
                data.company.push(obj);
                file.writeFileSync('CompanyShare.json', JSON.stringify(data));
                console.log('Company is add Successfully .....');
                console.log(data);
                stock.operate();

                break;

            case 2:

                imfo = file.readFileSync('CompanyShare.json', 'utf8');
                data = JSON.parse(imfo);
                console.log('List of companies are  .....');
                console.log(data);
                stock.operate();

                break;
        }
    }

    customerPortal(comNo) {
        let name, share, price, obj, data, imfo;
        let found;
        switch (comNo) {
            case 1: name = rd.question('Enter a customer name :: ');
                Share = rd.question('Enter share of the customer ::');
                price = rd.question('Enter Amount of the customer ::');

                //creating Customer Object
                obj = new Customer(name, share, price);
                data = file.readFileSync('Customer.json');
                imfo = JSON.parse(data);
                imfo.customer.push(data);
                file.writeFileSync('Customer.json', JSON.stringify(imfo));
                console.log('Insertion of new User is Complete ');
                console.log(imfo);
                stock.operate();

                break;

            case 2: found = 0;
                name = rd.question('Enter a Customer for login :: ');

                imfo = file.readFileSync('Customer.json');
                data = JSON.parse(imfo);

                obj = data.customer;

                obj.forEach(function (customer) {
                    if (name == customer.cumName) {
                        console.log(customer);
                        stock.buyOrSell(name);
                        found++;
                    }
                });

                if (found == 0) {
                    console.log('User Not Found .....');
                    return null;
                }
                stock.operate();

                break;
        }
    }



    buyOrSell(name, obj) {
        let num;
        console.log('1. Buy Shere \n2. sell Share ');
        num = rd.question('Choose one of above number ::');
        if (num < 1 || num > 2)
            throw 'Choose a Currect Number ';

        if (num == 1) {
            stock.buyShare(name);
        } else {
            stock.sellShare(name);
        }

    }

    buyShare(custName) {
        let key, comName, imfo, data;
        let flag;

        // for (key in obj.customer) {
        //     if (obj.customer[key].cumName == custName)
        //         temp++;
        // }

        // if (temp == 0)
        //     throw 'Enter a Customer Name Currectly ';
        imfo = file.readFileSync('CompanyShare.json', 'utf8');
        data = JSON.parse(imfo);

        comName = rd.question('Enter a Company Name :: ');

        flag = false;

        for (key in data.company) {
            if (data.company[key].name == comName) {
                flag = true;
            }
        }

        if (flag == true) {
            this.buyStock(custName, data);

        } else
            console.log('Company not found ');

    }

    buyStock(custName, data) {
        let symbol, i, key, check, num, cusImfo, CusData;
        symbol = rd.question('Enter the company symbol which share you want to buy ::');
        check = false;

        for (key in data.company) {
            if (data.company[key].symbol == symbol) {
                i = key;
                check = true;
                break;
            }
        }
        cusImfo = file.readFileSync('Customer.json');
        CusData = JSON.parse(cusImfo);

        if (check) {
            console.log(data.company);
            num = rd.questionInt('Enter How much share you want to buy :: ');
            for (key in CusData.customer) {
                if (CusData.customer[key].cumName == custName) {
                    if (num <= CusData.customer[key].share) {
                        CusData.customer[key].share += num;
                        data.company[i].share -= num;
                        return data.company[i].symbol;
                    }
                }
            }
        } else
            console.log('Company Not found ');

    }

    sellShare() {
        let custName, key, comName, imfo, data;
        let symbol, flag;
        // custName = rd.question('Enter a  customer name :: ');
        // for (key in this.cust.customer) {
        //     if (this.cust.customer[key].cumName == custName)
        //         temp++;
        // }
        // if (temp == 0)
        //     throw 'Enter a Customer Name Currectly ';
        imfo = file.readFileSync('CompanyShare.json', 'utf8');
        data = JSON.parse(imfo);

        comName = rd.question('Enter a Company Name :: ');

        flag = false;

        for (key in data.company) {
            if (data.company[key].name == comName) {
                flag = true;
            }
        }

        if (flag == true) {
            this.sellStock(custName , data);
           
        } else
            console.log('Company not found ');
    }

    sellStock(custName , data) {
        let symbol, i, key, check, num ,cusImfo ,CusData ;
        symbol = rd.question('Enter the company symbol which share you want to sold ::');
        check = false;

        for (key in data.company) {
            if (data.company[key].symbol == symbol) {
                i = key;
                console.log(data.company[i].share);
                check = true;
                break;
            }
        }

        cusImfo = file.readFileSync('Customer.json');
        CusData = JSON.parse(cusImfo);

        if (check) {
            console.log(data.company);
            num = rd.questionInt('Enter How much share you want to sold :: ');
            for (key in this.cust.customer) {
                if (CusData.customer[key].cumName == custName) {
                    if (num <= CusData.customer[key].share) {
                        CusData.customer[key].share -= num;
                       data.company[i].share += num;
                        return data.company[i].symbol;
                    }
                }
            }
        } else
            console.log('Company Not found ');

    }


}

//creating StockAccount Object
var stock = new StockAccount();
stock.operate();

module.exports = {
    StockAccount
}