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


var acc = document.getElementsByClassName("accordion-div");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


