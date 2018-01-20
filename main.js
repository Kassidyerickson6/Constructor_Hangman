// unsure if this should be Word or word.js
var Word = require("./Word");
// could also be inquirer
var prompt = require('prompt');

console.log("ZOO ANIMAL HANGMAN");
console.log("Guess a letter of an animal you would see in a Zoo");
console.log("--------------------------------------------------");

prompt.start();

game = {
	wordList :['zebra', 'giraffe', 'lion', 'bear', 'tiger', 'flamingo', 'elephant', 'rhino'],
	wordsCorrect: 0,
	guessesRemaining = 10,
	currentWord = null,

	start: function(){
		this.resetGame();
		this.currentWord = new Word(this.wordList[Math.floor(Math.random()* this.wordList.length)]);
}


game.start();