import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fotoList = document.querySelector(".gallery");

const addFotoList = galleryItems.map(foto => `
    <li class="gallery__item">
        <a class="gallery__link"
        href=${foto.original}>
            <img class="gallery__image"
            src=${foto.preview} 
            alt=${foto.description}/>
        </a>
    </li>
`).join(" ");

fotoList.innerHTML = addFotoList;


let modalFoto = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
    });

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modalFoto.close()
    }
});