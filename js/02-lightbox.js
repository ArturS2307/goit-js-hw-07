import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const markup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', markup);

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionDelay: 250,
});

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if(evt.target.nodeName !== 'IMG') {
    return;
  }
}
