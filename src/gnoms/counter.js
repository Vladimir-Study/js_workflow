class Counter {
  constructor(element) {
    this.element = element;
    this.count = 0;
  }

  add() {
    this.count++;
    this.element.textContent = this.count;
    return this.count;
  }

  remove() {
    this.count = 0;
    this.element.textContent = this.count;
  }
}
