document.addEventListener("DOMContentLoaded", function () {
    const slideGroup = document.querySelector(".slide_group");
    let currentSlide = 0;
    const images = [
      "./images/product\ back.jpg",
      "./images/harvest.jpg",
      "./images/trackter.jpg",
      // "./images/carousel-img-4.jpg",
    ];

    function showSlide(n) {
      slideGroup.style.left = `${-n * 100}%`; // Adjust left property based on current slide
      currentSlide = n;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % images.length; // Move to the next slide
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000); // Automatically change slide every 2 seconds

    // Preload images for smoother transition
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  });
