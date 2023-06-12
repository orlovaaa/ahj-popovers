import Popover from "./modules/Popover";
import PopoverHtml from "./modules/PopoverHtml";

const container = document.querySelector(".container");

const popover = new PopoverHtml(container);
popover.bindToDOM();

const popoverEl = new Popover();
popoverEl.btnEventListener();