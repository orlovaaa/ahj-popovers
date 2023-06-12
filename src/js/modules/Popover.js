export default class Popover {
    constructor() {
      this._popover = [];
      this.onClick = this.onClick.bind(this);
      this.btnPopover = Array.from(document.querySelectorAll(".btn-danger"));
    }
  
    showPopover(btn) {
      this.popoverElement = document.createElement("div");
      const popoverHeding = document.createElement("h3");
      const popoverText = document.createElement("p");
  
      popoverHeding.textContent = "Popover Title";
      popoverText.textContent = "Popover text";
  
      this.popoverElement.appendChild(popoverHeding);
      this.popoverElement.appendChild(popoverText);
  
      this.popoverElement.dataset.position = "top";
  
      this.popoverElement.classList.add("form-popover");
  
      const id = performance.now();
      this._popover.push({
        id,
        element: this.popoverElement,
      });
  
      btn.appendChild(this.popoverElement);
  
      const { height, width } = this.popoverElement.getBoundingClientRect();
      const widthBtn = btn.getBoundingClientRect().width;
  
      this.popoverElement.style.left = widthBtn / 2 - width / 2 + "px";
      this.popoverElement.style.top = -3 - height + "px";
      return id;
    }
  
    removePopover(id) {
      const popover = this._popover.find((p) => p.id === id);
      popover.element.remove();
  
      this._popover = this._popover.filter((p) => p.id !== id);
    }
  
    onClick(e) {
      e.preventDefault();
      const activePopover = e.target.querySelector(".form-popover");
      if (activePopover) {
        this._popover.forEach((p) => this.removePopover(p.id));
        return;
      }
      this._popover.forEach((p) => this.removePopover(p.id));
      const btn = e.target;
      this.showPopover(btn);
    }
  
    btnEventListener() {
      for (let btn of this.btnPopover) {
        btn.addEventListener("click", this.onClick);
      }
    }
}