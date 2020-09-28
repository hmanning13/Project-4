const startBttn = document.getElementById("btn__reset");
let game;

startBttn.addEventListener("click", () => {
    game = new Game();
    game.startGame();
});