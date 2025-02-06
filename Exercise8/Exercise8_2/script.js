//opening and closing the mobile menu and menu that is shown/hidden
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

//listening for clicks
menuButton.addEventListener('click', () => {
  //checking if its hidden, making it visible else hiding it
  if (mobileMenu.classList.contains('max-h-0')) {
    mobileMenu.classList.remove('max-h-0');
    //expanding
    mobileMenu.classList.add('max-h-screen');
  } else {
    mobileMenu.classList.add('max-h-0');
    //hiding
    mobileMenu.classList.remove('max-h-screen');
  }
});
