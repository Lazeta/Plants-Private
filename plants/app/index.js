// функция смены цвета заднего фона на размерах от 1440 пикселей более.
// function changed color theme on size from 1440px and more.
const btn = document.querySelector('.__changer');
function random(number){
    return Math.floor(Math.random() * (number+1))
};
btn.onclick = function(){
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
// const popup = document.querySelector(".__burger__menu");

// document.onclick = function (e) {
//     if (e.target.className != ".__burger__menu") {
//         popup.style.display = "none";
//     };
// };