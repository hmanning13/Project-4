
let game;
const startBttn = document.getElementById("btn__reset");

startBttn.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});