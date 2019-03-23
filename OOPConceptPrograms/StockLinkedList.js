

/*****************************************************************
 * @purpose ::  For Reading Data From JSON File
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 19-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
var up = require('util');
var file = require('fs');
var std = require('../DataStructurePrograms/LinkedList');

//stock class creation
class Stock {
    //constructor of class
    constructor() {
        var data = file.readFileSync("CompanyShare.json");
        this.comp = JSON.parse(data);
        this.llstd = new std.LinkedList();
    }

}

//StockLinkedList Class

class StockLinkedList extends Stock {

    stockList() {
        let num;

        console.log('1. add \n2. delete \n3. display \n4. Save ');
        num = rd.questionInt('choose one of the above number ::');
        
            switch (num) {
                case 1: this.addObject();
                    return this.stockList();
                    break;

                case 2: this.delete();
                    return this.stockList();
                    break;

                case 3: this.display();
                    return this.stockList();
                    break;

                case 4: this.save();
                    return this.stockList();
                    break;

                default :console.log("Choose a valid Number ::");    
            }

      
        this.stockList();
    }

    addObject() {
        let name, symbol, share, sharePrice, object;
        name = rd.question('Enter a company name :: ');
        symbol = rd.question('Enter a symbol ::');
        share = rd.question('Enter available shares ::');
        sharePrice = rd.question('Enter Price of Share ::');
        object = {
            name: name,
            symbol: symbol,
            share: share,
            price: sharePrice
        }
        this.llstd.add(object);
    }

    addList() {
        let key;
        for (key in this.comp.company) {
            this.llstd.add(this.comp.company[key]);
        }
        this.stockList();
    }

    display() {
       
      let  current = this.llstd.first;
        while (current != null) {
            console.log("Company name " + current.data.name);
            console.log("Company symbol " + current.data.symbol);
            console.log("Company share " + current.data.share);
            console.log("Company share Price " + current.data.price);

            current = current.next;
        }
       
    }

    delete() {
        let current, comName;
        current = this.llstd.first;
        comName = rd.question('enter a company name ::')
        while (current.data.name != comName && current != null) {
            current = current.next;
        }

        if (current != null) {
            this.llstd.removeItem(current.data);
            console.log('Removed the Company Name');
        } else
            console.log('Company name not found ');
    }

    save() {
        let current;
        current = this.llstd.first;
        this.comp.company = [];
        while (current != null) {
            this.comp.company.push(current.data);
            current = current.next;
        }

        file.writeFileSync('CompanyShare.json', JSON.stringify(this.comp));
    }

}

var str = new StockLinkedList();
str.addList();