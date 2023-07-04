class Gnom {
  constructor(element) {
    this.element = element;
  }

  addGnom(sectionNumber) {
    const section = this.element.querySelectorAll(".table_section");
    const addElem = document.createElement("img");
    addElem.src = "2dbd01ce16c0fa83cb67.png";
    addElem.classList.add("image");
    // addElem.setAttribute("src", "img/goblin.png");
    // addElem.setAttribute("class", "image");
    section[sectionNumber].append(addElem);
    return sectionNumber;
  }

  removeGnom(sectionNumber) {
    const section = this.element.querySelectorAll(".table_section");
    const image = section[sectionNumber].querySelector(".image");
    if (section[sectionNumber].hasChildNodes()) {
      image.remove();
    }
  }

  toggleGnom(maxGnoms, lastIndex) {
    let cellNumber = Math.floor(Math.random() * (maxGnoms - 1));
    if (cellNumber === lastIndex) {
      cellNumber++;
    }
    this.addGnom(cellNumber);
    setTimeout(() => {
      this.removeGnom(cellNumber);
    }, 1000);
    return cellNumber;
    // const allCell = this.element.querySelectorAll(".table_section");
    // let cellGnom = 0;
    // for (let cell of allCell) {
    //   if (cell.children.length === 0 ) {
    //     cellGnom++;
    //   } else {
    //     break;
    //   }
    // }
    // if (cellGnom === cellNumber) {
    //   this.removeGnom(cellGnom)
    //   this.addGnom(cellNumber+1)
    // } else {
    //   this.removeGnom(cellGnom)
    //   this.addGnom(cellNumber)
    // }
  }
}
