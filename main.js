
var Word = require("./word.js");

var prompt = require('prompt');

//instructions
console.log("ZOO ANIMAL HANGMAN");
console.log("Guess a letter of an animal you would see in a Zoo");
console.log("--------------------------------------------------");


prompt.start();



game = {
 	wordList: ['zebra', 'giraffe', 'lion', 'bear', 'tiger', 'flamingo', 'elephant', 'rhino'],

 	guesses: 10,
 	currentWord: null,
 	
 	start: function (word) {
 		this.resetGuesses();
 		this.currentWord = new Word(this.wordList[Math.floor(Math.random()* this.wordList.length)]);
 		this.currentWord.getLetter();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guesses = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWord.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guesses--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWord.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guesses);
 			console.log("-------------------");
 			if((self.guesses > 0) && (self.currentWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guesses ==0){
 				console.log("Game over. Correct Word ", self.currentWord.target);
 			} else {
 				console.log(self.currentWord.wordRender());
 			}
 		});

 	}


};

game.start();