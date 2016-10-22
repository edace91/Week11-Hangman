/*will contain the logic of your app. 
Running it in Terminal/Bash will start
the game.The app should end when a 
player guesses the correct word 
or runs out of guesses.*/
var Word = require('./word.js');
var prompt = require ('prompt');

console.log("")
prompt.start();

game = {
 	wordList: ["dog","cat","fish","bird"],
 	winCounter: 0,
	lossCounter: 0,
 	numGuesses: 10,
 	currentString: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentString = new Word(this.wordList[Math.floor(Math.random()* this.wordList.length)]);
 		this.currentString.getLetter();
 		this.promptPlayer();
 	},

 	resetGuesses: function(){
 		this.numGuesses = 10;
 	},

 	promptPlayer: function(){
 		var self = this;
 		prompt.get(['letterGuessed'], function(err, result){
 			console.log("You guessed: " + result.letterGuessed);
 			var allGuessed = self.currentString.letterFinder(result.letterGuessed);

 			if(allGuessed ==0) {
 				console.log("Sorry, that is incorrect!");
 				self.numGuesses--;
 				
 			} else {
 				console.log("That's right!");
 					if(self.currentString.ifWordFound()){
 						console.log("You won the game!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses left: " + self.numGuesses);
 			console.log("-------------------");
 			if((self.numGuesses > 0) && (self.currentString.check == false)){
 				self.promptUser();
 			}
 			else if(self.numGuesses ==0){
 				console.log("Game over. the answer is ", self.currentString.target);
 			} else {
 				console.log(self.currentString.renderWord());
 			}
 		});

 	}


};

game.startGame();