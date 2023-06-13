import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");
list.classList.add("gallery");

const markup = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${img.original}">
        <img
          class="gallery__image"
          src="${img.preview}"
          data-source="${img.original}"
          alt="${img.description}"
        />
      </a>
    </div>`
  )
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

const galleryItem = document.querySelectorAll(".gallery__item");
const img = document.querySelectorAll(".gallery__image");

list.addEventListener("click", (event) => {
  event.preventDefault();

  const selectedImg = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `
  <img src="${selectedImg}" width="800" height="600">
`
  );
  instance.show();

  list.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
