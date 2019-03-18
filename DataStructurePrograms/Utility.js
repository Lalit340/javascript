/*
*
*  Main Utility class for implementing all logics
*
*/

var ul = require('./Utility');
var aUl = require('../AlgorithmPrograms/Utility');
var rd = require('readline-sync');
var file = require('fs');
var que = require('./Queue');
var stk = require('./Stack');
var up = require('util');

module.exports = {


       /*******************************************************************************
        * 
        * ************** UnoderedList Operation Like Reading txt file and spliting the file data
        * 
        * 
        ***********************************************************************************/

       readSplit(text) {
              var data, arrayay = [];
              data = file.readFileSync(text, 'utf-8');
              arrayay = data.split(' ');
              console.log(arrayay);
              return arrayay;
       },//readSplit()



       /*******************************************************************************
     * 
     * ************** using Stack Findind prime number and Anagram & Printing the numbers ***
     * 
     * 
     ***********************************************************************************/




       primeAnagramStack(num) {

              var str, array = [], i, j, st, len, data;

              //calling primeNumber method from utility of algorithms
              str = aUl.getPrimeNumber(num);
              str = str.trim();
              array = str.split('  ');
              //queue object creation
              st = new stk.Stack();
              //forloop for Storing anagrams numbers
              for (i = 0; i < array.length - 1; i++) {
                     for (j = i + 1; j < array.length; j++) {
                            if (!aUl.isSingle(array[i])) {
                                   if (aUl.findAnagram(array[i], array[j])) {
                                          st.push(array[i]);
                                          st.push(array[j]);
                                   }
                            }
                     }
              }

              len = st.getSize();
              console.log(len);
              //forloop for printing anagrams
              for (i = 0; i < len; i++) {
                     data = st.pop();
                     console.log('Anagram number is :: ' + data);
              }

       },//  primeAnagramStack(num)







       /*******************************************************************************
        * 
        * ************** using Queue Findind prime number and Anagram Printing the numbers ***
        * 
        * 
        ***********************************************************************************/


       primeAnagram(num) {

              var str, array = [], i, j, q, len, data;

              //calling primeNumber method from utility of algorithms
              str = aUl.getPrimeNumber(num);
              str = str.trim();
              array = str.split('  ');
              //queue object creation
              q = new que.Queue();
              //forloop for Storing anagrams numbers
              for (i = 0; i < array.length - 1; i++) {
                     for (j = i + 1; j < array.length; j++) {
                            if (!aUl.isSingle(array[i])) {
                                   if (aUl.findAnagram(array[i], array[j])) {
                                          q.enqueue(array[i]);
                                          q.enqueue(array[j]);
                                   }
                            }
                     }
              }

              len = q.getSize();
              console.log(len);
              //forloop for printing anagrams
              for (i = 0; i < len; i++) {
                     data = q.dequeue();
                     console.log('Anagram number is :: ' + data);
              }

       },//  primeAnagram(num)


       /*******************************************************************************
        * 
        * ************** For  Leap Year           ***
        * 
        * 
        ***********************************************************************************/



       leapYear(yr) {
              if (yr % 4 == 0 && yr % 100 != 0 || yr % 400 == 0) {
                     return true;
              } else {
                     return false;
              }

       },// leapYear(yr)


       /*******************************************************************************
        * 
        * ************** For  Binary search Tree program    ************************
        * 
        * 
        ***********************************************************************************/


       binarySearchTree() {

              var number, array = [], index, first, second, result;

              number = rd.question('Enter a Number ::');
              //incase if user not give a number it throw error
              if (isNaN(number))
                     throw 'ENTER A VALID NUMBER';

              console.log('Enter your number ::');

              for (index = 0; index < number; index++) {
                     array[index] = rd.question('');

                     if (isNaN(array[index]))
                            throw 'Enter a integer value only ';
              }

              for (index = 0; index < array.length; index++) {
                     first = (this.factorial(2 * Number(array[index])));
                     second = Number((this.factorial(Number(array[index]) + 1)) * Number(this.factorial(array[index])));
                     result = Math.floor(first / second);

                     console.log('Node Possible Way making tree of  ' + array[index] + ' is ' + result);

              }

       },// binarySearchTree()

       factorial(num) {
              var i, mul = 1;
              for (i = 1; i <= num; i++) {
                     mul = mul * i;
              }

              return mul;
       },// factorial(num)



       /*******************************************************************************
        * 
        * ************** For  Search Prime Number and printing the number in 2d************************
        * 
        * 
        ***********************************************************************************/



       getPrime(num) {
              var prime, i, j, range;
              var array = [['0-100'], ['100-200'], ['200-300'], ['300-400'],
              ['400-500'], ['500-600'], ['600-700'], ['700-800'], ['800-900'], ['900-1000']];
              i = 0;
              j = 1;
              range = 100;


              for (prime = 2; prime <= num; prime++) {
                     if (this.getPrimeNumber(prime)) {
                            if (prime < range) {
                                   array[i][j] = prime;
                                   j++;
                            } else {
                                   j = 1;
                                   range += 100;
                                   i++;
                                   array[i][j] = prime;
                            }
                     }

              }
              console.log("The prime numbers are presents in the given range ");
              console.log();
              for (i = 0; i < array.length; i++) {
                     up.print('[ ');
                     for (j = 0; j < array[i].length; j++) {
                            if (j == 0) {
                                   up.print('[ ' + array[i][j] + " ] ------>  ");
                                   //  array.pop();
                            } else {
                                   up.print(array[i][j] + " ");
                            }
                     }
                     console.log(' ]');
              }


       },//getPrimeAnagram(str)

       getPrimeNumber(num) {
              var i, temp = 0;
              for (i = 2; i < num; i++) {
                     if (num % i == 0) {
                            temp += 1;
                     }

              }
              if (temp == 0)
                     return true;
              else
                     return false;
       },// getPrimeNumber(num)


       /*******************************************************************************
        * 
        * ************** For  Search Prime Number and Anagram and printing the number in 2d ************************
        * 
        * 
        ***********************************************************************************/



       getPrimeAnagram(num) {
              var array = [], prime, i, j, range, arr = [[]];

              var primeArr = [['0-100'], ['100-200'], ['200-300'], ['300-400'],
              ['400-500'], ['500-600'], ['600-700'], ['700-800'], ['800-900'], ['900-1000']];


              var anagramArr = [['0-100'], ['100-200'], ['200-300'], ['300-400'],
              ['400-500'], ['500-600'], ['600-700'], ['700-800'], ['800-900'], ['900-1000']];

              var str1, str2;

              i = 0;
              j = 0;
              range = 100;
              for (prime = 2; prime <= num; prime++) {
                     if (this.getPrimeNumber(prime)) {

                            array[i] = prime;
                            i++;

                     }

              }

              var p = 0;
              for (i = 0; i < array.length - 1; i++) {

                     anagramArr[i] = []

                     for (j = i + 1; j < array.length; j++) {
                            if (aUl.findAnagram(array[i], array[j])) {
                                   if (array[i] < range && array[j] < range) {

                                      str1 = array[i]+'  '+array[j];
                                      arr[p] = str1 ;


                                   } else {
                                          p++;
                                          range += 100;
                                          
                                          if (array[j] <= range) {
                                                 str1 = array[i]+'  '+array[j];
                                                 arr[p] = str1 ;
                                          }
                                   }

                            }
                     }
              }
              console.log("Anagram prime numbers are: ");
              for ( i = 0; i < 10; i++) {
          
                  console.log(arr[i]);
              }

              // console.log("The Anagram numbers are presents in the given range ");
              // console.log();
              // for (i = 0; i < anagramArr.length; i++) {
              //        up.print('[ ');
              //        for (j = 0; j < anagramArr[i].length; j++) {
              //               if (j == 0) {
              //                      up.print('[ ' + anagramArr[i][j] + " ] ------>  ");
              //                      //  array.pop();
              //               } else {
              //                      up.print(anagramArr[i][j] + " ");
              //               }
              //        }
              //        console.log(' ]');
              // }


              // console.log("The non- Anagram numbers are presents in the given range ");
              // console.log();
              // for (i = 0; i < primeArr.length; i++) {
              //        up.print('[ ');
              //        for (j = 0; j < primeArr[i].length; j++) {
              //               if (j == 0) {
              //                      up.print('[ ' + primeArr[i][j] + " ] ------>  ");
              //                      //  array.pop();
              //               } else {
              //                      up.print(primeArr[i][j] + " ");
              //               }
              //        }
              //        console.log(' ]');
              // }


       },//getPrimeAnagram(num)


}

