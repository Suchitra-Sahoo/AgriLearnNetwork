document.addEventListener('click', function (e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);
    
    const size = 150; // Adjust size for better 3D effect
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX + window.pageXOffset - size / 2}px`;
    ripple.style.top = `${e.clientY + window.pageYOffset - size / 2}px`;
  
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
});
