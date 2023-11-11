import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector(".js-gallery");
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      title ="${description}"
    />
  </a>
    </li>`;
    })
    .join("");
}

const gallery = new SimpleLightbox(".js-gallery .gallery__link");
gallery.options.captionDelay = 250;
