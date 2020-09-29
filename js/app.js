
let game;
const startBttn = document.getElementById("btn__reset");

startBttn.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});


const keys = document.getElementById("qwerty");
keys.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        game.handleInteraction(event.target);
    }
});