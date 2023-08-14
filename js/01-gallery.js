import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fotoList = document.querySelector(".gallery");

const newFotoList = galleryItems.map(foto => `
    <li>
        <div class="gallery__item">
            <a class="gallery__link">
                <img class="gallery__image" src=${foto.preview} alt=${foto.preview}/>
            </a>
        </div>
    </li>
`).join(" ")

fotoList.innerHTML = newFotoList


document.querySelector('.gallery__image').addEventListener("click", () => {
console.log(galleryItems[1].original)
const instance = basicLightbox.create(`
    <img src="${galleryItems[1].original}" >`)

    instance.show()
});