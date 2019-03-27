/*****************************************************************
 * @purpose ::  For creating Singleton object design pattern
 * 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 26-03-19
 ****************************************************************/

class Singleton {

    constructor() {
        this.instance;
    }

    static init() {
        var getRandomValue = Math.random();
        return getRandomValue;
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = this.init();
        }
        return this.instance;
    }
}

var single1 = Singleton.getInstance();
var single2 = Singleton.getInstance();
console.log('is Singleton :: ' + (single1 === single2));