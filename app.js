/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;





//textContent se koristi za menjanje texta ali samo za JAVASCRIPT teksr innerHTML koristimo za html
//ubacili smo activePlayer i izbacili nulu da nam se igraci menjaju
//innerHTML bi koristili ako hocemo da ubacimo neki html u selektor
//document.querySelector('#current-' + activePlayer).innerHTML = '<em> + dice + </em>';primer
//var x = document.querySelector('#score-0').textContent;na ovaj nacin mozemo sacuvati u varijablu


document.getElementById('score-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//document.getElementById('score-0').textContent = '0';ovo je drugi nnacin
//da ubacimo nesto iz htmla ovde ne moramo da obelezavamo klasu i id izmedju zagrada


document.querySelector('.dice').style.display = 'none';//ako zelimo neto da menjamo u css-u.
document.querySelector('.btn-roll').addEventListener('click',function () {
//1.random number
var dice = Math.floor(Math.random() * 6) + 1;
//2.display the result
var diceDOM  = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';
//3.update round score if  the rolled number was not a 1
if (dice !== 1){
  //add score
  roundScore += dice;
document.querySelector('#current-'/*ovde smo izbacili 0*/ + activePlayer).textContent = roundScore;
//textContent se koristi za menjanje texta ali samo za JAVASCRIPT tekst innerHTML koristimo za html
//ubacili smo activePlayer i izbacili nulu da nam se igraci menjaju
} else {
  //mozemo ovde ubaciti sada funkciju 'nextPlayer();' ali necemo zbog citavog objasnjenja
  //next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternaru operation
//ako je aktivni player 0 onda activePlayer treba da bude 1(true) ako nije onda je 0 (false).
/*kako bi izgledalo da nije klasicni ELSE/IF
if (activePlayer === 0 ){
  activePlayer = 1;
} else {
 activePlayer = 0;
}
umesto toga gore sa ? :  je mnogo laskse.

*/
roundScore = 0;
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.player-0-panel').classList.toggle('active');//sta je toggle????
document.querySelector('.player-1-panel').classList.toggle('active');

/*
document.querySelector('.player-0-panel').classList.remove('active');na ovaj nnacin
uklanjamo ono sto zelimo sa classListe
document.querySelector('.player-1-panel').classList.add('active');na ovaj nnacin
dodajemo ono sto zelimo sa classListe
ovo je primer kako da dodamo i uklonimo
*/
document.querySelector('.dice').style.display = "none";

}
}
/*ovde stavljamo sta se desava kada kliknemo*/);
//anonimus function je kada bi krenuli odmah pred clicka da pisemo funkciju ali ne mozemo
// joj dati nikakvo ime zato sto se ne moze ponovo koristi to je jedan koncept
//drugi koncept je da napisamo sa strane funkciju nesto (){ neka funkcija}; pozovemo je btn();
//i tek onda ('click',btn); ali na nacin kao ovde napisan bez "()"ovih zagrada

//document.querySelector('.btn-roll').addEventListener('click',function() {
 // ovde napismo neki kod
//};ovo je anonimus function.

//function functionName() { ovo je drugi nacin pisanja koda
//  neki kod
//};
//btn();
//document.querySelector('.btn-roll').addEventListener('click',btn); bitno je da ovde nema zagraa god btn

//HOLD button

document.querySelector('.btn-hold').addEventListener('click',function functionName() {
  //Add current score to gloabal scores
  scores[activePlayer] += roundScore;

  //Update the UI (User Interface)
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

  //Check if player won the game


//Next player
nextPlayer();
});
// da ne bi opirali dva puta isti kod napisacemo novu funkciju u kojoj ce biti koda
//koji cemo opet pozvati.
function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';


}
//// stao na 10 min 42 lekcija
