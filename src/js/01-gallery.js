import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
const div = document.querySelector("#gallery");
list.style.display = "grid";
list.style.listStyleType = "none";
list.style.gap = "20px";
const markup = galleryItems
  .map(
    (img) =>
      `<li><img src=${img.preview} data-src=${img.original} alt=${img.description} width=100% height = auto> </li>`
  )
  .join("");
list.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", select());

function select() {
  if (select.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = select.target.getAttribute("data-src");

  const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${selectedImage}" width="800" height="600">
    </div>
`);

  instance.show();

  gallery.addEventListener("keydown", (select) => {
    if (select.key === "Escape") {
      instance.close();
    }
  });
}
