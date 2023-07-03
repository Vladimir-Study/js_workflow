import { DataOne } from "./sorted_data_one.js";
import { Gnom } from "../gnoms/gnoms.js";
import { Counter } from "../gnoms/counter.js";
import { Game } from "../gnoms/game.js";
// import '../css/style.css'

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

  const gnom = new Gnom(document.querySelector(".table"));
  const dataOne = new DataOne();
  const counter = new Counter(document.querySelector(".count"));
  const game = new Game();
  window.gnom = gnom;
  window.dataOne = dataOne;
  window.counter = counter;
  window.game = game;

  let lastIndex = 0;

  const gnomsInterval = setInterval(() => {
    lastIndex = gnom.toggleGnom(4, lastIndex);
    //   // function getRundomInt(max) {
    //   //   return Math.floor(Math.random() * (max - 1));
    //   // }
    //   // let sectionNumber = getRundomInt(4);
    //   // if (lastIndex !== sectionNumber) {
    //   //   gnom.addGnom(sectionNumber);
    //   //   gnom.removeGnom(lastIndex);
    //   //   lastIndex = sectionNumber;
    //   // }
  }, 1000);

  // const dataFields = ["id", "title", "year", "imdb"];
  // dataOne.creteHeader();
  // let fieldCounter = 0;
  // let sortSide = true;
  // const tableInterval = setInterval(() => {
  //   dataOne.clearTable();
  //   if (sortSide) {
  //     const sortDown = dataOne.sortedData(dataSet, dataFields[fieldCounter]);
  //     dataOne.insertTable(sortDown);
  //     sortSide = false;
  //   } else {
  //     const sortTop = dataOne.sortedDataReverse(
  //       dataSet,
  //       dataFields[fieldCounter]
  //     );
  //     dataOne.insertTable(sortTop);
  //     sortSide = true;
  //     fieldCounter++;
  //     if (fieldCounter === dataFields.length) {
  //       fieldCounter = 0;
  //     }
  //   }
  // }, 1000);

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

// comment this to pass build
// const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");
