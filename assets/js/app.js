// -----------preloader-----------------
setTimeout(() => {
    const box = document.getElementById("box");
  
    box.style.display = "none";
  
    window.scrollTo(0, 0);
  
    document.body.classList.remove("overflow-hidden");
  }, 2000);
  
  // ------------------backtotop---------------------
  $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
  });
  
  // -----------navbar------------
  
  let label = document.querySelector("#label")
  let navbox = document.querySelector(".navbox")
  label.addEventListener("click", function () {
    navbox.classList.toggle("left-0")
  })
  function showNav() {
    document.body.classList.toggle('overflow-hidden')
    document.getElementById("label").classList.toggle("cross_icon");
  }
  
  
  // -------------------quantity-------------
  let counterDisplayElem = document.querySelector('.counter-display');
  let counterMinusElem = document.querySelector('.counter-minus');
  let counterPlusElem = document.querySelector('.counter-plus');
  
  let count = 1;
  
  updateDisplay();
  
  counterPlusElem.addEventListener("click", () => {
    count++;
    updateDisplay();
  });
  
  counterMinusElem.addEventListener("click", () => {
    count--;
    updateDisplay();
  });
  
  function updateDisplay() {
    counterDisplayElem.innerHTML = count;
  };
  // ------------------------------foot-locker-slider------------------------------------
  $('.custom_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 1,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  });
  // ===================================RELATED PRODUCT=====================================
  $('.related_slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    pauseonhover: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
 
  // ------------------aos------------------
  AOS.init({
    duration: 1200,
    once: true,
  }
  );
  
  