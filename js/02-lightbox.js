import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryList = document.querySelector(".gallery")

gallaryList.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems))

new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: "alt" });









function createGalleryMarkup  (galleryEl) {
    return galleryEl.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image"
  src="${preview}"
   data-source="${original}"
  alt="${description}" />
  </a>
</li>`).join("") 
  
};







