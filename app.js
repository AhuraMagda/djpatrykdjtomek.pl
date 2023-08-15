




// navLogo.addEventListener("click", moveIntroText)

// GALLERY IMAGES - change opacity

const galleryImages = document.querySelectorAll(".gallery__img")
console.log(galleryImages)

const changeOpacity = (image) => {
    image.style.opacity = image.style.opacity === "1" ? ".5" : "1";
}

// GALLERY IMAGES - make img bigger and put it in the center

const bigImageContainer = document.createElement('div')
bigImageContainer.classList.add("gallery__big-img__container")

const bigImage = document.createElement('img')
bigImage.classList.add("gallery__big-img")

const hideBigImageButton = document.createElement('span')
hideBigImageButton.classList.add("gallery__big-img__btn-hide")

const arrowLeft = document.createElement('span')
arrowLeft.classList.add("gallery__big-img__arrow-left")

const arrowRight = document.createElement('span')
arrowRight.classList.add("gallery__big-img__arrow-right")

const gallery = document.querySelector(".gallery")



const showBigImage = (image) => {
    bigImage.src = image.src
    bigImage.id = image.id
    gallery.appendChild(bigImageContainer)
    bigImageContainer.appendChild(arrowLeft)
    bigImageContainer.appendChild(bigImage)
    bigImageContainer.appendChild(arrowRight)
    bigImageContainer.appendChild(hideBigImageButton)
}

const hideBigImage = () => {
    gallery.removeChild(bigImageContainer)
}

const changeImgRight = () => {
    let newId;
    let lastIndex = galleryImages.length-1
    galleryImages.forEach((image, index) => image.id === bigImage.id && (newId = (index === lastIndex ? 0 : index+1)));
    bigImage.src = galleryImages[newId].src
    bigImage.id = galleryImages[newId].id
}

const changeImgLeft = () => {
    let newId;
    let lastIndex = galleryImages.length-1
    galleryImages.forEach((image, index) => image.id === bigImage.id && (newId = (index === 0 ? lastIndex : index-1)));
    bigImage.src = galleryImages[newId].src
    bigImage.id = galleryImages[newId].id
}

galleryImages.forEach(image => {
    image.addEventListener("mouseover", function() {changeOpacity(image)});
    image.addEventListener("mouseout", function() {changeOpacity(image)});
    image.addEventListener("click", function() {showBigImage(image)});
    }
)

arrowRight.addEventListener("click", changeImgRight)
arrowLeft.addEventListener("click", changeImgLeft)

hideBigImageButton.addEventListener("click", hideBigImage)