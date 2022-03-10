function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/* make the navbar opaque when scrolled past homescreen image */
window.addEventListener("scroll", function() {
    let scroll = this.scrollY;
    let navbar = $("#home .navbar");
    let resumeLink = $(".resume #resume-link");
    if (scroll > window.innerHeight - 50) {
        navbar.css("background-color", "#333333");
        resumeLink.css("border-width", "1px");
    } else {
        navbar.css("background-color", "rgba(128, 128, 128, 0.590)");
        resumeLink.css("border-width", "2px");
    }
});
//interests
$(function() {
  $('.my-interests').hover(function() {
    $('.interests').css('display', 'initial');
    $('.work-experience').css('display', 'none');
    $('.technical-background').css('display', 'none');
    $('.skills').css('display', 'none');
    $('.initial-space').css('display', 'none');
  })});
//work experience
$(function() {
  $('.my-work-experience').hover(function() {
    $('.interests').css('display', 'none');
    $('.work-experience').css('display', 'initial');
    $('.technical-background').css('display', 'none');
    $('.skills').css('display', 'none');
    $('.initial-space').css('display', 'none');
  })});
 //technical background
$(function() {
  $('.my-technical-background').hover(function() {
    $('.interests').css('display', 'none');
    $('.work-experience').css('display', 'none');
    $('.technical-background').css('display', 'initial');
    $('.skills').css('display', 'none');
    $('.initial-space').css('display', 'none');
  })});
//skills
$(function() {
  $('.my-skills').hover(function() {
    $('.interests').css('display', 'none');
    $('.work-experience').css('display', 'none');
    $('.technical-background').css('display', 'none');
    $('.skills').css('display', 'initial');
    $('.initial-space').css('display', 'none');
  })});



  /*
//work experience
$(function() {
  $('.my-work-experience').hover(function() {
    $('.work-experience').css('display', 'initial');
  }, function() {
    // on mouseout, reset the background colour
    $('.work-experience').css('display', 'none');
  });
});
//techincal background
$(function() {
  $('.my-technical-background').hover(function() {
    $('.technical-background').css('display', 'initial');
  }, function() {
    // on mouseout, reset the background colour
    $('.technical-background').css('display', 'none');
  });
});
//skills
$(function() {
  $('.my-skills').hover(function() {
    $('.skills').css('display', 'initial');
  }, function() {
    // on mouseout, reset the background colour
    $('.skills').css('display', 'none');
  });
});

going to redo this without formsubmit.com
function contactFormSubmit() {
    //next couple lines to get the values from the input boxes
    // if any of them are empty, dont display the thank you alert
    let first_name = $("#firstName").value;
    let last_name = $("#lastName").value;
    let email = $("#email").value;
    
    console.log(firstname + lastName + email);
    
    
    if (first_name.length != 0 && last_name.length != 0 && email.length != 0 && ("@" in email)) {
        let alert_message = "Thank you, " + first_name + " for submitting! I will get back to you as soon as possible. In the meantime, you will be redirected to my form's host server for human verification."
        alert(alert_message);
    }
}
*/

/*preloader*/
function loaded() {
    disableScroll();
   /* 
  let navbar = document.querySelectorAll(".navbar");
  let name = document.querySelectorAll(".name");
  let position = document.querySelectorAll(".position-title");
  let socials = document.querySelectorAll(".socials");
  navbar.target.classList.add("invisible");
  name.target.classList.add("invisible");
  position.target.classList.add("invisible");
  socials.target.classList.add("invisible");
    */
    let loader = $("#preloader");
    let loader_outer = $("#preloader-outer");
    window.scrollTo(0,0);
    delay(1000).then(() => loaded_done(loader, loader_outer));
}
function loaded_done(loader, loader_outer) {
    removeFadeOut(loader, 200);
    removeFadeOut(loader_outer, 2000);
    //loader.style.display = "none";
    delay(700).then(() => enableScroll());
    //delay(200).then(() => fadeContentIn(navbar, name, position, socials));
    delay(2100).then(() => loader_outer.css("display", "none"));
}
function fadeContentIn(navbar, name, position, socials) {
  
  navbar.target.classList.add("invisible");
  name.target.classList.add("invisible");
  position.target.classList.add("invisible");
  socials.target.classList.add("invisible");
  
}
function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    let opacityStatement = "opacity "+seconds+"s ease"
    el.css("transition", opacityStatement);
    el.css("opacity", "0");
}
/*------------------For the preloader fade out transition------------------*/
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



/* Fade and slide animation functions when scrolling */
// code largely borrowed from Kevin Powell
// https://www.youtube.com/watch?v=huVJW23JHKQ
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const fallers = document.querySelectorAll(".fall-in");

const appearOptions = {
  threshold:0,
  rootMargin: "-100px 0px -300px 0px"
};
const slideOptions = {
  threshold: 0,
  rootMargin: "-50px 0px -450px 0px"
};
const fallOptions = {
  threshold:0,
  rootMargin:"-70px 0px -300px 0px"
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('appear');
    } else {
      entry.target.classList.add('appear');
    }
  });
}, appearOptions);

const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('appear');
    } else {
      entry.target.classList.add('appear');
    }
  });
}, slideOptions);

const fallOnScroll = new IntersectionObserver(function(entries, fallOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('appear');
    } else {
      entry.target.classList.add('appear');
    }
  });
}, fallOptions);



faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
sliders.forEach(slider => {
  slideOnScroll.observe(slider);
});
fallers.forEach(faller => {
  fallOnScroll.observe(faller);
});