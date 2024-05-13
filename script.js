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
 
// Functionality for followerSeedling 
const seedling = document.getElementById('follower-seedling');
const podTop = document.getElementById('pod-top');
const sprout = document.getElementById('sprout');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const offsetX = seedling.clientWidth / 2;
  const offsetY = seedling.clientHeight / 2;

  seedling.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px) rotate(${Math.atan2(y - window.innerHeight / 2, x - window.innerWidth / 2) * (180 / Math.PI)}deg)`;
  
  const distance = Math.sqrt(Math.pow(x - window.innerWidth / 2, 2) + Math.pow(y - window.innerHeight / 2, 2));
  const opacity = Math.min(1, distance / 100);  
  podTop.style.opacity = opacity;
  sprout.style.opacity = opacity;
});
