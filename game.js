/*file will randomly select a
word or the player.*/

var wordsList   = ["dog","cat","fish","bird"];

var chosenWord  = ""; 
// solution will be held here.

var lettersInChosenWord = []; 
// This will break the solution into individual letters to be stored in array
var numBlanks	= 0; 
// This will be the number of blanks we show based on the solution
var blanksAndSuccesses = []; 
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _') 
var wrongGuesses = []; 
// Holds all of the wrong guesses


// solution is chosen randomly from wordList
chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 

// the word is broken into individual letters
lettersInChosenWord = chosenWord.split(""); 
// we counT the number of letters in the word
numBlanks = lettersInChosenWord.length; 