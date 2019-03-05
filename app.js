var scores, roundScore, activePlayer;
startTheGame();
/*We have two players thats why we need two numbers in the array. This is the global points.             
scores = [0, 0]; */

/*This  keeps round score, if the player holds then these round score will be added to total points.
roundScore = 0;  */

/*if I active player is 0, it is player 1, if activePlayer is 1, it is player 2.
activePlayer = 0;  */

/*Now lets create a dice. Math.random() creates numbers between 0 to 0.9. We multiply with 6 because there are 6 numbers at dice. We need to add plus one, other wise the maximum number would be 5.9 because Math.random() biggest number 0.9.  So now by addin plus 1, we have 6.9, we need lower it to 6 by using floor() method.            
dice = Math.floor((Math.random() * 6) + 1);   */

//okay, now lets make dice number to show up for player number 1, we get the id from html. querySelector is used for selecting html classes and ids. textContent is to edit text. THIS IS A SETTER (we sent new information)
//document.querySelector('#current-' + activePlayer).textContent = dice;

//with innerHTML we can write html code in javascript, we gotta use string
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//we create a variable and we store inside whatever #score-0 has inside in html. THIS IS A GETTER (we recieve the information)
//let x = document.querySelector('#score-0').textContent;



//the next step is eventlistener, when we CLICK the roll button, we want dice to be activated 'btn-roll'
document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random number (roll the dice / create a dice)
    let dice = Math.floor((Math.random() * 6) + 1);

    // 2. Display the result (dice)
    let diceDOM = document.querySelector('.dice'); // so that we dont repeat
    // a. Make the dice visible again
    
    diceDOM.style.display = 'block';
    
    // b. Show the correct dice pictures
    diceDOM.src = `/img/dice-${dice}.png`;

    // 3. Update the round score IF the rolled number is NOT number 1. REMEMBER IF YOU GET 1, YOU LOSE ALL YOUR ROUND SCORE.
    if (dice !== 1) {
        // Add score (if dice is not equall to number 1)
        roundScore = roundScore + dice;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;

    } else {
        //Nexplayer
        nextPlayer();


    }
});

        document.querySelector('.btn-hold').addEventListener('click', function(){
            // Add CURRENT score to GLOBAL  when player pressed hold button
            scores[activePlayer] = scores[activePlayer] +  roundScore;
            //scores[activePlayer] += roundScore;

            // Update the UI
            document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

            // Check if the player won the game
            if (scores[activePlayer] >= 100) {
                document.querySelector('#name-' + activePlayer).textContent ="WINNER!";
                document.querySelector('.dice').style.display = 'none'; 
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

                //hide button roll and hold when player wins the game
                document.querySelector('.btn-roll').style.display = 'none'; 
                document.querySelector('.btn-hold').style.display = 'none'; 
            } else {
                // Next Player
                nextPlayer();
            }
            
        });




        //NEXT PLAYER
        function nextPlayer () {
        // Next player (remember if you get number 1 you loose your points and turns go to opponent )
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        /* same as above
        if(activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        */

        // Now roundscore should be 0 because you get NUMBER 1 DICE and lost your points
            roundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

        // Active class gets dark background to help identifying whos turn it is. see html, css. We must remove and add active class when players turn changes. TOGGLE: if it has active class remove it, if it doesnt have active class add it

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
        //document.getElementById('player-0-panel').classList.remove('active');
        //document.getElementById('player-1-panel').classList.add('active');

        //Hide the dice
            document.querySelector('.dice').style.display = "none";

        }

        document.querySelector('.btn-new').addEventListener('click', startTheGame);

        //Start The Game
        function startTheGame(){
            activePlayer = 0;
            scores = [0, 0];
            roundScore = 0;

            //make the dice picture invisible in the beginning of the game. 
            document.querySelector('.dice').style.display = 'none';

            //reset all scores (total score and round score)
            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('#name-0').textContent ="Player 1";
            document.querySelector('#name-1').textContent ="Player 2";

            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');

            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('.btn-roll').style.display = 'block'; 
            document.querySelector('.btn-hold').style.display = 'block'; 
        }