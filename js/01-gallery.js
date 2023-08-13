// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

document.addEventListener(
    "scroll",
    _.throttle(() => {
        console.log("Scroll handler call every 300ms");
    }, 300)
);
