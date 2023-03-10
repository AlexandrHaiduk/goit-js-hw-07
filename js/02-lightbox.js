import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector('.gallery')

const markup = galleryItems.map(({preview, original, description}) => {
    return ` 
 <li class="gallery__item">
    <a href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
    `
}
)

imagesList.insertAdjacentHTML('beforeend', markup.join(''))


const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 400});