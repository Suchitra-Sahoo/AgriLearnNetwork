let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');
let Contact = document.querySelectorAll('#contact');
let navContact = document.querySelectorAll('#nav--contact');

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

//when scroll on any section that section's corresponding hyperlink will be active and
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
  let header=document.querySelectorAll('header');
header.classList.toggle('sticky',window.scrollY >100);
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
    backSpped:100,
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

  // Validation
  if (!fullName) {
    alert('Please enter your full name.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const mobilePattern = /^\d+$/;
  if (!mobilePattern.test(mobileNumber)) {
    alert('Please enter a valid mobile number.');
    return;
  }

  if (!emailSubject) {
    alert('Please enter the email subject.');
    return;
  }

  if (!message) {
    alert('Please enter your message.');
    return;
  }

  // form reset
  form.reset();
  alert('Your message has been sent. Thank you!');
});
 


(function(){
  let modal = document.getElementById("modal");
  
  
  let reviewBtn = document.getElementById("review-btn");
  
  let span = document.getElementsByClassName("close")[0];
  
  
  reviewBtn.onclick = function(e) {
    e.preventDefault();
      modal.style.display = "block";
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
  
  
  function allFieldsFilled() {
      const inputs = feedbackForm.querySelectorAll("input[type='text'], input[type='email'], textarea");
      for (let input of inputs) {
          if (!input.value.trim()) {
              return false;
          }
      }
      return true;
  }
  
  // Event listener for form submission
  feedbackForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent the default form submission behavior
      if (allFieldsFilled()) {
          alert("Thank you for your feedback! Your message has been submitted.");
      } else {
          alert("Please fill in all fields before submitting.");
      }
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
  
  
  function calculateYield() {
    var crop = document.getElementById('crop').value;
    var area = parseFloat(document.getElementById('area').value);
    var yieldPerAcre = parseFloat(document.getElementById('yield').value);
    var weather = parseFloat(document.getElementById('weather').value);
    var soil = parseFloat(document.getElementById('soil').value);
    var cropRotation = parseFloat(document.getElementById('crop-rotation').value);
    var management = parseFloat(document.getElementById('management').value);
  
    if (crop === "") {
      document.getElementById('result').innerText = "Please enter a crop type.";
      return;
    }
  
    if (isNaN(area) || isNaN(yieldPerAcre) || isNaN(weather) || isNaN(soil) || isNaN(cropRotation) || isNaN(management)) {
      document.getElementById('result').innerText = "Please enter valid numbers for all inputs.";
      return;
    }
  
    var totalYield = area * yieldPerAcre * weather * soil * cropRotation * management;
  
    if (totalYield > 100) {
      document.getElementById('result').innerText = "Expected yield is above average.";
    } else if (totalYield < 50) {
      document.getElementById('result').innerText = "Expected yield is below average.";
    } else {
      document.getElementById('result').innerText = "Expected yield is average.";
    }
  
    document.getElementById('result').innerText += " " + totalYield.toFixed(2) + " units.";
  }
