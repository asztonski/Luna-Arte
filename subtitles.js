const body = document.querySelector('body')
const html = document.querySelector('html')

const imagesHolder = document.querySelectorAll('.carousel-row--img')
const images = document.querySelectorAll('.gallery img');

// const addVisible = () => {
//     imagesHolder.forEach(holder => {
//         if (holder.getBoundingClientRect().top < 400) {
//             holder.classList.add('visible')
//         }
//     })
// }

// window.addEventListener('scroll', () => {
//     addVisible();
// })

  
// images.forEach(image => {
//     image.onload = () => {
//         console.log('działam')
//         image.style.opacity = 1;
//         image.style.transform = 'translateY(0)'
//     }
// })

// Lazy load: Fade in and load images when scroll into viewport

// Images that needs to be formatted like this:
// <img class="lazy-load__image" data-src="image.png">




// Find all images

function checkScroll(e) {
  images.forEach((image, i) => {

    const top = Math.round(image.getBoundingClientRect().top)
    const height = Math.round(image.getBoundingClientRect().height)
    const windowHeight = window.innerHeight

    // If image is scrolled into viewport
    if (top + (height / 2) < windowHeight) {

      // If image has no src
      if (image.src.length < 1) {

        // Find url in data-img (<img data-src="image.png">) and set it as "src" 
        // (<img src="image.png">) when it is in viewport and should be loaded.
        if (image.dataset.src) {
          image.src = image.dataset.src;
        }
      }

      // Add active class to add animation
      image.classList.add('loaded')

    } else {
      image.classList.remove('loaded')
    }
  })
}

// Run function one time when first loaded to check if there are any images
// above the fold that needs to be loaded before scroll
checkScroll();

// Run function when scroll
window.addEventListener('scroll', function (e) {
  checkScroll();
})



  
  

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 40) {
        body.classList.add('after')
    } else {
        body.classList.remove('after')
    }
    const stars = document.querySelector('.stars')
    if (window.scrollY < 1000) {
        stars.style.transform = `translateY(${window.scrollY * 0.115}%`;
    } else return false
})


const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    if (window.innerWidth < 1024) {
        if (!html.classList.contains('menu'))
        html.classList.add('menu')
        else {
            html.classList.remove('menu')
        }
    } else {
        return false
    }
  })


