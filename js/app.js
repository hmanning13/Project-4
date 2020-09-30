//Function helps create and make sure the start button works when clicked by user
let game;
const startBttn = document.getElementById("btn__reset");

startBttn.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});


//Function that makes the keys in the game work for the user's guess
const keys = document.getElementById("qwerty");
keys.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target);
    }
});