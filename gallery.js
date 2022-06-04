const THUMBNAILS = document.querySelectorAll('.thumbnail img');
const POPUP = documen.querySelector('.popup');

THUMBNAILS.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
            POPUP.classList.remove('hidden');
    });   
})