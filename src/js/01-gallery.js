// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imgContainer = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", imgMarkup);

imgContainer.addEventListener("click", onImgContainerClick);

function createImgMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
    })
    .join("");
}

function onImgContainerClick(event) {
  event.preventDefault();
  const isImgEl = event.target.classList.contains("gallery__image");

  if (!isImgEl) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}' width="800" height="600">
`);

  instance.show(() => {
    window.addEventListener("keydown", onEscKeyPress);
  });

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close(() => {
        window.removeEventListener("keydown", onEscKeyPress);
      });
      console.log(event.code);
    }
  }
}

console.log(galleryItems);
