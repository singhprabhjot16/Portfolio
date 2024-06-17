window.onscroll = function() {
    updateProgressBar()
};

function updateProgressBar() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('filled').style.width = scrolled + "%";
}

// const contactFields = document.querySelectorAll('.contact-field');
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function(e) {
    contactForm.reset();
});
