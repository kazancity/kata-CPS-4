const openModalCall = document.querySelectorAll('a[class$=call]');
const openModalChat = document.querySelectorAll('a[class$=chat]');
const pageMain = document.querySelector('.common-wrapper');
const menuTablet = document.querySelector('.left-wrapper');
const modalWindow = document.querySelector('.page-modal');
const closeModalButtonChat = document.querySelector('.title-modal__close-button');
const modalOverlayChat = document.querySelector('.page-modal__overlay');
const titleModal = document.querySelector('.title-modal__text');
const formFieldName = document.querySelector('.form-modal__name');
const formFieldEmail = document.querySelector('.form-modal__email');
const formFieldMessage = document.querySelector('.form-modal__message');
const formFieldPhone = document.querySelector('.form-modal__phone');
const formFieldButton = document.querySelector('.form-modal__button');
localStorage.setItem('burgerFlag', '0');


function openModals() {
  pageMain.classList.add('wrap-main__fixed');
  menuTablet.style.display = 'none';
  modalWindow.style.display = 'flex';
}

for (let prop of openModalCall) {
  prop.addEventListener('click', function () {
    openModals();
    formFieldName.style.display = 'none';
    formFieldEmail.style.display = 'none';
    formFieldMessage.style.display = 'none';
    titleModal.textContent = 'Заказать звонок';
    formFieldPhone.classList.remove('form-modal__phone--chat');
    formFieldButton.classList.remove('form-modal__button--chat');
    formFieldPhone.classList.add('form-modal__phone--call');
    formFieldButton.classList.add('form-modal__button--call');
  });
}

for (let prop of openModalChat) {
  prop.addEventListener('click', function () {
    openModals();
    formFieldName.style.display = 'block';
    formFieldEmail.style.display = 'block';
    formFieldMessage.style.display = 'inline-block';
    titleModal.textContent = 'Обратная связь';
    formFieldPhone.classList.add('form-modal__phone--chat');
    formFieldButton.classList.add('form-modal__button--chat');
  });
}

function closeModals() {
  let burgerFlag = localStorage.getItem('burgerFlag');
  if (window.screen.width < 768) {
    modalWindow.style.display = 'none';
    menuTablet.style.display = 'flex';
    pageMain.classList.add('wrap-main__fixed');
  } else if (
    burgerFlag === '1' &&
    window.screen.width < 1366 &&
    window.screen.width > 767
  ) {
    modalWindow.style.display = 'none';
    menuTablet.style.display = 'flex';
    pageMain.classList.add('wrap-main__fixed');
  } else if (
    burgerFlag === '0' &&
    window.screen.width < 1366 &&
    window.screen.width > 767
  ) {
    modalWindow.style.display = 'none';
    menuTablet.style.display = 'none';
    pageMain.classList.remove('wrap-main__fixed');
  } else if (burgerFlag === '0' && window.screen.width > 1365) {
    modalWindow.style.display = 'none';
    menuTablet.style.display = 'flex';
    pageMain.classList.remove('wrap-main__fixed');
  }
  localStorage.setItem('burgerFlag', '0');
}

closeModalButtonChat.addEventListener('click', closeModals);
modalOverlayChat.addEventListener('click', closeModals);

const firstMenuItem = document.querySelector(
  '.slider-left-list li:first-child'
);
const secondMenuItem = document.querySelector(
  '.slider-left-list li:nth-child(2)'
);

if (window.screen.width < 1366) {
  firstMenuItem.classList.add('slider-left-list__li--active');
  secondMenuItem.classList.remove('slider-left-list__li--active');
}

export { pageMain, menuTablet };
