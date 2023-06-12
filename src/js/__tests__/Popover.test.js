import Popover from "../modules/Popover";
import PopoverHtml from "../modules/PopoverHtml";

test("showPopover", () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector(".container");
  const popoverHtml = new PopoverHtml(container);
  popoverHtml.bindToDOM();

  const popover = new Popover();
  const btnPopover = Array.from(document.querySelectorAll(".btn-danger"));
  popover.btnEventListener();

  btnPopover[0].click();

  const showPopover = document.querySelector(".form-popover");

  expect(showPopover).not.toBe(null);
});

test("removePopover", () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector(".container");
  const popoverHtml = new PopoverHtml(container);
  popoverHtml.bindToDOM();

  const popover = new Popover();
  const btnPopover = Array.from(document.querySelectorAll(".btn-danger"));
  popover.btnEventListener();

  btnPopover[0].click();
  btnPopover[0].click();

  const showPopover = document.querySelector(".form-popover");

  expect(showPopover).toBeNull();
});

test("Проверка на отображение не более одной подсказки на странице", () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector(".container");
  const popoverHtml = new PopoverHtml(container);
  popoverHtml.bindToDOM();

  const popover = new Popover();
  const btnPopover = Array.from(document.querySelectorAll(".btn-danger"));
  popover.btnEventListener();

  btnPopover[0].click();

  const showPopover = document.querySelectorAll(".form-popover");

  expect(showPopover.length).toBe(1);
});