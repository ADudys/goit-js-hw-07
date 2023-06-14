import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
list.classList.add("gallery");

const markup = galleryItems
  .map(
    (img) =>
      `<li>
      <a class="gallery__item" href="${img.original}">
      <img class="gallery__image" src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}" />
    </a>
    
    </li>`
  )
  .join("");

list.insertAdjacentHTML("afterbegin", markup);