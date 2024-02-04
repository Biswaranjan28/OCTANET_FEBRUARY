document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav__links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  