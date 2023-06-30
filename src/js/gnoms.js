export class Gnom {
  constructor(element) {
    this.element = element;
  }

  addGnom(sectionNumber) {
    const section = this.element.querySelectorAll(".table_section");
    const addElem = document.createElement("img");
    addElem.setAttribute("src", "./img/goblin.png");
    addElem.setAttribute("class", "image");
    section[sectionNumber].append(addElem);
  }

  removeGnom(sectionNumber) {
    const section = this.element.querySelectorAll(".table_section");
    const image = section[sectionNumber].querySelector(".image");
    if (section[sectionNumber].hasChildNodes()) {
      // section[sectionNumber].removeChild(image)
      image.remove();
    }
  }
}
