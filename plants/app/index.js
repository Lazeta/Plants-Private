// функция смены цвета заднего фона на размерах от 1440 пикселей более.
// function changed color theme on size from 1440px and more.
const btnColor = document.querySelector('.__changer');
function random(number){
    return Math.floor(Math.random() * (number+1))
};
btnColor.onclick = function(){
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
};


// для бургер меню из 4 полос где по нажатия всплывает окно навигации по сайту.
const burgerMenu = document.querySelector('.burger__menu');
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle('__active');
    document.querySelector('.navigation').classList.toggle('__burger__menu')
});


// будем скрывать режим бургер меню если кликать вне списка за его пределами.
const btnMenu = document.querySelector(".btn__Menu");
const menu = document.querySelector(".menu");
const toggleMenu = function () {
    menu.classList.toggle("open");
}

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("open");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});


// написать скрипт кнопки что будет возвращать пользователей к шапке по 
// id="Header" и исчезать когда пользователь находится в верху страницы.