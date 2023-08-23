import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const fotoList = document.querySelector(".gallery");

const addFotoList = galleryItems.map(foto => `
    <li class="gallery__item">
        <a class="gallery__link">
            <img class="gallery__image"
            src=${foto.preview} 
            data-source=${foto.original} 
            alt=${foto.description}/>
        </a>
    </li>
`).join(" ") //----Nie dodawałem <div> </div> bo coś nieładnie to wyglądało----

fotoList.insertAdjacentHTML("afterbegin", addFotoList) 

fotoList.addEventListener("click", selectFoto)

function selectFoto(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const modalFoto = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`);
    modalFoto.show()

    const closePhoto = (event) => {
        if (event.key === "Escape") {
            modalFoto.close();
            document.removeEventListener("keydown", closePhoto)
        };
    };

    document.addEventListener("keydown", closePhoto)

};

