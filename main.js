
var score, roundScore, activePlayer, gamePlaying;
activePlayer 	= 0;
score 			= [0,0];
roundScore 		= 0;
gamePlaying		= true;

var playbtn 	=	document.querySelector("#playbtn");
var dice		=	document.querySelector(".dice");
var scoreTotal	=	document.getElementById("score-"+ activePlayer);
var holdbtn		=	document.getElementById("holdbtn");
var holdscore	=	document.querySelector("#current-" + activePlayer);
var resetbtn	=	document.querySelector("#resetbtn");

//PRODUCCION
holdbtn.style.display = "none";
dice.style.display = "none";
document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";



playbtn.addEventListener("click", function(){ //COMIENZA CLICK PLAYBTN
	if (gamePlaying) {
		document.querySelector('.player-' + activePlayer).classList.add('active');
		var azar	=	Math.floor(Math.random() * 6) + 1;

		dice.style.display = "block";
		holdbtn.style.display = "block";
		dice.src =	"img/"+ azar + ".png";
		
		
		if (azar !== 1)
		{
			roundScore += azar;
			document.querySelector("#current-" + activePlayer).textContent = roundScore;
		}else{
			nextPlayer();
		
		}
		
	}
	

}); //TERMINA CLICK PLAYBTN





holdbtn.addEventListener("click", function(){ //COMIENZA CLICK HOLDBTN
	if (gamePlaying) {
		score[activePlayer] += roundScore;
	document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];

	if (score[activePlayer] >= 20) {
		document.querySelector("#player-" + activePlayer).textContent = "Winner!";
		document.querySelector('.player-' + activePlayer).classList.toggle('winner');
		dice.style.display = "none";
		playbtn.style.display = "none";
		holdbtn.style.display = "none";
		activePlayer = 0;
		gamePlaying = false;

	}else{
		nextPlayer();
	}
	}
	
	

}); //TERMINA CLICK HOLDBTN

resetbtn.addEventListener("click", resetGame);





function nextPlayer (){

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.querySelector('.player-1').classList.toggle('active');
	document.querySelector('.player-0').classList.toggle('active');
	
	dice.style.display = "none";


}

function resetGame(){
	gamePlaying = true;
	activePlayer = 0;
	score = [0,0];
	roundScore = 0;
	holdbtn.style.display = "none";
	playbtn.style.display = "block";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.querySelector("#player-0").textContent = "Player 1";
	document.querySelector("#player-1").textContent = "Player 2";
	document.querySelector('.player-0').classList.remove('winner');
	document.querySelector('.player-1').classList.remove('winner');
	document.querySelector('.player-0').classList.remove('active');
	document.querySelector('.player-1').classList.remove('active');
	document.querySelector('.player-0').classList.add('active');
	dice.style.display = "none";
	document.querySelector('.player-' + activePlayer).classList.remove('active');

}