import { DataOne } from "./sorted_data_one.js";
import { Gnom } from "./gnoms.js";

// TODO: write code here
document.addEventListener("DOMContentLoaded", () => {
  const dataSet = [
    {
      id: 26,
      title: "Побег из Шоушенка",
      imdb: 9.3,
      year: 1994,
    },
    {
      id: 25,
      title: "Крёстный отец",
      imdb: 9.2,
      year: 1972,
    },
    {
      id: 27,
      title: "Крёстный отец 2",
      imdb: 9.0,
      year: 1974,
    },
    {
      id: 1047,
      title: "Тёмный рыцарь",
      imdb: 9.0,
      year: 2008,
    },
    {
      id: 223,
      title: "Криминальное чтиво",
      imdb: 8.9,
      year: 1994,
    },
  ];

  const gnom = new Gnom(document.querySelector(".table"));
  const dataOne = new DataOne();
  window.gnom = gnom;
  window.dataOne = dataOne;

  let lastIndex = 0;

  const gnomsInterval = setInterval(() => {
    function getRundomInt(max) {
      return Math.floor(Math.random() * (max - 1));
    }

    let sectionNumber = getRundomInt(4);
    if (lastIndex !== sectionNumber) {
      gnom.addGnom(sectionNumber);
      gnom.removeGnom(lastIndex);
      lastIndex = sectionNumber;
    }
  }, 1000);

  const dataFields = ["id", "title", "year", "imdb"];
  dataOne.creteHeader();
  let fieldCounter = 0;
  let sortSide = true;
  const tableInterval = setInterval(() => {
    dataOne.clearTable();
    if (sortSide) {
      const sortDown = dataOne.sortedData(dataSet, dataFields[fieldCounter]);
      dataOne.insertTable(sortDown);
      sortSide = false;
    } else {
      const sortTop = dataOne.sortedDataReverse(
        dataSet,
        dataFields[fieldCounter]
      );
      dataOne.insertTable(sortTop);
      sortSide = true;
      fieldCounter++;
      if (fieldCounter === dataFields.length) {
        fieldCounter = 0;
      }
    }
  }, 3000);
});

// comment this to pass build
// const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");
