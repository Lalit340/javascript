/*****************************************************************
 * @purpose ::  For creating Singleton object design pattern
 * 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 26-03-19
 ****************************************************************/

var mySingleton = (function () {

    var instance;

    function init() {

        function privateFunction() {
            console.log('Private Function ')
        }

        var privateRandom = Math.random();

        return {
            //returning the private value with public method
            getRandomValue: function () {
                return privateRandom;
            }
        };
    };
    return {
        getInstance: function () {
            if (instance == null) {
                instance = init();
            }
            return instance;
        }
    };
})();

var singleton1 = mySingleton.getInstance();
var singleton2 = mySingleton.getInstance();

console.log('is Singleton ' + (singleton1.getRandomValue() === singleton2.getRandomValue()));
