let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');
let Contact = document.querySelectorAll('#contact');
let navContact = document.querySelectorAll('#nav--contact');

const password = document.getElementById('password');

menuIcon.forEach(icon => {
  icon.onclick = () => {
    icon.classList.toggle('bx-x');
    navbar.forEach(nav => nav.classList.toggle('active'));
  }
});

// Add an event listener to navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'active' class from navbar
    document.querySelectorAll('.navbar').forEach(nav => {
      nav.classList.remove('active');
    });
    // Toggle the menu icon
    document.querySelectorAll('#menu-icon').forEach(icon => {
      icon.classList.remove('bx-x'); // Remove the 'bx-x' class to close the hamburger menu
    });
  });
});

// Add an "active" class to the clicked link
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // Remove any existing "active" class from links
    $('a').removeClass('active');

    // Add "active" class to clicked link
    $(this).addClass('active');
    
    // Smooth scroll to target as before
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 900, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

// When scroll on any section that section's corresponding hyperlink will be active and
// the previous activated hyperlink will be deactivated
$('section[id]').mouseover(function() {
  var sectionId = $(this).attr('id');
  var correspondingLink = $('a[href="#' + sectionId + '"]');
  // Remove active class from all links
  $('a').removeClass('active');
  // Add active class to the corresponding link
  correspondingLink.addClass('active');
});
  
// Set initial active link based on URL hash
$(document).ready(function() {
  var hash = window.location.hash;
  if (hash) {
    $('a[href="' + hash + '"]').addClass('active');
  }
  // Change this line from selecting all headers to selecting one header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
});


ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{ origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content',{ origin:'left' });


const typed=new Typed('.multiple-text',{
    strings:['Sow','Learn','Grow' ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Access form fields
  const fullName = form.querySelector('input[placeholder="Full Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Email Address"]').value.trim();
  const mobileNumber = form.querySelector('input[placeholder="Mobile Number"]').value.trim();
  const emailSubject = form.querySelector('input[placeholder="Email Subject"]').value.trim();
  const message = form.querySelector('textarea').value.trim();
  // const alertBox = document.getElementById('alertBox');
  // alertBox.classList.remove('hidden');
  // Validation
  const nameRegex = /^[A-Za-z]{2,50}(?: [A-Za-z]{2,50})*$/;
  if (!nameRegex.test(fullName)) {
    swal({
      title: "Custom Styled Alert",
      text: "This alert has been styled with custom CSS.",
      icon: "info",
      button: "Awesome!"
    })
    swal("Try Again!","Please enter your full name.","warning");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    swal("Try Again!","Please enter a valid email.","warning");
    return;
  }

  const mobileRegex = /^\+?(\d{1,3})?[-.\s]?(\(?\d{3,4}\)?[-.\s]?)?\d{3}[-.\s]?\d{3,4}$/;
  if (!mobileRegex.test(mobileNumber)) {
    swal("Try Again!","Please enter a valid mobile number.","warning");
    return;
  }

  const emailSubjectRegex = /^[\w\s\p{P}]{10,90}$/;
  if (!emailSubjectRegex.test(emailSubject)) {
    swal("Try Again!","Please enter email subject.","warning");
    return;
  }

  if (!message) {
    swal("Try Again!","Please enter your message.","warning");
    return;
  }

  // form reset
  else {
    form.reset();
    swal("Message received!", "We will get back to you in no time.","success");
    
  }
});
 


(function(){
  let modal = document.getElementById("modal");
  
  
  let reviewBtn = document.getElementById("review-btn");
  
  let span = document.getElementsByClassName("close")[0];
  
  
  reviewBtn.onclick = function(e) {
    e.preventDefault();
      modal.style.display = "flex";
  }
  
  
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  const feedbackForm = document.getElementById("feedback-form");
  const submitButton = document.querySelector("#feedback-form button[type='submit']");
  
  // Event listener for form submission
  document.addEventListener('DOMContentLoaded', function() {
    function allFieldsFilled() {
      const inputs = feedbackForm.querySelectorAll("input[type='text'], input[type='email'], textarea");
      for (let input of inputs) {
        if (!input.value.trim()) {
          return false;
        }
      }
      return true;
    }
  
    function ratingSelected() {
      const stars = document.querySelectorAll('.rating__star');
      for (let star of stars) {
        if (star.classList.contains('fas')) { 
          return true;
        }
      }
      return false;
    }
  
    const feedbackForm = document.getElementById('feedback-form');
  
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const thankYouMessage = document.getElementById('thank-you-message');
      const errorMessage = document.getElementById('error-message');
      if (allFieldsFilled() && ratingSelected()) {
        thankYouMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        setTimeout(function() {
          thankYouMessage.style.display = 'none';
        },3000);
        feedbackForm.reset();
      } else {
        thankYouMessage.style.display = 'none';
        errorMessage.style.display = 'block';
        setTimeout(function() {
          errorMessage.style.display = 'none';
        },3000);
        feedbackForm.reset();
      }
    });
    document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('modal').style.display = 'none';
    });
    // Optional: if you want to close the modal when clicking outside of it
    window.onclick = function(event) {
      if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
      }
    };
  });
  
  
  // Event listener for form input fields
  feedbackForm.addEventListener("input", function() {
      if (allFieldsFilled()) {
          submitButton.removeAttribute("disabled");
      } else {
          submitButton.setAttribute("disabled", "disabled");
      }
  });


  const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className===starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);
  
 
})();
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
      document.querySelector("body").classList.add("loaded");
  }, 500)
});

const loginRegisterBtn = document.getElementById('log-in-btn');
  let islogInMode = true;

  // Change text on hover
loginRegisterBtn.addEventListener('mouseover', () => {
  if (islogInMode) {
    loginRegisterBtn.textContent = 'Register';
  } else {
    loginRegisterBtn.textContent = 'Login In';
  }
});

loginRegisterBtn.addEventListener('mouseout', () => {
  if (islogInMode) {
    loginRegisterBtn.textContent = 'Login';
  } else {
    loginRegisterBtn.textContent = 'Register';
  }
});


// new faq
function toggleAccordion(header) {
  const accordion = header.parentNode;

  closeAllAccordions(accordion);

  accordion.classList.toggle('active');

  const body = accordion.querySelector('.accordion-body');

  if (body.style.display === 'block') {
      body.style.display = 'none';
      header.querySelector('img').src = './faq/Expand-more.svg';
  } else {
      body.style.display = 'block';
      header.querySelector('img').src = './faq/Expand-less.svg';
  }
}

function closeAllAccordions(clickedAccordion) {
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(accordion => {
      if (accordion !== clickedAccordion) {
          accordion.classList.remove('active');
          accordion.querySelector('.accordion-body').style.display = 'none';
          accordion.querySelector('.accordion-header img').src = './faq/Expand-more.svg';
      }
  });
}
function closeAllAccordions(clickedAccordion) {
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(accordion => {
      if (accordion !== clickedAccordion) {
          accordion.classList.remove('active');
          accordion.querySelector('.accordion-body').style.display = 'none';
          accordion.querySelector('.accordion-header img').src = './faq/Expand-more.svg';
      }
  });
}
function toggleAccordion(element) {
  element.parentElement.classList.toggle('active');
}





document.addEventListener('DOMContentLoaded', () => {
  const faqSection = document.querySelector('.faq .section-heading');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        faqSection.classList.add('visible');
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

  observer.observe(faqSection);
});

