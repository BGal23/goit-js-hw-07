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
    //------------niżej  to tylko próba-----------------
document.querySelector('button.html').onclick = () => {

	basicLightbox.create(`
		<h1>HTML</h1>
		<p>HTML inside a lightbox.</p>
	`).show()

}

document.querySelector('button.callbacks').onclick = (e) => {

	const html = `
		<h1>Callbacks</h1>
		<p>Take a look at the console of your browser.<br>This lightbox will close automaticly to demonstrate the close-callback.</p>
	`

	const instance = basicLightbox.create(html, {
		onShow: (instance) => console.log('onShow', instance),
		onClose: (instance) => console.log('onClose', instance)
	})

	instance.show((instance) => console.log('finished show()', instance))

	setTimeout(() => {
		instance.close((instance) => console.log('finished close()', instance))
	}, 3000)

}



}