const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
mobileMenu.classList.remove("active");
});

//img-slider
$('.owl-carousel').owlCarousel({
    center:true,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

//scroll reveal
ScrollReveal({
            reset: true,
            distance: '100px',
            duration: 1500,
            delay: 400,
            opacity: 0
        });
        ScrollReveal().reveal('.team-title', { delay:600, origin:'top' });
        ScrollReveal().reveal('.content, .book-head, .form-box', { delay:600, origin:'left' });
        ScrollReveal().reveal('.phone-img, .feature-title, .row', { delay:600, origin:'right' });
        ScrollReveal().reveal('.wrapper', { delay:600, origin:'bottom' });

//h-Captcha
const form = document.getElementById('YOUR_FORM_ID');

form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});