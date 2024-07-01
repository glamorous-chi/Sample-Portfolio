const nav = document.querySelector('.mobile-nav');
const navToggle = document.querySelector(".menu");
const overlay = document.getElementById('overlay');

navToggle.addEventListener('click', () => {
    const visiblity = nav.getAttribute("nav-visible")
    console.log(visiblity);

    if (visiblity === "false") {
        nav.setAttribute("nav-visible", "true");
        overlay.style.display = 'block';
        navToggle.setAttribute("aria-expanded", true);
    }
    else{
        nav.setAttribute("nav-visible", "false");
        overlay.style.display = 'none';
        navToggle.setAttribute("aria-expanded", false);
    }

})
overlay.addEventListener('click', function() {
    nav.setAttribute("nav-visible", "false");
    overlay.style.display = 'none';
    navToggle.setAttribute("aria-expanded", false);
});