$(document).ready(function(){

// Create a number between 19 and 120 to be displayed at the start of the game.
var random = Math.floor(Math.random()*101+19)
// Append var random to the randomNumber id in index.html.
$('#randomNumber').text(random);
console.log(random)

// Set random numbers (between 1-12) for each jewel
var valAmethyst = Math.floor(Math.random()*11+1)
var valDiamond = Math.floor(Math.random()*11+1)
var valRuby = Math.floor(Math.random()*11+1)
var valTopaz = Math.floor(Math.random()*11+1)

// Variables for userSum, wins, and losses to be displayed
var userSum = 0
var wins = 0
var losses = 0

// Append results to index.html
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

// Reset the game function
function reset(){
	random = Math.floor(Math.random()*101+19);
	// console.log(random);
	$('#randomNumber').text(random);
	valAmethyst = Math.floor(Math.random()*11+1);
    valDiamond = Math.floor(Math.random()*11+1);
    valRuby = Math.floor(Math.random()*11+1);
    valTopaz = Math.floor(Math.random()*11+1);
    userSum = 0;
    $('#finalTotal').text(userSum);
	}

// Increase the wins on userSum
function winner(){
	alert("Congratulations, you win!");
		wins++;
		console.log(alert);
		$('#numberWins').text(wins);
		reset();
}

// Increases the losses on userSum
function loser(){
	alert("You lost! Try again!!");
		losses++;
		console.log(alert);
		$('#numberLosses').text(losses);
		reset();
}

// Game logic for clicking on gems.
	$('#amethyst').on('click', function() {
		userSum = userSum + valAmethyst;
		console.log("New userSum= " + userSum);
		$('#finalTotal').text(userSum);
			// If #amethyst reaches the total of #randomNumber alert for winner() will run.
			if (userSum == random){
				winner();
			}
			// If #amethyst goes over the total of #randomNumber alert for loser() will run.
			else if (userSum > random){
				loser();
			}
	})

	$('#diamond').on('click', function() {
		userSum = userSum + valDiamond;
		console.log("New userSum= " + userSum);
		$('#finalTotal').text(userSum);
			// If #diamond reaches the total of #randomNumber alert for winner() will run.
			if (userSum == random){
				winner();
			}
			// If #diamond goes over the total of #randomNumber alert for loser() will run.
			else if (userSum > random){
				loser();
			}
	})

	$('#ruby').on('click', function() {
		userSum = userSum + valRuby;
		console.log("New userSum= " + userSum);
		$('#finalTotal').text(userSum);
			// If #ruby reaches the total of #randomNumber alert for winner() will run.
			if (userSum == random){
				winner();
			}
			// If #ruby goes over the total of #randomNumber alert for loser() will run.
			else if (userSum > random){
				loser();
			}
	})

 	$('#topaz').on('click', function() {
		userSum = userSum + valTopaz;
		console.log("New userSum= " + userSum);
		$('#finalTotal').text(userSum);
			// If #topaz reaches the total of #randomNumber alert for winner() will run.
			if (userSum == random){
				winner();
			}
			// If #topaz goes over the total of #randomNumber alert for loser() will run.
			else if (userSum > random){
				loser();
			}
	});
});