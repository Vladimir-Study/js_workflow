class Game {
  constructor() {
    this.showScreen = document.createElement("div");
  }

  gameWin() {
    const body = document.querySelector("body");
    const text = document.createElement("p");
    text.setAttribute("class", "show_text");
    this.showScreen.append(text);
    text.textContent = "You WIN!";
    body.prepend(this.showScreen);
    this.showScreen.classList.add("show_screen");
  }

  gameLose() {
    const body = document.querySelector("body");
    const text = document.createElement("p");
    text.setAttribute("class", "show_text");
    this.showScreen.append(text);
    text.textContent = "You LOSE!";
    body.prepend(this.showScreen);
    this.showScreen.classList.add("show_screen");
  }
}
