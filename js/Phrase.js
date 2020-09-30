/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Creates the phrase class and a constructor method
//Adds a phrase to the display once the game is being played
//Hides the actual letters and just shows empty boxes for the user to guess the phrase
 class Phrase {
    constructor(phrase){
        this.phrase = phrase.toString().toLowerCase();
     }

    addPhraseToDisplay() {
        const ul = document.querySelector("#phrase ul");
        let html = "";
        for(let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === " ") {
                html += `<li class = "space"> </li>`;
            } else {
                html += `<li class = "hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
        }
        ul.innerHTML = html;
    }; 


//checks to see if the letter guessed is in the hidden phrase    
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };


//Function reveals the letter to the user if it is guessed correctly and in the phrase    
    showMatchedLetter(letter) {
        const showLetter = document.getElementsByTagName("li");
        for (let i = 0; i < showLetter.length; i ++) {
            if (showLetter[i].textContent == letter) {
               showLetter[i].classList.add("show"); 
               showLetter[i].classList.remove("hide");
            } 
            
        }
    }
 }