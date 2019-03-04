/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

//We have two players thats why we need two numbers in the array. This is the global points
scores = [0, 0];

//This  keeps scores that is earned during the round
roundScore = 0;

activePlayer = 0;

//Now lets create a dice. Math.random() creates numbers between 0 to 0.9. We multiply with 6 because there are 6 numbers at dice. We need to add plus one, other wise the maximum number would be 5.9 because Math.random() biggest number 0.9.  So now by addin plus 1, we have 6.9, we know wanna lower it to 6 by using floor() method.

dice = Math.floor((Math.random() * 6) + 1);
console.log(dice);





