/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = "null";
    }

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

   getRandomPhrase() {
       const randomNumber = Math.floor(Math.random()*this.phrases.length);
       return this.phrases[randomNumber];
   };


   startGame() {
        const startScreen = document.getElementById("overlay");
        startScreen.style.display = "none";
        const phrase = new Phrase(this.getRandomPhrase().phrase);

        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
   }

   checkForWin() {
       let hiddenLetter = document.getElementsByClassName("hide");

       if(hiddenLetter.length === 0) {
           return true;
       } else {
           return false;
       }
   };

   removeLife() {
        this.missed += 1;
        const lives = document.querySelector("img[src='images/liveHeart.png']");
        lives.setAttribute("src", "images/lostHeart.png");
        if(this.missed === 5) {
            this.gameOver();
        }
   };

   gameOver(gameWon) {
       const startScreen = document.getElementById("overlay");
       const endMessage = document.getElementById("game-over-message");
       startScreen.style.display = "";

       if(gameWon) {
           endMessage.textContent = "Congrats, you are a winner!"
           startScreen.className = "win";
           this.resetGame();
       } else {
           endMessage.textContent = "Sorry, better luck next time!";
           startScreen.className = "lose";
           this.resetGame();
       }
   };

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
