
// variable for wins, losses, guesses left
// variable for letter guesses so far
// variable to reset at end of game

var options= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins= 0;
var losses= 0;
var guessesLeft= 10;
var letters= [];
var guessedLetters= [];
var reset= "";

var userText = document.getElementById ("userText");
		// console.log(userText);

document.onkeyup= function (event) {

	var userChoice= event.key;
		userText = userChoice;
		console.log(userChoice);

	var arrIndex= Math.floor(Math.random()* options.length);
		
	var computerChoice = options[arrIndex];
		console.log(computerChoice);

		if (userChoice === computerChoice) {
			wins++
			guessesLeft--;
			// alert("wins");
		} 
		else 
			losses++
			guessesLeft--;
			// alert("losses");

		for (var i = 1; i < 26; i++){
			letters.push(guessedLetters);
		}

		// if (guessesLeft===0){
		// 	document.reset();
		// }

		var html = "<p>Wins: " + wins + "</p>" +
		"<br>" +
		"<p>Losses: " + losses + "</p>" +
		"<br>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<br>" +
		"<p>Letters you have guessed so far:              " +  guessedLetters  + "</p>";

		document.querySelector(".gameBoard").innerHTML = html;

		}




