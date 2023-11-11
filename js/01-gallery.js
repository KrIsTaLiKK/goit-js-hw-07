import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".js-gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.addEventListener("click", onImageClick);

// 2 step - add markup to browser
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// 1 step - create gallery markup
function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </li>`;
    })
    .join("");
}

// 3 step - add handler of event Click on image
function onImageClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  //
  // const imgId = evt.target.dataset.source;
  // const currentItem = galleryItems.find(({ original }) => original === imgId);

  const instance = basicLightbox.create(
    `
          <div class="modal">
              <img src="${evt.target.dataset.source}">

          </div>
      `
  );

  instance.show();

  window.addEventListener("keydown", onKeyPress);

  function onKeyPress(evt) {
    console.log(evt.code);
    if (evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onKeyPress);
    }
  }
}
