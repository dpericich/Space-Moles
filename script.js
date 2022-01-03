//////////////////////////////////////////////////////////
/////////////  Whack a Space Mole Game  //////////////////
//////////////////////////////////////////////////////////

// // Welcome Screen Constants
// const introText = "They've come, not from deep underground but from deep in space. Smash them when they show their stupid faces before they can reach Earth and challenge Elon's Boring company for tunnel supremacy!";
// const endText = "It's over, all over. I shouldn't have expected you to save Earth. I'm on the next SpaceX flight to New South Africa. Try again maybe...";
// const begin = document.querySelector('.begin');
// const storyText = document.querySelector('.story-text');
// const gameTitle = document.querySelector('.game-title');
// storyText.innerText = introText;

// // Play Screen Constants
// const gameboard = document.querySelector('.gameboard');
// const scoreboard = document.querySelector('.scoreboard');
// const countdown = document.querySelector('.countdown');
// countdown.innerText = "Time Remaining: 00:05";
// const score = document.querySelector('.score');
// scoreboard.style.visibility = 'hidden';
// const spots = document.querySelectorAll('.spot');
// const moleImagePath = '/images/mole.png';
// const hillImagePath = '/images/hill.png';
// const explosionImagePath = '/images/explosion.png';
// // Change this for time length and timer showing
// const gameTime = 5;

// // Final Score Screen Constants
// const finalScore = document.querySelector('.final-score');
// const playAgain = document.querySelector('.play-again');
// playAgain.style.visibility = 'hidden';

// // Game Variables
// let currentScore = 44;

// // This class should be in charge of gameboard setup and teardown
// class GameBoard {
//     constructor() {
//         this.boardSpots = []
//         this.space = new BoardSpace();
//         this.score = 15;
//         this.previousPosition = null;
//         this.currentPosition = null;
//     }

//     createNewBoard() {
//         const newGB = document.querySelector('.gameboard');
//         this.createTwoSpotRow(newGB);
//         this.createThreeSpotRow(newGB);
//         this.createTwoSpotRow(newGB);
//         this.boardSpots = document.querySelectorAll('.board-space')
//     }

//     createTwoSpotRow(gameBoard) {
//         const twoSpotRow = document.createElement('div');
//         twoSpotRow.classList.add('row')
//         for (let i = 0; i < 2; i++) {
//             this.space.createBoardSpace(twoSpotRow);
//         }
//         gameBoard.appendChild(twoSpotRow);
//     }

//     createThreeSpotRow(gameBoard){
//         const threeSpotRow = document.createElement('div');
//         threeSpotRow.classList.add('row')
//         for (let i = 0; i < 3; i++) {
//             this.space.createBoardSpace(threeSpotRow);
//         }
//         gameBoard.appendChild(threeSpotRow);
//     }

//     // Manipulate active spot 
//     // could use data-status='active' or 'inactive' to dictate whether item can be clicked

//     deleteGameBoard(){
//         const currentGB = document.querySelector('.gameboard');
//         while (currentGB.firstChild) {
//             currentGB.removeChild(currentGB.firstChild);
//         } 
//         this.boardSpots = []
//     }
// }

// // This will have the actions for changing the individual element and should create the div for placing in the board
// // What else should the board know?
// class BoardSpace {
//     constructor() {}

//     createBoardSpace(gameRow){
//         const newBoardSpace = document.createElement('div');
//         newBoardSpace.style.backgroundImage = `url('${hillImagePath}')`;
//         newBoardSpace.classList.add('board-space');
//         newBoardSpace.addEventListener('click', this.setSpotToBang)
//         gameRow.appendChild(newBoardSpace);
//     }

//     setSpotToHill() {
//         this.style.backgroundImage = `url('${hillImagePath}')`;
//     }

//     setSpotToMole() {
//         this.style.backgroundImage = `url('${moleImagePath}')`;
//     }

//     setSpotToBang() {
//         this.style.backgroundImage = `url('${explosionImagePath}')`;
//     }
// }

// class ScoreBoard {
//     constructor(gameBoard) {
//         this.gameBoard = gameBoard
//     }

//     updateScoreBoard() {
//         const score = document.querySelector('.score');
//         score.innerText = this.threeDigitScore(this.stringScore(this.gameBoard.score))
//     }

//     threeDigitScore(score) {
//         if (score.length === 3) return score;
//         if (score.length === 2) return '0' + score;
//         return '00' + score;
//     }

//     stringScore(score) {
//         return score.toString();
//     }

//     resetScore() {
//         this.score = 0;
//     }
// }

// class Timer {
//     constructor() {
//         this.currentTime = gameTime;
//         this.timerID = 0;
//     }

//     twoDigitTime(currentTime) {
//         if(currentTime.toString().length === 1) return '0' + currentTime;
//         return currentTime;
//     }

//     // TODO : Could make the text red at a certain threshold? 
//     updateCountdown() {
//         this.timerID = setInterval(() => {
//             if (this.currentTime >= -1) {
//                 this.currentTime -= 1;
//                 countdown.innerText = `Time Remaining: 00:${this.twoDigitTime(this.currentTime)}`;
//             } else {
//                 clearInterval(this.timerID);
//             }
//         }, 1 * 1000)
//     }
// }

// // Start Game
// begin.addEventListener('click', () => {
//     const gb = new GameBoard();
//     const newTimer = new Timer();
//     const scoreBoard = new ScoreBoard(gb);
//     gb.createNewBoard();
//     scoreboard.style.visibility = 'visible';
//     storyText.innerText = '';
//     begin.style.visibility = 'hidden';
//     newTimer.updateCountdown();
//     // If I had a god object, this logic would go in a teardown method
//     setTimeout((gb) => {
//         gb.deleteGameBoard();
//         delete newTimer
//         scoreboard.style.visibility = 'hidden';
//         storyText.innerText = endText;
//         playAgain.style.visibility = 'visible';
//         // Set final screen score
//         finalScore.style.visibility = 'visible';
//         finalScore.innerText = `Final Score: ${gb.score}`;
//         scoreBoard.resetScore();
//     }, (gameTime + 1) * 1000, gb);
// })

// playAgain.addEventListener('click', () => {
//     storyText.innerText = introText;
//     finalScore.style.visibility = 'hidden';
//     begin.style.visibility = 'visible';
//     playAgain.style.visibility = 'hidden';
// })


