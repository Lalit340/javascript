/*****************************************************************
 * @purpose :: Tic Toc toe game   
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 05-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');

var board = [];
var row = rd.question('Enter row values ::');
var cols= rd.question('Enter cols values ::');
var turn = '0';

//call function
initGame(row , cols);
     
     function initGame(rows , cols){

         var i , j;
             for(i=0; i < rows ; i++){
                 board[i] = [];
               for(j=0 ; j < cols ; j++){
                      board[i][j] = '_';
                }
            }
         try{
          ul.printBoard(row , cols ,board);
          ul.play(row , cols , board , turn);
          }catch(err){
                console.log(err.message);
         }
        }//initGame()
