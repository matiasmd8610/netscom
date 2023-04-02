/*Sticky header
*****************************************************/
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

/*Swiper main initialize
**************************************/
if (document.querySelector('.swiper-main')) {
  const swiper = new Swiper('.swiper-main', {
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      effect: "fade",
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });
}


/*Update copy automatically
**************************************************/
document.querySelector(".year-copy").innerText = new Date().getFullYear();

/*Light Gallery
*********************************************/
document.querySelectorAll('.gallery-container').forEach((element, index) => {
  lightGallery(document.getElementById(element.getAttribute('id')), {
    plugins: [lgZoom, lgThumbnail],
    //licenseKey: 'your_license_key',
    speed: 1000,
    download: false,
    allowMediaOverlap: true,
    mobileSettings: {
      controls: false,
      showCloseIcon: true
    }
    // ... other settings
  });
});


/*Header anchor links
*********************************************/
$(document).ready(function(){
  $('header li a[href^="#"], .swiper-slide .btn').on('click',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 70
      }, 500, 'swing');
  });
}); 

/*Progress Bar scroll
**********************************************/
var progressBar = document.querySelector("#progress-bar span");
var totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function() {
  var currentHeight = window.pageYOffset;
  var progress = currentHeight / totalHeight * 100;
  progressBar.style.width = progress + "%";
});

/*AOS Init
*******************************************************/
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


/*CLIENTS IMAGES
****************************************************/
for (let i = 1; i <= 242; i++) {
  let img = document.createElement("img");
  img.setAttribute("alt", "Logo cliente");

  if (i < 60){
    img.src = "assets/images/sliderclientes/" + "(" + i + ")" + ".jpg";
    document.getElementById("imagenes").appendChild(img);
  }
  else if (i >= 60 && i < 120){
    img.src = "assets/images/sliderclientes/" + "(" + i + ")" + ".jpg";
    document.getElementById("imagenes2").appendChild(img);
  }
  else if (i >= 120 && i < 180){
    img.src = "assets/images/sliderclientes/" + "(" + i + ")" + ".jpg";
    document.getElementById("imagenes3").appendChild(img);
  }
  else {
    img.src = "assets/images/sliderclientes/" + "(" + i + ")" + ".jpg";
    document.getElementById("imagenes4").appendChild(img);
  }
  
}


/*Swiper Clients logos initialize
**************************************/
if (document.querySelector('.swiper-clientsLogos')) {
  const swiper = new Swiper('.swiper-clientsLogos', {
      direction: "horizontal",
      loop: true,
      autoplay: false,
      effect: "fade",
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });
}


// $(document).ready(function() {
//   let contenido = [
//     "<div id='imagenes'></div>",
//     "<div id='imagenes2'></div>",
//     "<div id='imagenes3'></div>"
//   ];
//   var index = 0;
//   setInterval(function() {
//     $("#images").fadeOut(500, function() {
//       $(this).replaceWith(contenido[index]);
//     }).fadeIn(500);
//     index = (index + 1) % contenido.length;
//   }, 2000);
// });




// $(document).ready(function() {
//   mostrarDiv();
// });

// function mostrarDiv() {
//   $('#imagenes').fadeIn(500).delay(5000).fadeOut(500, function() {
//     $(this).fadeIn(500, mostrarDiv);
//   });

//   $('#imagenes2').fadeIn(500).delay(6000).fadeOut(500, function() {
//     $(this).fadeIn(500, mostrarDiv);
//   });

//   $('#imagenes3').fadeIn(500).delay(9000).fadeOut(500, function() {
//     $(this).fadeIn(500, mostrarDiv);
//   });
// }

// $(document).ready(function() {
//   var divs = $('.miDiv');
//   var index = 0;
//   mostrarDiv();

//   function mostrarDiv() {
//     divs.eq(index).fadeIn(500).delay(2000).fadeOut(500, function() {
//       index = (index + 1) % divs.length;
//       mostrarDiv();
//     });
//   }
// });

