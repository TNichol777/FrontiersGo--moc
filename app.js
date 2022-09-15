const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-menu');
    const navLinks = document.querySelectorAll('.main-menu li');



    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation =
                    `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();