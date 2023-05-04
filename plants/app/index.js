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


































// const button = document.querySelector('.btn');

// button.onclick = function () {
//     console.log('Click!');
// }
// const button = document.querySelector('#submit');
// button.onclick = function(){ 
//     alert('Вы нажали на кнопку!')
// }

// function showConsole() {
//     console.log('Click!');
// }
// button.onclick = showConsole;

// // минус вышеупомянутых методов невозможность вызова нескольких обработчиков


// const button = document.querySelector('.city__bar');

// // button.onclick = function () {
// //     console.log('Click!');
// // }
// // button.onclick = function () {
// //     console.log('Clak!');
// // }

// button.addEventListener("click", function(e) {
//     console.log('Клик!');
// });
// button.addEventListener("click", function(e) {
//     console.log('Клак!');
// });


// // устанавливаем обработчик и его сразу же удаление чтобы действие 
// // больше не повторялось.
// const button = document.querySelector('.city__bar');
// function showConsole() {
//     console.log('Клик!');
//     button.removeEventListener("click", showConsole);
// }
// button.addEventListener("click", showConsole);

// const options = {
//     "capture" : false, // фаза на которой должен сработать обработчик.
//     "once" : true, // если true, тогда обработчик будет автоматически удалён после удаления
//     "passive" : true, // то указывает, что обработчик никогда не вызовет preventDefault()  
// }

// const button = document.querySelector('.city__bar');
// function showConsole() {
//     console.log('Клик!');
// }
// button.addEventListener("click", showConsole, options);


// const button = document.querySelector(".city__bar");
// // event : создаёт событие обработчик, аргумент указывается в функции.
// function showConsole(event) {
//     // отображает тип взаимодействия мыши.
//     console.log(event.type);
//     // Объект на котором сработал обработчик.
//     console.log(event.target);
//     // Объект к которому назначен обработчик.
//     console.log(event.currentTarget);
//     // Положение курсора по оси X.
//     console.log(event.clientX);
//     console.log(event.clientY);
//     // посмотреть весь список аргумента "event"
//     console.log(event);
// } 
// button.addEventListener("click", showConsole);
// button.addEventListener("mouseenter", showConsole);



// // всплытие и погружение
// const block = document.querySelector(".block");
// const blockInner = document.querySelector(".block__iner");
// const blockInnerInner = document.querySelector(".block__inner-inner");
// // Всплытие : когда на элемете происходит событие, обработчики 
// // сначала срабатывают на нём, потом на его родителе, 
// // затем выше и так далее, вверх по цепочке предков.
// block.addEventListener("click", function (event) {
//     console.log('Клик на блок!' );
// });
// blockInner.addEventListener("click", function(event) {
//     console.log('Клик на блок второго уровня!');
// });
// blockInnerInner.addEventListener("click", function(event) {
//     console.log('Клик на блок третьего уровня!');
//     // Остановка всплытия
//     event.stopPropagation();
// });


// // Делегирование событий
// const lesson = document.querySelector('.lesson');

// function showConsole() {
//     console.log('Ура!');
// }
// lesson.addEventListener("click", function (event)) {
//     if (event.target.closest('.button')) {
//         showConsole();
//     }
// }


// const menuBody = document.querySelector('.menu');
// document.addEventListener('click', menu);
// function menu(event) {
//     if(event.target.closest('.menu__button')) {
//         menuBody.classList.toggle('_active');       
//     }
//     if (!event.target.closest('.menu')) {
//         menuBody.classList.remove('_active');
//     }
// }