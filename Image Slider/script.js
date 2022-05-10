let images = document.querySelectorAll('.image');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');

forward.addEventListener('click', () => {
    slide();
});

backward.addEventListener('click', () => {
    slide();
});

let index = 0;
// make the first image display first
images[index].style.display = 'block';

function slide() {
    images.forEach((img) => {
        img.style.display = 'none';
    });
    index++;
    if (index > images.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }
    images[index].style.display = 'block';
}
