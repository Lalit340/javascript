/*****************************************************************
 * @purpose ::  For creating Observer  design pattern for observing objects
 * 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 27-03-19
 ****************************************************************/

class Observers {
    constructor(num) {
        this.number = num;
        this.Observer = [];
    }

    addObserver(obj) {
        //adding object to observer 
        this.Observer.push(obj);
    }

    removeObjectAt(index) {

        if (index > -1 && index < this.Observer.length) {
            this.Observer.splice(index, 1);
            return 'Removed The index placed Object ';
        } else {
            return 'In this object no Object present';
        }
    }

    getSize() {
        return this.Observer.length;
    }

    indexAt(obj) {
        let key;
        for (key in this.Observer) {
            if (this.Observer[key] == obj)
                return key;
        }
        return -1;
    }

    getObject(index) {
        if (index < this.Observer.length)
            return this.Observer[index];
        else
            return -1;

    }

    update(obj) {
        console.log('Observer  ' + obj.number + ' is notified ');
    }

    notifyOne(obj) {
        let i;
        let num = this.getSize();
        for (i = 0; i < num; i++) {
            if (this.Observer[i] == obj)
                this.update(obj);
        }
    }


    notifyAll() {
        let i;
        let num = this.getSize();
        for (i = 0; i < num; i++) {
            this.update(this.getObject(i));
        }
    }

}

var obj = new Observers(1);
var obj1 = new Observers(5);
var obj2 = new Observers(4);
var obj3 = new Observers(8);
var obj4 = new Observers(2);
var obj5 = new Observers(6);

obj.addObserver(obj1);
obj.addObserver(obj2);
obj.addObserver(obj3);
obj.addObserver(obj4);
obj.addObserver(obj5);

obj.notifyOne(obj3);

obj.notifyAll();

obj.removeObjectAt(3);
console.log();
obj.notifyAll();