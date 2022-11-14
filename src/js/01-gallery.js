// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const imgContainer = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", imgMarkup);

imgContainer.addEventListener("click", onImgContainerClick);

function createImgMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li>
      <a class="gallery__item" href="${original}"">
          <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          />
      </a>
  </li>`;
  })
  .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});

function onImgContainerClick(evt) {
evt.preventDefault();
}

console.log(galleryItems);
