fetch('https://jsonplaceholder.typicode.com/photos')
    .then (response =>{
        response.json()
    .then (images => {
        allColours = images
        let imagesChosen = images.slice(0, 30);
        renderImg(imagesChosen)
        displayImages()
    })
    })

let allColours
const modal = document.querySelector('#myModal')
const span = document.querySelector(".close");
const content = document.querySelector('#content')
const caption = document.querySelector('#caption')
const nextButton = document.querySelector('#nextColours')
const previousButton = document.querySelector('#previousColours')
let page_number = 1
const result = document.querySelector('#result')

function renderImg(images) {
    images.forEach(image => {
        console.log(image)
        result.innerHTML += '<div class="images" data-image="' + image.url + '" data-title="' +
            image.title + '"><img src="' + image.thumbnailUrl + '"></div>'
    });
}

span.addEventListener('click', e => {
    modal.style.display = "none";
})

nextButton.addEventListener('click', e => {
    page_number++
    if (page_number === 167) {
        nextButton.style.display = 'none'
    }
    previousButton.style.display = 'block'
    let imagesChosen = allColours.slice((page_number - 1) * 30, page_number * 30);
    result.innerHTML = ''
    renderImg(imagesChosen)
    displayImages()
    window.scrollTo(0,0)
})

previousButton.addEventListener('click', e => {
    page_number--
    if (page_number === 1) {
        previousButton.style.display = 'none'
    }
    let imagesChosen = allColours.slice((page_number - 1) * 30, page_number * 30);
    result.innerHTML = ''
    renderImg(imagesChosen)
    displayImages()
    window.scrollTo(0,0)
})

function displayImages() {
    document.querySelectorAll('.images').forEach(image => {
        image.addEventListener('click', () => {
            content.innerHTML = '<img src="' + image.dataset.image + '">'
            caption.innerHTML = image.dataset.title
            modal.style.display = "block";
        })
    })
}
