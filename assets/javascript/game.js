
// variable for wins, losses, guesses left
// variable for letter guesses so far
// reset at end of game

var options= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins= 0;
var losses= 0;
var guessesLeft= 10;
var guessedLetters= [];

// var userChoice = document.getElementById ("userChoice");
		// console.log(userText);

document.onkeyup= function (event) {

	var userChoice= event.key;
		console.log(userChoice);

	var arrIndex= Math.floor(Math.random()* options.length);
		
	var computerChoice = options[arrIndex];
		console.log(computerChoice);

		if (guessesLeft===0){
			guessesLeft= 10;
			// wins= 0;
			losses++;
			guessedLetters=[];
			alert("Bummer! You can't read my mind");
			}
		else{	
			if (userChoice === computerChoice) {
			wins++
			guessesLeft=10;
			guessedLetters= [];
			// alert("wins");
			} 
			else {
				losses++
				guessesLeft--;
				guessedLetters.push(userChoice);
				// alert("losses");
			}
		}

		var html = "<p>Wins: " + wins + "</p>" +
		"<br>" +
		"<p>Losses: " + losses + "</p>" +
		"<br>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<br>" +
		"<p>Letters you have guessed so far: " +  guessedLetters  + "</p>";

		document.querySelector(".gameBoard").innerHTML = html;
			// console.log(guessedLetters);
		}




