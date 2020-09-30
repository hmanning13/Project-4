/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Creating game class and constrocutor method
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = "null";
    }


//This function creates the different phrases the user will guess during the game    
    createPhrases() {
        const phrases = [
            {phrase: "Cheeseburger"},
            {phrase: "Hot Dog"},
            {phrase: "Steak"},
            {phrase: "Chicken"},
            {phrase: "French Fries"},
        ];
        return phrases;
    }


//Function pulls a random phrase from above for user to guess    
   getRandomPhrase() {
       const randomNumber = Math.floor(Math.random()*this.phrases.length);
       return this.phrases[randomNumber];
   };


//Function starts game and hides the phrase
//What the user sees once the start game is hit
//Shows user what the phrase looks like without giving away information   
   startGame() {
        const startScreen = document.getElementById("overlay");
        startScreen.style.display = "none";
        const phrase = new Phrase(this.getRandomPhrase().phrase);

        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
   }


//Function checks to see if every letter has been guessed before all lives have been lost   
   checkForWin() {
       let hiddenLetter = document.getElementsByClassName("hide");

       if(hiddenLetter.length === 0) {
           return true;
       } else {
           return false;
       }
   };


//Function removes life when user guesses wrong letter
//Swaps original heart image with an empty heart image indicating that a life has been lost   
   removeLife() {
        this.missed += 1;
        const lives = document.querySelector("img[src='images/liveHeart.png']");
        lives.setAttribute("src", "images/lostHeart.png");
        if(this.missed === 5) {
            this.gameOver();
        }
   };


//This function is used to show a new screen once the game is over
//Either a winning screen if all letters are guessed before lives are lost
//Or a losing screen showing they lost and ran out of lives   
   gameOver(gameWon) {
       const startScreen = document.getElementById("overlay");
       const endMessage = document.getElementById("game-over-message");
       startScreen.style.display = "";

       if(gameWon) {
           endMessage.textContent = "Congrats, you are a winner!"
           startScreen.className = "win";
           startBttn.textContent = "Play again?"
           this.resetGame();
       } else {
           endMessage.textContent = "Sorry, better luck next time!";
           startScreen.className = "lose";
           startBttn.textContent = "Play again?"
           this.resetGame();
       }
   };


//This helps pull all functions together and put them to use
//This function helps make the buttons and everything on screen run well with eachother   
   handleInteraction(button) {
    if (this.activePhrase.checkLetter(button.innerHTML)) {
        button.classList.add("chosen");
        this.activePhrase.showMatchedLetter(button.innerHTML);

        this.checkForWin();
        if (this.checkForWin() === true) {
            this.gameOver(true);
            
        }
    } else {
       button.classList.add("wrong");
       this.removeLife();
       button.disabled = true;
    }
    };


//Function the resets the game after a user has either won or lost
//Lets them play another right from the game over screen    
    resetGame() {
        const clearUl = document.querySelector("ul");
        clearUl.innerHTML = "";

        const keys = document.querySelectorAll(".key"); 
        for (let i = 0; i < keys.length; i++) {
            keys[i].classList = "key";
            keys[i].disabled = false;
        }

        const clearLives = document.querySelectorAll(".tries img");
        for (let i = 0; i < clearLives.length; i++) {
            clearLives[i].setAttribute("src", "images/liveHeart.png")
        }
        
    };
    
}
