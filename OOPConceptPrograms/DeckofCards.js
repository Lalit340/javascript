

/*****************************************************************
 * @purpose ::  For Shuffle the cards using Random methods
 *              
 * @author  :: Lalit Pradhan
 * @version :: 1.0.0
 * @Since   :: 19-03-19
 ****************************************************************/

var ul = require('./Utility');
var rd = require('readline-sync');
var up = require('util');

function cards() {

    let suits = [], rank = [], cards = [], i, j ,no;
    try {
        suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

        for (i = 0; i < suits.length; i++) {
            for (j = 0; j < rank.length; j++) {
                cards.push(suits[i] + '  ' + rank[j]);
            }
        }
        no = Math.floor(suits.length * rank.length) ; 
        ul.shuffle(cards , no);
    } catch (err) {
        console.log(err);
    }
}

cards();