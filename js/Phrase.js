/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


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

    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    };


    
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