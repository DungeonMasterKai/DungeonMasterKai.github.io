const background = document.querySelector('.background');

window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    if (scrollPercentage < 0.5) {
        background.style.backgroundImage = 'url("background1.jpg")'; // First image
    } else {
        background.style.backgroundImage = 'url("background2.jpg")'; // Second image
    }
});
