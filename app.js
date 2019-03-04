/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

//We have two players thats why we need two numbers in the array. This is the global points
scores = [0, 0];

//This  keeps scores that is earned during the round, if the player holds then these round score will be added his total points
roundScore = 0;

//if I active player is 0, it is player 1, is activePlayer is 1, it is player 2.
activePlayer = 0;

//Now lets create a dice. Math.random() creates numbers between 0 to 0.9. We multiply with 6 because there are 6 numbers at dice. We need to add plus one, other wise the maximum number would be 5.9 because Math.random() biggest number 0.9.  So now by addin plus 1, we have 6.9, we know wanna lower it to 6 by using floor() method.

/*dice = Math.floor((Math.random() * 6) + 1);
console.log(dice);*/

//okay, now lets make dice number to show up for player number 1, we get the id from html. querySelector is used for selecting html classes and ids. textContent is to edit text. THIS IS A SETTER (we sent new information)
//document.querySelector('#current-' + activePlayer).textContent = dice;

//with innerHTML we can write html code in javascript, we gotta use string
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//we create a variable and we store inside whatever #score-0 has inside in html. THIS IS A GETTER (we recieve the information)
//let x = document.querySelector('#score-0').textContent;

//make the dice picture invisible in the beginning of the game. we first select the class name for dice which is '.dice' and we want to change it css, so we write .style and after that pretty similar css code
document.querySelector('.dice').style.display = 'none';

//reset all scores (total score and round score)
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//the next step is eventlistener, when we CLICK the roll button, we want dice to be activated 'btn-roll'
document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random number (roll the dice / create a dice)
    let dice = Math.floor((Math.random() * 6) + 1);

    // 2. Display the result (dice)
    // a. Make the dice visible again
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `/img/dice-${dice}.png`;
    // b. Show the correct dice pictures


    // 3. Update the round score IF the rolled number is NOT number 1. REMEMBER IF YOU GET 1, YOU LOSE ALL YOUR ROUND SCORE.

});

