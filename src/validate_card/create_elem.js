export default class CreateElem {

  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  static get markup() {
    return `
      <h3>Check your credit card number</h3>
      <ul class="cards list-unstyled">
        <li><span class="card visa" title="Visa">Visa</span></li>
        <li><span class="card master" title="Mastercard">Mastercard</span></li>
        <li><span class="card amex" title="American Express">American Express</span></li>
        <li><span class="card discover" title="Discover">Discover</span></li>
        <li><span class="card jcb" title="JCB">JCB</span></li>
        <li><span class="card diners_club" title="Diners Club">Diners Club</span></li>
        <li><span class="card mir" title="MIR">MIR</span></li>
      </ul>
      <form id="form" class="form-inline" novalidate="novalidate">
        <div class="form-group">
          <input class="form-control col-md-6" id="card_number" name="card_number" type="text" placeholder="Credit card number" data-original-title="" title="">
          <a id="submitform" class="btn btn-success">Click to Validate</a>
        </div>
      </form>
    `
  }

  bindToDOM() {
    this.parentElement.innerHTML = CreateElem.markup;  
  }

}