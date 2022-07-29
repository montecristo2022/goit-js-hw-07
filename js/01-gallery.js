import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryList = document.querySelector(".gallery")

 gallaryList.addEventListener("click", onGalleryItemClick)

gallaryList.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems))









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





function onGalleryItemClick(event) {
    event.preventDefault()

  
     
    if (event.target.nodeName !== "IMG") return
    
//то что будет в модалке
    const instance = basicLightbox.create(`<img width="1000" height="800" src="${event.target.dataset.source}">`,
        {
            onShow: () => { document.addEventListener("keydown", onEscapeBntPress)},
            onClose: () => { document.removeEventListener("keydown", onEscapeBntPress)}
        })
    // console.log(event.target.dataset.source)
    instance.show()

    
function onEscapeBntPress(event) {
    if (event.key === "Escape") {
     instance.close()
 }
}
}








