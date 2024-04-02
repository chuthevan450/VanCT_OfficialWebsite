document.addEventListener('DOMContentLoaded', function () {
    const checkboxToggle = document.getElementById('checkbox_toggle');
    const menu = document.querySelector('.menu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navLinks = document.querySelector('.nav-links');
  
    checkboxToggle.addEventListener('change', function() {
      if (this.checked) {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });
  
    hamburgerIcon.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });
  