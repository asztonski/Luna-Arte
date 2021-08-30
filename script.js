const body = document.querySelector('body')
const global = document.querySelector('div.global');
const header = document.querySelector('header');
const headerNav = document.querySelector('header nav a');
const navBarBtn = document.querySelectorAll('.sidebar button');
const navBarCircle = document.querySelectorAll('.circle');
const contents = document.querySelectorAll('section');
const sideSocials = document.querySelector('.side-socials')
const logoBlack = document.querySelector('.section-logo')
const logoWhite = document.querySelector('.section-logo.white')
const sections = document.querySelectorAll('section')
const burgers = document.querySelectorAll('.burger')

document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})




let scrollValue = 0;
const navBtn = document.querySelectorAll('.navBtn')

window.onload = header.classList.add('active');
window.onload = window.scrollTo(0,0)
navBarCircle[0].classList.add('active');




function translateScroll() {
  
    global.style.transform = `translateY(${scrollValue * 100}vh`;


    let activeCircle = document.querySelector('.active');
    let indexOfActiveCircle = [...navBarCircle].indexOf(activeCircle)
    let realActiveCircle = indexOfActiveCircle + 1



    if (scrollValue > -7) {
      navBarCircle[indexOfActiveCircle].classList.remove('active');
      navBarCircle[-scrollValue].classList.add('active');
    } else return scrollValue

    if (scrollValue < 0) {
      navBarCircle[indexOfActiveCircle].classList.remove('active')
    }
    
    if (window.innerWidth > 1023) {
      burgers.forEach(burger => {
        if (scrollValue < 0) {
          burger.style.opacity = '1';
          burger.style.cursor = 'pointer'
        } else {
          burger.style.opacity = '.34'
          burger.style.cursor = 'default'
        }
      })
    }

    navBarCircle.forEach(circle => {
      if (indexOfActiveCircle === -scrollValue) {
        navBarCircle[indexOfActiveCircle].classList.add('active');
      }
    })

    if (scrollValue < -5) {
      setTimeout(() => {
        body.classList.add('after')
      }, 300);
    }
    if (scrollValue > -4) {
      setTimeout(() => {
        body.classList.remove('after')
      }, 300);
    }

    if (scrollValue === -3) {
      sideSocials.style.opacity = 0
    } else {
      sideSocials.style.opacity = 1
    }

    if (scrollValue === 0 || scrollValue === -5) {
      logoBlack.style.opacity = 0;
    } else logoBlack.style.opacity = 1
    if (scrollValue === -5) {
      logoWhite.style.opacity = 1
    } else {
      logoWhite.style.opacity = 0
    }

    if (scrollValue <= -1) {
      logoBlack.style.transition = '.36s ease'
      logoBlack.style.transitionDelay = '.74s'
    } else {
      logoBlack.style.transition = '.2s ease'
      logoBlack.style.transitionDelay = '0s'
    }
    

    // if (scrollValue <= -1) {
    //   logoBlack.style.transition = '.36s ease'
    //   logoBlack.style.transitionDelay = '.74s'
    // } else {
    //   logoBlack.style.transition = '.2s ease'
    //   logoBlack.style.transitionDelay = '0s'
    // }

    // if (scrollValue === -5) {
    //   logoBlack.style.transition = '.2s ease'
    //   logoBlack.style.transitionDelay = '0s'
    //   logoWhite.style.transition = '.36s ease'
    //   logoWhite.style.transitionDelay = '.84s'
    // } else {
    //   logoWhite.style.transition = '.2s ease'
    //   logoWhite.style.transitionDelay = '.1s'
    // }


    // let activeSection = document.querySelector('section.active');
    // let indexOfActiveSection = [...sections].indexOf(activeSection)
    // let realActiveSection = indexOfActiveSection + 1


    // if (scrollValue !== 0) {
    //   if (!sections[-scrollValue - 1].classList.contains('active')) {
    //     sections[-scrollValue - 1].classList.add('active');
    //     sections[indexOfActiveSection].classList.remove('active')
    //   }
    // } else {
    //   sections[indexOfActiveSection].classList.remove('active')
    // }

  };



  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

if (window.innerWidth > 1024) {
  document.onkeydown = checkKey;
}

function checkKey(e) {

    e = e || window.event;
    if (!html.classList.contains('menu')) {
      if (e.keyCode == '38') {
        if (scrollValue !== 0) {
          scrollValue++;
          translateScroll()
        } else return scrollValue;
      }
      else if (e.keyCode == '40') {
        if (scrollValue !== -6) {
          scrollValue--;
          translateScroll();
        } else return scrollValue;
      };
    } else {
      return false
    }
};

