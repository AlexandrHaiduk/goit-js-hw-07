import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesList = document.querySelector('.gallery')

const markup = galleryItems.map(({preview, original, description}) => {
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
</li>
    `
}

)
imagesList.insertAdjacentHTML('beforeend', markup.join(''))

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`, {
    onShow: (instance) => {
        window.addEventListener("keydown", onEscape)
    },

    onClose: (instance) => {
        window.removeEventListener("keydown", onEscape);
    }
})


imagesList.addEventListener("click", onImgClick)

function onImgClick(event) {
    event.preventDefault()
    const src = event.target.dataset.source
    console.log(src)

    instance.element().querySelector("img").src = src

    instance.show()  
    
}

function onEscape(event) {
    if (event.code === 'Escape') {
        instance.close()
    }
}


// instance.show()
