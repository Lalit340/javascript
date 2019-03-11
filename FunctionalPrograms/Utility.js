/*
Main file of logics
*/

var u = require("./Utility");
var rd = require("readline-sync");
var v  = require('util');
module.exports = {

    /*********Replace String With a Sertain Place ***********/

    replace(str1 , str2 , str3){
        var str4 =str1.replace(str2 , str3);
        console.log(str4);
    },

    /**********FlipCoin For find Heads or Tails ***********/

    flipCoin( fp ){
        var i=0;
        var head=0;
        var tail=0;
        var headPer=0;
        var tailPer=0;
        var no=fp;
        if(fp>10 || fp<=0){
          throw 'Enter a number in between 1 to 10 only';
        }
        else{
            for(i=1;i<=no;i++){
                if(Math.random()<0.5){
                console.log('Heads');
                head++;
                }else{
                console.log('Tails');
                tail++;
                }
           


            }//for

            console.log();
            //calculations of Heads Percentages
             headPer=(head*100)/fp;
             console.log('Heads Percentage is :'+headPer+'%');
 
             //calculations of tails percentages
             tailPer=(tail*100)/fp;
             console.log('tails Percentage is ::'+tailPer+'%');
              

        }//else
    },//flipcoin(),


    /************  Finding LeapYear  ***************/

        leapYear(yr){
            if(yr%4==0 && yr%100!=0 || yr%400==0){
                console.log(yr+" is leap year ");
            }else{
                console.log(yr+" is not a leap year ");
            }
 

        },//leapyear()

        /***************   Finding 2^N  ***************/

        powerValue(no){
            var i;
            var power=1;

            if(no > 31 || no < 0){
                console.log('Enter a valid Number ');
            }else{
                for(i=0;i<=no;i++){
                    console.log('The power of 2 ^'+i+' = '+power);
                    power=power*2
                }
            }
            
        },//power()

        /************Harmonic Number Program ************/

        harmonicValue(num){
            var result=0.0;
              while(num!=0){
                  result = result+1/num;
                  console.log(result+'   ');
                  num--;

              }
               console.log();
               console.log('The Harmonic Series is ::'+result);

            
        },//harmonicNumber()

        /************* Printing Prime Factors  **********/

        primeFactors(no){
           var i=0;

           // while loop for if a number is divided by 2 
           //then the  number will again divided by 2 if get an odd number then while loop exit 
           while(no%2==0){
                console.log( 2 +'  ');
                no = no/2;
            }

            //for loop for the number is divided bu an odd number 

            for(i=3; i <= Math.sqrt(no) ;i+=2){

                while(no%i==0){
                    console.log( i+'  ');
                    no /= i;
                }
            }
            //if condition for printing rest of values if no>2
              if(no > 2)
                console.log( no +'  ');

        }, //PrimeFactors()

       
       
        /*************** Gambler program **************/


        gambler(stake , goal, trials){
            var win=0;
            var bets=0;
            var cash=0;
            var i=0;

            //for is to find win or loss percentage
            for(i= 0;i < trials ; i++){
                cash=stake;

                while(cash > 0 && cash <goal){
                    bets++;
                    if(Math.random < 0.5)
                        cash++;
                     else
                       cash--;   
                }

             if(cash===goal)
               win++;
            }
            
            //calculation and display
            console.log( win +' won of '+trials);
            console.log('won percentages is :: '+ (win/trials)*100);
            console.log('average  bets percentages is :: '+ (bets/trials)*1.0);

        },//gambler()


        /************************************************************************** 
         * *********Creating coupon code without having duplicates
         * 
        ************************************************************************/

        getCoupon(no) {
           var isCollect=new Boolean(no);
           var count=0;
           var distrinct=0;
           var value=0;
         

             while(distrinct < no){
                 value=this.generateCoupon(no);
                 count++;
                 if(!isCollect[value]){
                     distrinct++;
                     isCollect[value]=true;
                 }

           console.log('coupon code is :: '+parseInt(value*count));
             }
             

       }, //getcoupon()

       //method for return generated coupon code
        generateCoupon(no){
            // here returns the generating value
            return (Math.random()*no);
        },//generateCoupon()

        /**************************************************************************
         * 
         * *************2D Array program for reading 2 dimontional array values **
         * 
         ************************************************************************/

           arrayGenerate(rows , cols){

               var  array=[];
               var  i ,j;
               for(i=0 ;i < rows ;i++){
                   array[i]=[];

                   for(j=0 ;j< cols ;j++){
                       array [i][j] = rd.question(" Enter one array value "+i
                                                +" enter another array value "+j+" ::\n");
                   }
               }
            
               console.log(array);
           },//arrayGenerate()

           /************************************************************************
            * 
            * ***********  Finding 3 numbers whose Sum is equals to Zero  ********
            * 
            *************************************************************************/

            findSum(num){

                var len , i ,j,k;
                len =num.length;
                console.log(num);
                 console.log(len);
                for(i=0 ;i < len-2 ;i++){

                    for(j=i+1; j < len-1 ;j++){

                        for(k=j+1 ; k<len ;k++){
                            if(parseInt(num[i]) +parseInt(num[j]) + parseInt(num[k]) == 0){
                                return 'The number are '+num[i]+' ,'+num[j]+' & '+num[k]+' whose sum is Zero';
                            }
                        }
                    }
                }
                //return there are no thet like values
                return 'There is no value like 3 numbers Sum == Zero ';
            },//findsum()

             /************************************************************************
            * 
            * *********** Program to find Euclidean distance between two point  ********
            * 
            *************************************************************************/

            findDistance(x , y){

                var distance=0;

                distance=Math.sqrt(x*x+y*y);
            console.log('Distance of two point is :: '+distance);

            },//findDistance()

           /******************************************************************
            * 
            * *********** Program to find Permutation of a string value   ********
            * 
            *************************************************************************/


            stringPermutations(ch , i, j){

                var temp=ch[i];
                ch[i] = ch[j];
                ch[j] = temp ;

            },//stringPermitations()

              permutations(ch , index){

                var i ,len;
                var str=null;
                len=ch.length;
                if( index == len-1 ){
                    str=ch.toString();
                    str=str.replace(/,/g ,'');
                    console.log(str);
                }
                
                 for(i = index ;i < ch.length ; i++){

                     this.stringPermutations(ch ,index ,i);
                     this.permutations(ch , index + 1);
                     this.stringPermutations(ch ,index ,i);

                 }


              },//permutations()


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


               /*************************************************************************
                * 
                * 
                * ********  Cross Game or Tic-Tac-Toe Game *************************
                *
                * **************************************************************************/


                printBoard(rows , cols ,board){
                    var i , j;
                    for(i=0; i<rows ;i++){
                        for(j=0 ; j<cols ;j++){
                            if(j == 0)
                             v.print('|');
                             v.print(board[i][j]+'|');
                        }
                        console.log();
                    }
                },//printBoard()

                 play(row , col , board , turn){
                     var player = true;
                     var  i ,j;
                     while(player){
                         
                       i = rd.question('Enter row number whwre u want to put ur turn :: ')-1;
                       j = rd.question('Enter column number where u want to put ur turn :: ')-1;
                    
                       //if condition for find the place is empty or not .
                       if(board[i][j] == '_'){
                        board[i][j] = turn;
                        }else{
                            console.log('Enter valid input ::');
                            continue ;
                        }

                        if(this.gameOver(i , j ,board)){
                           player = false ;
                           console.log('game over! player '+turn+' won! the match');
                        }//if
                        
                        this.printBoard(row , col ,board);
                        if(turn == '0')
                          turn = 'x';
                         else 
                            turn = '0'; 
                   
                      
                     }//while
                 },//play()

                 
                 gameOver(row , col, board) {
                    //checking victory of game 
                    if(board[0][col] == board[1][col] && board[0][col] == board[2][col])
                     return true ;
                    else
                    if(board[row][0] == board[row][1] && board[row][0] == board[row][2])
                      return true ;
                    else
                      if(board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[1][1] != '_')
                        return true ;
                    else
                     if(board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[1][1] != '_')
                          return true ;
                     else     
                       return false ;     
                 },//gameOver()

               /*************************************************************************
                * 
                * 
                * ********  Finding Root of a Quadratic Equations *************************
                *
                * **************************************************************************/

                findRoot( a, b, c){
                    var del=0 ,root1=0 ,root2=0;
                    //calculating Root value 
                    del = b*b - 4*a*c ;
                   if(del > 0){
                     root1 = (-b + Math.sqrt(del))/(2*a);
                     root2 = (-b - Math.sqrt(del))/(2*a);
                    
                     console.log("first root value is :: "+root1);
                     console.log("second root value is :: "+root2);
                    }else 
                      if(del == 0){
                          root1= -b /(2*a) ;
                          console.log(" root value is :: "+root1);
                      }else {
                          root1 = -b /(2*a);
                          root2 = Math.sqrt(-del) /(2*a);
                          console.log("first root value is :: "+root1);
                          console.log("second root value is :: "+root2);
                      }
                },//findRoot()


                   /*************************************************************************
                * 
                * 
                * ********  Finding Effective Temperature *************************
                *
                * **************************************************************************/
                  
                getEffective(temp , speed){
                    var  w ;
                    //if condition
                          if(temp <= 50 && speed <= 120 && speed >= 3){
                             w = 35.74 + 0.6215*temp + (0.4275*temp - 35.75)*speed^0.16 ;
                             console.log('effective Temperature is :: '+w);
                            
                          }
                          else{
                                throw 'Enter valid Temperature and Speed';
                             }
                },//getEffective()

}//module