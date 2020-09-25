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
}
