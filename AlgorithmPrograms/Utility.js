/**
 * main file or Utile class file 
 * 
 */


var u = require("./Utility");
var rd = require("readline-sync");
var v  = require('util');

module.exports ={

/***********************************************************************************
 * 
 ****************  Anagram Detection program **********************************
 *
 * *************************************************************************************/

    findAnagram(str1 , str2){
        var status = true ;
        var char1=[] ,char2=[];
        str1=str1.toString();
        str2=str2.toString();
       var s1 = str1.replace(/\s/g, '');
       var s2 = str2.replace(/\s/g , '');
     //  console.log(s1 +'  '+s2); 
       
       if( s1.length != s2.length){
           status = false ;
       }else{
  
           //converting string to array with lower case lattere
            char1=s1.toLowerCase().split('');
            char2=s2.toLowerCase().split('');
            //sorting the array values
            char1 = char1.sort();
            char2 = char2.sort();
         //   console.log(char1+'    '+char2);
            //conveting array to string
            s1 = char1.toString();
            s2 = char2.toString();
            //if condition for comparing
            if(s1 == s2)
              status = true ;
             else
               status = false;
               
       }
       if(status){
           return true ;
       }else{
          return false ;
       }
   },//findAnagram



/***********************************************************************************
 * 
 ****************  Finding Prime Number  program **********************************
 *
 * *************************************************************************************/

    getPrimeNumber(no){
        var i, j,temp ,prime = '  ';
        for(i=1 ; i <= no ;i++){
           temp = 0;
           for(j = i;j >= 1;j--){
            if(i % j == 0){
                temp++;
               // num = i;
            }
         }
            if(temp == 2){
                prime = prime + i + '  ';
             // console.log(num+' is prime number');
            }  
        }
        //display values
     //   console.log('Prime number from 1 to '+no+' is '+prime);
        return prime;
        
    },//getPrimeNumber();



/***********************************************************************************
 * 
 ****************  Finding Prime Number and also Palindrom and anagram or not  program **********************************
 *
 * *************************************************************************************/

     
     getPalindrome(num1,num2){
         var rem ,sum= '' ,temp = [],i ,dem1 ,dem2;
          dem1 = num1 + '';
          dem2 =num2+"";
          temp = dem1.split('') ;
         len = temp.length ;
       
         for(i =0 ;i < len ; i++){
             rem = dem1.charAt(i);
             sum = '' + rem + sum;
          

         }

         //console.log(sum)
         if(sum == dem2)
          return true ;
          else
            return false;
     
    },//getPalindrome()

   
   palindromAnagram(ch){
    var len = ch.length;
    var i; 
     
    for(i = 0;i < len-1 ; i++){
       
      for(j=i+1 ; j < len ;j++){
       
        if(this.isSingle(ch[i])){
          if(this.findAnagram(ch[i].toString() , ch[j].toString() )) {
               if(this.getPalindrome(ch[i].toString(), ch[j].toString())){
                 console.log(ch[i]+'  and '+ch[j]+' are palindrome');
               }
          }        

        }
     }//nasted for
  }//for
},// palindromAnagram()

isSingle(chs){
    var num ,str;  
    var array =[];
    str = chs + '' ;
    array = str.split('');
    num = array.length ; 
    //if condition for finding single or not 
        if(num == 1){
            return false;
        }else
          return true;
     

  },//isSingle()





/***********************************************************************************
 * 
 ****************  Finding Prime Number  program **********************************
 *
 * *************************************************************************************/

   getCelsius(temp ,t){
      var cel;
   if( t == 'c' || t == 'C'){

      cel = (temp *(5/9)) + 32;
   }else{
      cel = (temp - 32)*(5/9);
   }
      return cel ;
   },//getCelsius()




/***********************************************************************************
 * 
 ****************  For Binary Search of Integer numbers **********************************
 *
 * *************************************************************************************/

   
      binarySearchInt(array ,search) {
          var first ,last ,middle ;

          //sorting array values
          array = array.sort(function(a,b){return a-b});
          console.log(array);
         

          first = 0;
          last = array.length - 1;
          middle =Math.floor((first + last)/2);

          while( first <= last ){
             if(array[middle] < search ){
                first = middle + 1;
             }else if(array[middle] == search){
               middle++;
               console.log(search +' integer value found in the location of '+ middle );
                break;
             }else{
                last = middle - 1;
             }
             middle =Math.floor((first + last)/2);
          }//while
       
          if(first > last)
               console.log(search +' is not found in the array ');
      },// binarySearch




/***********************************************************************************
 * 
 ****************  For Binary Search of String Values **********************************
 *
 * *************************************************************************************/



binarySearchString(array , search) {
  var first ,last ,middle ;

  //sorting array values
  array = array.sort();
  console.log(array);
  

  first = 0;
  last = array.length - 1;
  middle =Math.floor((first + last)/2);

  while( first <= last ){
     if(array[middle] < search ){
        first = middle + 1;
     }else if(array[middle] == search){
       middle++;
       console.log(search +' integer value found in the location of '+ middle );
        break;
     }else{
        last = middle - 1;
     }
     middle =Math.floor((first + last)/2);
  }//while

  if(first > last)
       console.log(search +' is not found in the array ');
},// binarySearchString







/***********************************************************************************
 * 
 ****************  For Insertion Sorting  for numbers **********************************
 *
 * *************************************************************************************/


insertionSortInt(array){

   var swap ,i ,j ,len;

    len = array.length ;

   for(i = 0;i < len-1 ;i++ ){
       for( j = 0;j < (len - i -1);j++){
          if(parseInt(array[j]) > parseInt(array[j+1])){
             swap = parseInt(array[j]);
             array[j] = parseInt(array[j+1]);
             array[j+1] = swap ;
          }
       }
   }
     return array;
},//bubbleSort()





/***********************************************************************************
 * 
 ****************  For Insertion sorting String Values **********************************
 *
 * *************************************************************************************/


     insertionSortString(array){
         var i ,j ,k ,len ;
         len = array.length ;

         for(i = 1 ;i < len ;i++){
              k=array[i];
              j=i-1;

              while(j >= 0 && array[j] > k){
                array[j+1] = array[j];
                j --;
              }
              array[j+1] = k ;

         }
           return array;

     },//insertionSorting





/***********************************************************************************
 * 
 ****************  For Bubble Sorting for int **********************************
 *
 * *************************************************************************************/


      bubbleSortInt(array){

         var swap ,i ,j ,len;

          len = array.length ;

         for(i = 0;i < len-1 ;i++ ){
             for( j = 0;j < (len - i -1);j++){
                if(parseInt(array[j]) < parseInt(array[j+1])){
                   swap = parseInt(array[j]);
                   array[j] = parseInt(array[j+1]);
                   array[j+1] = swap ;
                }
             }
         }
           return array;
      },//bubbleSort()





/***********************************************************************************
 * 
 ****************  For Bubble Sorting  Strings **********************************
 *
 * *************************************************************************************/


bubbleSortString(array){

  var swap ,i ,j ,len;

   len = array.length ;

  for(i = 0;i < len-1 ;i++ ){
      for( j = 0;j < (len - i -1);j++){
         if(array[j] < array[j+1]){
            swap = array[j];
            array[j] = array[j+1];
            array[j+1] = swap ;
         }
      }
  }
    return array;
},//bubbleSort()



                /**********************************************************************
               * 
               * 
               * ************ Program for Simulate Stopwatch to find start and stop time
               * 
               *********************************************************************/

              startTime(){
                    
                var start = new Date().getSeconds();
                console.log('Start time of the event ::'+start);
                return start;
              },//startTime()

            stopTime(){
                
                var stop = new Date().getSeconds();
                console.log('Stop Time of stopwatch :: '+stop);
                return stop; 
            },//stopTime();







/***********************************************************************************
 * 
 ****************  For merge Sorting   **********************************
 *
 * *************************************************************************************/
createArray(num){
  var arr = [],i;
  for(i=0 ;i < num ;i++){
     arr[i] = i + 1;
  }
  return arr;
} ,//createArray()

sort(arr) {
   if (arr.length === 1) {
   return arr;
   }
   const m = Math.floor(arr.length / 2);
   const left = arr.slice(0, m);
   const right = arr.slice(m);
   return this.merge(this.sort(left), this.sort(right));
   
   },//sort()

      merge(left , right){
         var i=0 ,j=0 ,result =[];
         while (i < left.length && j < right.length) {
            if (parseInt(left[i]) < parseInt(right[j])) {
            result.push(parseInt(left[i]));
            i++;
            } else {
            result.push(parseInt(right[j]));
            j++;
            }
            }
            return result.concat(left.slice(i)).concat(right.slice(j));


      }, //marge

/***********************************************************************************
 * 
 ****************  For Vending Machine Program   **********************************
 *
 * *************************************************************************************/


        findNote(arr ,price ,i){
           var t=0, div;

            
                if( price / arr[i] != 0){
                   div= parseInt(price /arr[i]);
                  t=t + div;
                  console.log(price +' have note of '+arr[i]+' is '+div);
                  price = price % arr[i];
                }
                i++;
                if(price == 0){
                       return ;
                }
              this.findNote(arr , price , i);

         },//  findNote()



/***********************************************************************************
 * 
 ****************  For get day of a date fall in the Week  **********************************
 *
 * *************************************************************************************/

      
getDayOfWeek(y ,m ,d){
   var y0, x, m0, d0;
   y0 = y - parseInt((14 - m) / 12);
  
    x = y0 + parseInt(y0/4) - parseInt(y0/100) + parseInt(y0/400) ;

   m0 = m + 12 * parseInt(((14 - m) / 12)) - 2 ;
   m0 = parseInt(m0);
   d0 = Math.floor((d + x + 31 * parseInt(m0 / 12)) % 7);
   //d0 = perseInt(d0);
   console.log(d0);
   return d0 ;

} ,//getDayOfWeek()



   

/***********************************************************************************
 * 
 ****************  For monthly payment calculation  **********************************
 *
 * *************************************************************************************/


       getPayment(p , r , y){
          var n , q ,s ,sal
          n = y * 12;
          q = (r/(12*100));

          s =Math.pow((1+r) , -n);
          
          sal = ( p * r )/ (1 - s) ;

          return sal ;


       }, //getPayment()




} //module