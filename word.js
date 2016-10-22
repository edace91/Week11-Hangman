/* Should be constructor files:
& will contain all of the methods 
which will check the letters guessed 
versus the random word selected.*/
var letter = require("./letter.js");

function Word(chosenWord){

	this.chosenWord = chosenWord;
	//will contain individual Letter objects 
	//for each of the letter in chosenWord
	this.letters = []
	this.check = false;

	//will create Letter objects that will be put into the letters array
	this.getLetter = function(){
		//will create each letter object
		for (var i=0; i<this.chosenWord.length; i++) {
			var newLetter = new letter(this.chosenWord[i]);
			this.letters.push(newLetter);
 		}
 	}
 	//will check if the letter is found.
 	this.letterFinder = function(letterGuessed){
 		var returned = 0 
 		for (var i = 0; i <this.letters.length; i++){
 			if (this.letters[i].character === letterGuessed){
 				//set appear propety to true
 				this.letters[i].show = true; 
 				returned++;	
 			}	
 		}

 		return returned;
 	}

 	this.ifWordFound = function (){
 		
 
 		//check if all the objects in 
 		//lets array has appear property of true,
 		// if so then the function return true
 		this.check = this.letters.every(function(checkShowTrue){
 			return checkShowTrue.show
 		})
 		return this.check;

 		/*if (this.letters.every(checkShowTrue)){
 			check = true;
 			return check; 
 		}

 		function checkShowTrue (val, index, ar) {
 			if ( show === true){

 				return true;
 			} else{
 				return false;
 			}
 		}*/
 	};

 	this.renderWord = function(){
 		var exportedWord = '';
 		for(var i=0; i < this.letters.length; ++i){

 			exportedWord += this.letters[i].letterDisplay();	
 		}
 		return exportedWord;
 	};
}

module.exports = Word;




//-----------------------------------------------------------//

// checkLettesr() function
// It's where we will do all of the comparisons
// for matches. Again, it's not being called here. 
//It's just being made for future use.

/*function checkLetters(letter) {

	This boolean will be toggled 
	based on whether or not a user letter 
	is found anywhere in the word
	var letterInWord = false; 

	// Check if a leter exists inside the array at all.
	for (var i=0; i<numBlanks; i++) {
		if(chosenWord[i] == letter) {
			letterInWord = true; 
			/* if the letter exists then toggle 
			this boolean to true. This will 
			be used in the next step. 
 		}
	}

	/* If the letter exists somewhere in the word, 
	then figure out exactly where (which indices)
	if(letterInWord){
	
		// loop through the word 
		for (var i=0; i<numBlanks; i++){

			/*Populate the blanksAndSuccesses with 
			every instance of the letter.
			if(chosenWord[i] == letter) {
				blanksAndSuccesses[i] = letter; 
				/* here we set the specific space in 
				blanks and letter equal to the letter 
				when there is a match.
			}
		}
		console.log(blanksAndSuccesses); 
		// logging for testing
	}
	// If the letter doesn't exist at all...
	else {
		wrongGuesses.push(letter); 
		// then we add the letter to the list of wrong letters
		numGuesses--; 
		// and we subtract one of the guesses
	}
}*/