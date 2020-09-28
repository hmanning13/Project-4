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


    //Still working 
    showMatchedLetter(letter) {
        const showLetter = document.querySelectorAll(".letter");

        for (let i = 0; i < showLetter.length; i ++) {
            if (this.phrase[i].includes(letter)) {
               showLetter[i].classList.remove("hide");
               showLetter[i].classList.add("show");
            } 
            
        }
    }
 }