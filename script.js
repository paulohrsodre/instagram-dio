let time = 2000,
    currentImageindex = 0,
    images = document
                .querySelectorAll('#slider img')
    max = images.length;

function nextImage() {
    images[currentImageindex]
        .classList.remove('selected')

    currentImageindex++

    if(currentImageindex >= max)
        currentImageindex = 0

    images[currentImageindex]
        .classList.add('selected')
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener('load', start)