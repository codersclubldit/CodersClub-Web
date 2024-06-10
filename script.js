document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
  
    hamburgerButton.addEventListener('click', () => {
      // Toggle mobile menu visibility
      mobileMenu.classList.toggle('show');
  
      if (menuIcon.getAttribute('d') === "M4 6h16M4 12h16m-7 6h7") {
    
        menuIcon.setAttribute('d', "M6 18L18 6M6 6l12 12");
      } else {
        
        menuIcon.setAttribute('d', "M4 6h16M4 12h16m-7 6h7");
      }
    });
  });
  