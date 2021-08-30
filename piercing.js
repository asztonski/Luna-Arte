  // buttons
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const closeCur = document.querySelector(".close")
  
  // modal
  const modalContent = document.querySelector(".modal-content");
  const slides = Array.from(document.querySelectorAll(".my-slides"));
  
  // text
  const numberText = document.querySelector('.my-slides--number');
  const captionText = document.getElementById("caption");
  
  // img on page
  const hoverShadows = Array.from(document.querySelectorAll(".hover-shadow"));
  
  
  let slideIndex;
  let translate = 0;
  let columnWidth;
  
  var root = document.querySelector('html')
  
  
  // if window resize reset all values
  window.addEventListener("resize", () => {
    slideIndex = 1;
    translate = 0;
    showSlides(slideIndex)
  })
  
  // buttons action
  
  prev.addEventListener("click", () => {
      if (slideIndex === 1) return false
      plusSlides(-1)
  });
  
  next.addEventListener("click", () => {
      plusSlides(1)
  });
  closeCur.addEventListener("click", () => closeModal());
  
  
  // add click to main img to trigger open carousel 
  
  hoverShadows.forEach((el, i) => {
    el.addEventListener("click", () => {
        openModal()
        currentSlide(i + 1)
    });
  })
  
  // Open modal
  
  function openModal(n) {
    root.classList.add('focus')
    document.getElementById("myModal").style.display = "flex";
    showAndClose();
    numberText.textContent = slideIndex + " / " + slides.length
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    root.classList.remove('focus')
  }
  
  slideIndex = 1;
    
    
    // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
    numberText.textContent = slideIndex + " / " + slides.length
  }
  
    
    // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
    numberText.textContent = slideIndex + " / " + slides.length
  }
    
  // control showing slides
  
  function showSlides(n) {
    let i;
    showAndClose();
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
  }
  
  // control buttons if reach to limit left or right
  
  function showAndClose() {
    if (slideIndex === 1) {
      prev.style.display = "none"
    } else {
      prev.style.display = "flex"
    }
  
    if(slideIndex === 69) {
      next.style.display = "none";
    } else {
      next.style.display = "flex";
    }
  }