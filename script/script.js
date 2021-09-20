const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lamoda-location') != 'null' && localStorage.getItem('lamoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите Ваш город');
    headerCityButton.textContent = city || 'Ваш город?'; 
    localStorage.setItem('lamoda-location', city);
});


// Блокировка скрола

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY
    })
}

const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY;

    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
}

// Модальное окно

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const CartModalOpen = () => {
    cartOverlay.classList.add('cart-overlay-open');
    disableScroll()
}

const CartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay-open');
    enableScroll();
}

subheaderCart.addEventListener('click', CartModalOpen);

cartOverlay.addEventListener('click', event => {
    const target = event.target;

    if(target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
        CartModalClose();
    }
});