function onWheel(e) {
  if (!html.classList.contains('menu')) {
    if (e.deltaY < 0)
    {
     if (scrollValue !== 0) {
       scrollValue++;
       translateScroll();
     } else return scrollValue;
    }
    else if (e.deltaY > 0)
    {
     if (scrollValue !== -6) {
       scrollValue--;
       translateScroll();
     } else return scrollValue;
    }
  } else {
    return false
  }
}

if (window.innerWidth > 1024) {
  document.onwheel = debounce((e) => onWheel(e), 100);
}


navBarBtn[0].addEventListener('click', () => {
  scrollValue = -1;
  translateScroll()
})

navBarBtn[1].addEventListener('click', () => {
    scrollValue = -1;
    translateScroll()
})

navBarBtn[2].addEventListener('click', () => {
    scrollValue = -2;
    translateScroll()
})

navBarBtn[3].addEventListener('click', () => {
    scrollValue = -3;
    translateScroll()
})

navBarBtn[4].addEventListener('click', () => {
    scrollValue = 0;
    translateScroll()
})

navBarBtn[0].addEventListener('click', () => {
  if (scrollValue !== 0) {
    scrollValue++;
    translateScroll()
  } else return scrollValue;
})

navBarBtn[1].addEventListener('click', () => {
  if (scrollValue !== -5) {
    scrollValue--;
    translateScroll();
  } else return scrollValue;
});

navBarCircle.forEach(circle => {
  circle.addEventListener('click', () => {
    let index = [...navBarCircle].indexOf(circle);
    scrollValue = -index;
    translateScroll();
    circle.classList.add('active')
  })
});

// if (window.innerWidth > 1024) {

  // navBtn.forEach(button => {
  //   button.preventDefault()
  // })

  navBtn[0].addEventListener('click', () => {
    scrollValue = -1;
    translateScroll()
    console.log('dupa')
  })
  
  navBtn[1].addEventListener('click', () => {
      scrollValue = -2;
      translateScroll()
  })
  
  navBtn[2].addEventListener('click', () => {
      scrollValue = -4;
      translateScroll()
  })
  
  navBtn[3].addEventListener('click', () => {
      scrollValue = -5;
      translateScroll()
  })
  
  navBtn[4].addEventListener('click', () => {
      scrollValue = -6;
      translateScroll()
  })
  
  navBtn[5].addEventListener('click', () => {
    scrollValue = 0;
    translateScroll()
  })
// }

//   menu.addEventListener('click', () => {
//     if (scrollValue === 0) {
//       if (!headerNav.classList.contains('close')) {
//       headerNav.classList.add('close')
//       setTimeout(() => {
//         headerNav.style.zIndex = '-1'
//       }, 200);
//     } else {
//         headerNav.style.zIndex = '2'
//         setTimeout(() => {
//           headerNav.classList.remove('close')
//         }, 100);
//     }
//   }
//     if (scrollValue !== 0) {
//     if (menuNav.classList.contains('open')) {
//       menuNav.classList.remove('open')
//       menu.classList.remove('open')
//       setTimeout(() => {
//         menuNav.style.display = 'none';
//       }, 200);
//     } else {
//     menuNav.style.display = 'flex';
//     setTimeout(() => {
//       menuNav.classList.add('open');
//       menu.classList.add('open');
//     }, 50);
//   }
// } else return scrollValue;
//  });



// Mobile //

if (window.innerWidth < 1024) {
  global.addEventListener('scroll', () => {
    if (global.scrollTop > 10) {
      body.classList.add('afterMobile')
    } 
    else {
      body.classList.remove('afterMobile')
    }
  })
}

const html = document.querySelector('html')

burgers.forEach(burger => {
  burger.addEventListener('click', () => {
    if (window.innerWidth > 1024) {
      if (scrollValue < 0) {
        if (!html.classList.contains('menu')) {
          html.classList.add('menu')
          logoWhite.style.opacity = 1;
        }
        else {
            html.classList.remove('menu')
            if (scrollValue !== -5) {
              logoWhite.style.opacity = 0;
            }
        }
      }
    } else {
      if (!html.classList.contains('menu')) {
        html.classList.add('menu')
      }
      else {
          html.classList.remove('menu')
      }
    }
    })
})
