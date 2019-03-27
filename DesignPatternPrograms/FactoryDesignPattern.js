/*****************************************************************
 * @purpose ::  For creating Factory design pattern for Creating different objects within a factory 
 * 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 27-03-19
 ****************************************************************/

 var peopleFactory = function(name , age , addr ){

    var temp = {};

    temp.name = name;
    temp.age  = age;
    temp.addr = addr ;

    temp.printPeople =function(){
        console.log('name : '+this.name+' ,age : '+this.age+' ,address : '+this.addr);
    }

    return temp;
 };

 var people1 = new peopleFactory("raja" , 21 ,' hyd');
 var people2 = new peopleFactory("rani" , 20 ,' hyd');

people1.printPeople();
people2.printPeople();