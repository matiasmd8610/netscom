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
      loop: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      effect: "fade",
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
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

/*Header anchor links
*********************************************/
$(document).ready(function(){
  $('header li a[href^="#"], .swiper-slide .btn').on('click',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 75
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


/*CLIENTS IMAGES  // IF para que no haga break el submenu en paginas sin clientes)
****************************************************/
async function getClientsJson() {
  await $.get("../assets/data/clients.json", function (response, state) {
      if (state === "success") {
          let clientsResponse = response;
          let i = 0;
          for (const item of clientsResponse) {
            //console.log(item.name);
            //console.log(i);
            let img = document.createElement("img");
            img.alt = item.name;
            i++;
            if (i < 67){
              img.src = "assets/images/clientes/" +  item.src;
              document.getElementById("imagenes").appendChild(img);
            }
            else if (i >= 67 && i < 134){
              img.src = "assets/images/clientes/" + item.src;
              document.getElementById("imagenes2").appendChild(img);
            }
            else if (i >= 134 && i < 201){
              img.src = "assets/images/clientes/" + item.src;
              document.getElementById("imagenes3").appendChild(img);
            }
            else {
              img.src = "assets/images/clientes/" + item.src;
              document.getElementById("imagenes4").appendChild(img);
            }
          }  
      }
  });
}

if ($("#imagenes").length > 0) { //Check if home or clients pages
  getClientsJson();
}

   
/*Swiper Clients logos initialize
**************************************/
if (document.querySelector('.swiper-clientsLogos')) {
  const swiper = new Swiper('.swiper-clientsLogos', {
      direction: "horizontal",
      loop: false,
      autoplay: false,
      effect: "fade",
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });
}


/*HEADER SUBMENU MOBILE
**********************************************/
document.querySelectorAll('.has-submenu').forEach((element, index) => {
  element.addEventListener('click', ()=> {
    element.classList.toggle('active');
  })
});

/*SET ACTIVE TO ANCHOR LINK MENU
**************************************************/
$('.navbar-nav .contact-link').on("click", function() {
  $('.navbar-nav li a').removeClass('active');
  $(this).addClass('active');
});





