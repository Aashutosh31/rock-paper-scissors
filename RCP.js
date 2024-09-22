let score = JSON.parse(localStorage.getItem('score')) ||  
        {
            wins : 0,
            losses : 0,
            ties: 0 
        };
          
/*
        if (!score) {
            score = {
                wins : 0,
                losses : 0,
                ties: 0 
            };
        }
        */

        let isAutoPlaying = false;
        let intervalId;

        function autoPlay() {
            if(!isAutoPlaying) {
        intervalId = setInterval(() => {
              const move = pickComputerMove();
                playGame(move);
                },1000);
        document.querySelector('.auto-play-button').innerText = 'Stop Playing'
                isAutoPlaying = true;
            }else{
                clearInterval(intervalId);
                isAutoPlaying = false;
                document.querySelector('.auto-play-button').innerText='Auto Play'
            }
        }

        document.querySelector('.rock')
        .addEventListener('click', () => {
            playGame('Rock')
        });

        document.querySelector('.paper')
        .addEventListener('click', () => {
            playGame('Paper')
        });

        document.querySelector('.scissors')
        .addEventListener('click', () => {
            playGame('Scissors')
        });

        document.querySelector('.auto-play-button')
        .addEventListener('click', () => {
            autoPlay();
        });

        document.body.addEventListener('keydown',(event) => {
            if(event.key === 'r'){
                playGame('Rock');
            }else if(event.key === 'p'){
                playGame('Paper');
            }else if(event.key === 's'){
                playGame('Scissors');
            }
        });

        document.querySelector('.reset-ask').addEventListener('click', () => {
            // Show the confirmation box
            document.getElementById('confirmationBox').style.display = 'block';
        });
        
        document.querySelector('.confirm-yes').addEventListener('click', () => {
            // If the user clicks "Yes", reset the score
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            updateScoreElement();
        
            // Hide the confirmation box after resetting
            document.getElementById('confirmationBox').style.display = 'none';
        });
        
        document.querySelector('.confirm-no').addEventListener('click', () => {
            // If the user clicks "No", just hide the confirmation box
            document.getElementById('confirmationBox').style.display = 'none';
        });
        
        
        let result='';
        let computerMove='';
        let playerMove='';

        function playGame(move) {
            playerMove = move;
            computerMove =pickComputerMove();

       

        if (playerMove === 'Scissors')
        {
        if (computerMove === 'Rock')
        {
            result='You Lose.';
        } 
        else if (computerMove === 'Paper')
        {
            result='You Win.';
        }
        else if (computerMove === 'Scissors')
        {
            result='Tie.';
        } 
        }

        else if (playerMove === 'Paper')
        {
        if (computerMove === 'Rock')
        {
            result='You Win.';
        } 
        else if (computerMove === 'Paper')
        {
            result='Tie.';
        }
        else if (computerMove === 'Scissors')
        {
            result='You Lose.';
        } 
        }
        
        else if (playerMove === 'Rock')
        {
            if (computerMove === 'Rock')
        {
            result='Tie.';
        } 
        else if (computerMove === 'Paper')
        {
            result='You Lose.';
        }
        else if (computerMove === 'Scissors')
        {
            result='You Win.';
        }
        }

        if(result === 'You Win.'){
            score.wins += 1;
        }
        else if (result === 'You Lose.') {
            score.losses += 1;
        }
        else if (result === 'Tie.') {
            score.ties += 1;
        }

        localStorage.setItem('score',JSON.stringify(score));

        
        updateScoreElement();
        updateResultElement();
        updateMovesElement();
}

        function updateMovesElement() {
            document.querySelector('.js-moves').innerHTML=
        `You Picked 
        <img class="move-image" src="${playerMove}-emoji.png" alt="move"> 
        Computer Picked 
        <img class="move-image" src="${computerMove}-emoji.png" alt="move">`
        }

        function updateResultElement() {
            document.querySelector('.js-results').innerHTML=
            `${result}`;
        }



        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = 
            `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
         }

        function pickComputerMove() {
            let computerMove='';
        console.log(computerMove);
 const randomNumber = Math.random();

if(randomNumber >=0 && randomNumber <1/3) {
             computerMove='Rock';
        } 
        else if(randomNumber >=1/3 && randomNumber < 2/3) {
             computerMove='Paper';
        }
        else {
             computerMove='Scissors';
        }

        return computerMove;

        }
        
        
