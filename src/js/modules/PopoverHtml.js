export default class PopoverHtml {
    constructor(parentEl) {
      this.parentEl = parentEl;
    }
  
    static get markup() {
      return `
      <div class="popover">
        <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
      </div>
      `;
    }
  
    bindToDOM() {
      this.parentEl.innerHTML = PopoverHtml.markup;
    }
}