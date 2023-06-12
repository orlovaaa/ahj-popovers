import PopoverHtml from "../modules/PopoverHtml";

test("PopoverHtml", () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector(".container");
  const popoverHtml = new PopoverHtml(container);
  popoverHtml.bindToDOM();

  expect(container.innerHTML).toEqual(PopoverHtml.markup);
});