import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fotoList = document.querySelector(".gallery");

const addFotoList = galleryItems.map(foto => `
    <li class="gallery__item">
        <a class="gallery__link">
            <img class="gallery__image" src=${foto.preview} alt=${foto.description}/>
        </a>
    </li>
`).join(" ")

fotoList.innerHTML = addFotoList

fotoList.addEventListener("click", selectFoto)

function selectFoto(event) {
    if (event.target.nodeName !== "IMG") {
        console.log(event.target.nodeName)
        return;
    }
    const selectedFoto = event.target.src
    console.log(selectedFoto)

    const selectedImage = eventImage.target.dataset.source;
    const openedImage = basicLightbox.create(`<img src="${selectedImage}">`);
    openedImage.show();



}
