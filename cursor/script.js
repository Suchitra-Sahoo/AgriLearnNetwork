const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, cursor2X = 0, cursor2Y = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor2X += (mouseX - cursor2X) * 0.15;
    cursor2Y += (mouseY - cursor2Y) * 0.15;

    cursor.style.transform = `translate(${cursorX - 25}px, ${cursorY - 25}px)`;
    cursor2.style.transform = `translate(${cursor2X - 7.5}px, ${cursor2Y - 7.5}px)`;

    requestAnimationFrame(animate);
}

animate();
