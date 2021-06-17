fetch('https://jsonplaceholder.typicode.com/photos')
    .then (response =>{
        response.json()
    .then (images => {
        let imagesChosen = images.slice(0, 30);
        renderImg(imagesChosen)
        document.querySelectorAll('.images').forEach(image => {
            image.addEventListener('click', () => {
                content.innerHTML = '<img src="' + image.dataset.image + '">'
                caption.innerHTML = image.dataset.title
                modal.style.display = "block";
            })
        })
    })
    })

const modal = document.querySelector('#myModal')
const span = document.querySelector(".close");
const content = document.querySelector('#content')
const caption = document.querySelector('#caption')


function renderImg(images) {
    const location = document.querySelector('#result')
    images.forEach(image => {
        console.log(image)
        location.innerHTML += '<div class="images" data-image="' + image.url + '" data-title="' + image.title + '"><img src="' + image.thumbnailUrl + '"></div>'
    });
}


span.addEventListener('click', e => {
    modal.style.display = "none";
})




// Fetch the data above, and display the titles and the thumbnails in a
// grid on a page.When the user clicks on any title or image, it should display the large
// version of the image in a pop-up over the page (a modal)
// there is 5000 objects in the data so you will probably want to reduce the array to only show ~100
// or the page will load really slowly