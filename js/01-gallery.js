import { galleryItems } from './gallery-items.js';
// console.log("basiclightbox", basicLightbox);

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const markup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', markup);

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick (evt) {
  evt.preventDefault();
if(!evt.target.classList.contains('gallery__image')) {
  return;
}
console.log(evt.target.dataset.source);

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
instance.show();
}

console.log(galleryItems);

