
var ul = require('./Utility');
var file = require('fs');
var rd = require('readline-sync');
var up = require('util');
var que = require('../DataStructurePrograms/Queue');

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

            default: console.log('Invalid Number Entered ');
        }

    },//getInventory(obj)



    /************************************************************************** 
     * 
     * ********* Using TXT file  replacing String Values  *************
     * 
    ************************************************************************/


    getReplacer(str, name, fullName, phNo, date) {



        str = str.replace("<<name>>", name);

        str = str.replace("<<full name>>", fullName);

        str = str.replace("xxxxxxxxxx", phNo);

        str = str.replace("XX/XX/XXXX", date);

        console.log(str);

    },// getReplacer()




    /************************************************************************** 
     * 
     * ********* Using JSON Reading stock  Values  *************
     * 
    ************************************************************************/

    getStockReports(strData) {

        var num, share;
        console.log(" 1. IBM \n 2. Accenture \n 3. TATA ");
        num = rd.questionInt("Enter a Number ::");

        switch (num) {
            case 1: share = rd.question('Enter how much share you want buy ::');
                if (share <= 65 && share > 0) {
                    console.log(strData.Stock[0].name + "'s   per share price is " + strData.Stock[0].price + " we want to buy share is " + share +
                        " for this total price is " + share * strData.Stock[0].price);
                } else
                    console.log('Entering share is Invalid ');

                break;

            case 2: share = rd.question('Enter how much share you want buy ::');
                if (share <= 70 && share > 0) {
                    console.log(strData.Stock[1].name + "'s  per share price is " + strData.Stock[1].price + " we want to buy share is " + share +
                        " for this total price is " + share * strData.Stock[1].price);
                } else
                    console.log('Entering share is Invalid ');

                break;

            case 3: share = rd.question('Enter how much share you want buy ::');
                if (share <= 40 && share > 0) {
                    console.log(strData.Stock[2].name + "'s  per share price is " + strData.Stock[2].price + " we want to buy share is " + share +
                        " for this total price is " + share * strData.Stock[2].price);
                } else
                    console.log('Entering share is Invalid ');

                break;

            default:
                console.log();
                console.log('Enter a Valid Number ');
        }

    },//getStockReports(strData)




    /************************************************************************** 
     * 
     * ********* Using JSON Reading stock  Values and modifying Stock values *************
     * 
    ************************************************************************/



    getInventoryManage(obj) {

        let operation;
        console.log("1. Add Stock\n2. Edit Stock\n3. Delete Stock\n4. Display Stock\n5.  Save into file\n6. Exit");
        operation = rd.questionInt('Enter A number ::');
        if (isNaN(operation))
            throw 'Invalid Number Enter a valid Number ';
        try {
            switch (operation) {
                case 1: this.addStock(obj);

                    return this.getInventoryManage(obj);
                    break;

                case 2: this.editStock(obj);

                    return this.getInventoryManage(obj);
                    break;

                case 3: this.deleteStock(obj);

                    return this.getInventoryManage(obj);
                    break;

                case 4: this.displayStock(obj);

                    return this.getInventoryManage(obj);
                    break;

                case 5: this.save(obj);

                    return this.getInventoryManage(obj);
                    break;

                case 6:

                    console.log('Exit Successfully ');
            }
        } catch (err) {
            console.log(err);
        }


    },// getInventoryManage(obj)

    addStock(obj) {
        let stock, name, share, sharePrice;
        stock = obj.Stock;
        name = this.setName();
        share = this.setShare();
        sharePrice = this.setSharePrice();

        stock.push({
            name: name,
            share: share,
            price: sharePrice
        })

        console.log(obj);

    },// addStock(obj)

    setName() {
        let name, flag;
        name = rd.question('Enter a company Name ::');
        flag = true;

        while (flag) {
            if (isNaN(name) || name.length > 2) {
                flag = false;
            } else {
                console.log(' your Input is Wrong Please Enter a valid name ');
                name = rd.question('Enter a company Name ::');
            }
        }

        return name;

    },// setName()

    setShare() {
        let share, flag;
        share = rd.question('Enter a company Share Values ::');
        flag = true;

        while (flag) {
            if (!isNaN(share)) {
                flag = false;
            } else {
                console.log(' your Input is Wrong Please Enter a valid share value ');
                share = rd.question('Enter a company Share Values ::');
            }
        }

        return share;

    },// setShare()



    setSharePrice() {
        let price, flag;
        price = rd.question('Enter a company Share price ::');
        flag = true;

        while (flag) {
            if (!isNaN(price)) {
                flag = false;
            } else {
                console.log(' your Input is Wrong Please Enter a valid price  ');
                price = rd.question('Enter a company share price ::');
            }
        }

        return price;

    },//setSharePrice()

    editStock(obj) {
        let stock, name, value, num;
        let comName, share, price;
        stock = obj.Stock;
        name = this.setName();
        value = -1;

        for (key in stock) {
            if (stock[key].name == name) {
                value = key;
            }
        }
        if (value === -1) {
            console.log('the entered company name is not there in object please enter a right input ');
            this.editStock(obj);
        }

        console.log(stock[value]);

        console.log('1. name \n2. Share \n3. Price ');
        num = rd.questionInt('enter a number ::');
        if (isNaN(num)) {
            console.log('Enter a valid number ');
            num = rd.questionInt('enter a number ::');
        }
        switch (num) {
            case 1: comName = this.setName();
                stock[value].name = comName;
                console.log(stock);
                break;
            case 2: share = this.setShare();
                stock[value].share = share;
                console.log(stock);
                break;

            case 3: prioce = this.setSharePrice();
                stock[value].price = price;
                console.log(stock);
                break;
        }//switch

    },// editStock(obj)

    deleteStock(obj) {
        let name, stock, value ,num;
        stock = obj.Stock;
        name = this.setName();
        value = -1;

        for (key in stock) {
            if (stock[key].name == name) {
                value = key;
            }
        }

        if (value === -1) {
            throw 'Wrong Input ';
        }

        console.log(stock[value]);

        console.log('1. Delete \n2. Exit ');
        num = rd.questionInt('Enter a number ::');
        if(num == 1){
            stock.splice(value ,1);
            console.log(stock);
        }else if(num == 2){
            return ;
        }else{
            console.log("Entered Wrong Number please Enter a valid number");
            this.deleteStock(obj);
        }
          
    },//deleteStock()
    displayStock(object) {
        var stock = object.Stock;
        for (key in stock) {
            console.log(stock[key])
        }
    },//display(object) 

    save(object) {
        try {
            file.writeFileSync("StockReport.json", JSON.stringify(object));
        } catch (err) {
            console.log(err);
        }
        console.log("file write successfully........")
    },//  save(object) 

   


    /************************************************************************** 
     * 
     * ********* Shuffle the cards using Random method and then distribute 9 Cards  to 4 Players *************
     * 
    ************************************************************************/

    
    shuffle(card ,no){
        let i , random ,temp , len ;
        len = card.length ;
        for(i = 0 ; i < no ; i++){
            random = Math.floor(Math.random() * len);
            temp = card[random];
            card[random] = card[i];
            card[i] = temp ;
        }

        for( i= 1; i < 5 ; i++){
            console.log(i+' player gatting cards are ');
           
            for( k = 0 ; k < 9 ; k++){
                console.log(card.pop());
            }
           
            console.log();
        }
    },//shuffle(card)


   


    /************************************************************************** 
     * 
     * ********* Shuffle the cards using Random method with adding in queue  *************
     * 
    ************************************************************************/

   shuffleCard(cards , no){

    let i , random ,temp , len ,q;
    let arr= [];
    len = cards.length ;
    for(i = 0 ; i < no ; i++){
        random = Math.floor(Math.random() * len);
        temp = cards[random];
        cards[random] = cards[i];
        cards[i] = temp ;
    }

     q = new que.Queue();
     for( i = 0 ; i < len ;i++){
         q.enqueue(cards[i]);
     }

     for(i = 1 ;i < 5 ; i++){
         console.log(i +" person playing cards are ......... ");
         for(j = 0; j < 9 ;j++){
            arr = Array(q.dequeue());
            arr.sort();
            console.log(arr);
         }
     }

   }, // shuffleCard(cards , no)

}