import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
list.style.display = "grid";
list.style.listStyleType = "none";
const markup = galleryItems
  .map(
    (img) =>
      `<li><img src=${img.preview} alt=${img.description} width=100% height = auto> </li>`
  )
  .join("");
list.insertAdjacentHTML("afterbegin", markup);
console.log(list);
console.log(markup);
