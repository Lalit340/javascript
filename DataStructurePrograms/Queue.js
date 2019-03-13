
//Queue class implemetation
class Queue{
    //queue Constructor
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length ==0;
    }

    size(){
        return this.items.length ;
    }

    enqueue(element){
        //adding element to queue
         this.items.push(element);
    }

    dequeue(){

        if(this.isEmpty())
          return 'UnderFlow' ;
        return this.items.shift();  
    }

    printQueue(){
        var str ,i;
        str = '';
        for(i = 0;i < this.items.length ;i++){
            str += this.items[i] + ' ';
        }
        return str ;
    }
}

module.exports = {
    Queue
}