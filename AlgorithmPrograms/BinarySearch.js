

/*****************************************************************
 * @purpose ::  For all Search And Sortting Methods Test 
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 07-03-19
 ***************************************************************/

var ul =  require('./Utility');
var rd =  require('readline-sync');

var start , end ;

//call function
sortAndSearch();

function sortAndSearch(){
     start = ul.startTime();
     //call to search number method
     searchNumber();
     end = ul.stopTime();
     //printing elapsed time of search
     console.log('Elapsed time of searchNumber is ::'+(end - start));
     console.log();
     console.log();

     start = ul.startTime();
     //call to search String method
     searchString();
     end = ul.stopTime();
     //printing elapsed time of search
     console.log('Elapsed time of search String is ::'+(end - start));
     console.log();
     console.log();

     start = ul.startTime();
     //call to sort  method
     sortNumber();
     end = ul.stopTime();
     //printing elapsed time of sort
     console.log('Elapsed time of Sort is ::'+(end - start));
     console.log();
     console.log();

     start = ul.startTime();
     //call to sort  method
     getBubbleSortInt();
     end = ul.stopTime();
     //printing elapsed time of sort
     console.log('Elapsed time of Bubble Sort for int is ::'+(end - start));
     console.log();
     console.log();

     start = ul.startTime();
     //call to sort  method
     getBubbleSortString();
     end = ul.stopTime();
     //printing elapsed time of bubble sort
     console.log('Elapsed time of bubble  Sort for string is ::'+(end - start)); 
    
 } //sortAndAearch()

function searchNumber(){
   var size , array = [] ,i ,search ;
   try{
    console.log('Search number method ::')    
   size = rd.question('enter array size ::');
   
   for(i=0 ; i < size ; i++){
       array[i]  = rd.question('Enter Array number :: '); 
   }
   //ENTER search value
     search = rd.question('Enter  Search for integer Value ::');
   //for search of numbers
   ul.binarySearchInt(array , search );
  
  
   }catch(err){
       console.log(err);
   }


}//searchNumber

function searchString(){
    var size , array = [] ,i; 
    try{
        console.log('Search String method ::')   
    size = rd.question('enter array size ::');
    
    for(i=0 ; i < size ; i++){
        array[i]  = rd.question('Enter Array number :: '); 
    }
    //enter search value
    search = rd.question('Enter  Search for string Value ::');

    ul.binarySearchString(array ,search);
 
    }catch(err){
        console.log(err);
    }
 
 
 }//searchString

 function sortNumber(){
    var size , array = [] ,i  ,temp =[]; 
    try{
    console.log('sort  method ::')   
    size = rd.question('enter array size ::');
    
    for(i=0 ; i < size ; i++){
        array[i]  = rd.question('Enter Array number :: '); 
    }
 
 
     temp = ul.insertionSortInt(array);
     console.log(temp);
 
    }catch(err){
        console.log(err);
    }
 
 
 }//sortNumber



 function getBubbleSortInt(){
    var size , array = [] ,i  ,temp =[]; 
    try{
    console.log('bubble sort number method ::')   
    size = rd.question('enter array size ::');
    
    for(i=0 ; i < size ; i++){
        array[i]  = rd.question('Enter Array number :: '); 
    }
 
 
     temp = ul.bubbleSortInt(array);
     console.log(temp);
 
    }catch(err){
        console.log(err);
    }
 
 
 }//getBubbleSort



 function getBubbleSortString(){
    var size , array = [] ,i  ,temp =[]; 
    try{
     console.log('bubble sort String  method ::')     
    size = rd.question('enter array size ::');
    
    for(i=0 ; i < size ; i++){
        array[i]  = rd.question('Enter Array number :: '); 
    }
 
 
     temp = ul.bubbleSortString(array);
     console.log(temp);
 
    }catch(err){
        console.log(err);
    }
 
 
 }//getBubbleSort