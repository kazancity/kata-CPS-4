let cardListBrand = document.querySelector('.card-menu-brand__device-size');
let cardListTechnics = document.querySelector('.card-menu-techno__device-size');
let wrapButtonBrand = document.querySelector('.content-all-brand');
let wrapButtonTechnics = document.querySelector('.content-all-techno');
let wrapTitleBrand = document.querySelector('.content-all-brand__wrap-link');
let wrapTitleTechnics = document.querySelector('.content-all-techno__wrap-link');

wrapButtonBrand.addEventListener('click', function () {
  cardListBrand.classList.toggle('slider-menu-brand--device--wrap');
  if (cardListBrand.classList.contains('slider-menu-brand--device--wrap')) {
    wrapTitleBrand.textContent = 'Скрыть';
    wrapButtonBrand.style.marginTop = '30px';
    wrapTitleBrand.classList.toggle('change');
  } else {
    wrapTitleBrand.textContent = 'Показать все';
    wrapButtonBrand.style.marginTop = '24px';
    wrapTitleBrand.classList.toggle('change');
  }
});

wrapButtonTechnics.addEventListener('click', function () {
  cardListTechnics.classList.toggle('slider-menu-techno--device--wrap');
  if (cardListTechnics.classList.contains('slider-menu-techno--device--wrap')) {
    wrapTitleTechnics.textContent = 'Скрыть';
    wrapButtonTechnics.style.marginTop = '23px';
    wrapTitleTechnics.classList.toggle('change');
  } else {
    wrapTitleTechnics.textContent = 'Показать все';
    wrapButtonTechnics.style.marginTop = '24px';
    wrapTitleTechnics.classList.toggle('change');
  }
});
