import DataOne from "./sorted_data_one";
import Gnom from "../gnoms/gnoms";
import Counter from "../gnoms/counter";
import Game from "../gnoms/game";
import CreateElem from "../validate_card/create_elem";
import ValidateNumber from "../validate_card/validate_number";
import { doc } from "prettier";

// TODO: write code here
document.addEventListener("DOMContentLoaded", () => {
  // const dataSet = [
  //   {
  //     id: 26,
  //     title: "Побег из Шоушенка",
  //     imdb: 9.3,
  //     year: 1994,
  //   },
  //   {
  //     id: 25,
  //     title: "Крёстный отец",
  //     imdb: 9.2,
  //     year: 1972,
  //   },
  //   {
  //     id: 27,
  //     title: "Крёстный отец 2",
  //     imdb: 9.0,
  //     year: 1974,
  //   },
  //   {
  //     id: 1047,
  //     title: "Тёмный рыцарь",
  //     imdb: 9.0,
  //     year: 2008,
  //   },
  //   {
  //     id: 223,
  //     title: "Криминальное чтиво",
  //     imdb: 8.9,
  //     year: 1994,
  //   },
  // ];

  const table = document.querySelector(".table");
  const gnom = new Gnom(table);
  const dataOne = new DataOne();
  const counter = new Counter(document.querySelector(".count"));
  const game = new Game();
  const validator = document.querySelector('.validator');
  const createElem = new CreateElem(validator);
  const validatorNumber = new ValidateNumber(document.querySelector('.validator'))

  window.gnom = gnom;
  window.dataOne = dataOne;
  window.counter = counter;
  window.game = game;

  createElem.bindToDOM();
  const btnValidate = document.querySelector('.btnValidate')
  btnValidate.addEventListener('click', e => {
    validator.classList.toggle('hideValidate')
  })
  const blockGame = document.querySelector('.game')
  const btnGame = document.querySelector('.btnGame')
  btnGame.addEventListener('click', e => {
    blockGame.classList.toggle('hideValidate')
  })
  
  const input = document.querySelector('.form-control')
  input.addEventListener('keyup', (e) => {
    let validateResult = validatorNumber.validateNumber(input.value);
    const cards = document.querySelectorAll('.card');
    if (validateResult !== undefined) {
      cards.forEach((item) => {
        if (Array.from(item.classList).includes(validateResult) === false) {
          item.classList.add('hideCard')
        }
      })
    } else {
      cards.forEach((item) => {
        item.classList.remove('hideCard')
      })
    }
  })

  let lastIndex = 0;

  const gnomsInterval = setInterval(() => {
    lastIndex = gnom.toggleGnom(4, lastIndex);
  }, 1000);

  const gnomActive = document.querySelector(".table");
  let loseCounter = 0;
  let winCounter = 0;
  gnomActive.addEventListener("click", (e) => {
    if (e.target.className == "image") {
      winCounter = counter.add();
      console.log(winCounter);
      gnom.removeGnom(lastIndex);
    } else {
      loseCounter++;
    }
    if (loseCounter === 5) {
      game.gameLose();
      loseCounter = 0;
    }
    if (winCounter === 25) {
      game.gameWin();
    }
  });
});

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");
