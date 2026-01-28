import { pageMain, menuTablet } from '../modal/modal.js';
const burgerButton = document.querySelectorAll('a[class$=burger]');
const overlayTablet = document.querySelector('.left-header__overlay');
const menuMobile = document.querySelector('.left-header');
const iconCross = document.querySelector('.left-menu-list li:first-child');

for (let prop of burgerButton) {
  prop.addEventListener('click', function () {
    localStorage.setItem('burgerFlag', '1');
    pageMain.style.display = 'flex';
    menuTablet.style.display = 'flex';
    pageMain.classList.add('wrap-main__fixed');
    overlayTablet.style.display = 'flex';
    menuMobile.style.display = 'flex';
    iconCross.style.display = 'list-item';
  });
}

function closeMobile() {
  pageMain.style.display = 'flex';
  menuTablet.style.display = 'none';
  iconCross.style.display = 'none';
  pageMain.classList.remove('wrap-main__fixed');
}
iconCross.addEventListener('click', closeMobile);
overlayTablet.addEventListener('click', closeMobile);
