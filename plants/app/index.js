// class ItcModal {
//     #template = '<div class="itc-modal-backdrop"><div class="itc-modal-content"><div class="itc-modal-header"><div class="itc-modal-title">{{title}}</div><span class="itc-modal-btn-close" title="Закрыть">×</span></div><div class="itc-modal-body">{{content}}</div>{{footer}}</div></div>';
//     // ...
// }
// const modal = new ItcModal({
//     title: 'Заголовок',
//     content: '<div>Содержимое модального окна...</div>',
//     footerButtons: [
//         { class: 'btn btn-close', text: 'Закрыть', action: 'close'},
//     ]
// });

const bodyElement = document.body;
// const lastElement = bodyElement.lastChild;
// console.log(lastElement)
// const childNodes = bodyElement.childNodes;
// console.log(childNodes)
// console.log(bodyElement.hasChildNodes());
// for (let node of childNodes) {
//     console.log(node);
// }
// const bodyChildren = bodyElement.children;
// console.log(bodyChildren)

// const previousSiblingNode = bodyElement.previousSibling; // обращение к предыдущему узлу объекта
// const nextSiblingNode = bodyElement.nextSibling; // обращение к следующему узлу объекта
// const parentNode = bodyElement.parentNode; // обращение к непосредственному родителю узла
// console.log(previousSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

// Первый и последний дочерние элементы
const firstChild = bodyElement.firstElementChild; 
const lastChild = bodyElement.lastElementChild;
// console.log(firstChild)
// console.log(lastChild)

const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;
// console.log(previousSibling)
// console.log(nextSibling)
// console.log(parentElement)

// Поиск по селектору класса
const elemsOne = document.querySelectorAll('.burger__menu');
// console.log(elemsOne)
// Поиск по селектору тега
const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo)
// Поиск по смешанному селектору тега и класса
const elemsThree = document.querySelectorAll('li.about-us__item');
// console.log(elemsThree)
// Поиск по тегу первого уровня вложенности
const elemsFour = document.querySelectorAll('.nav-menu>li');
// console.log(elemsFour)
// Поиск по нескольким классам
const elemsFive = document.querySelectorAll('.burger__menu, .welcome__container');
// console.log(elemsFive)
// Поиск по вложенным классам
const elemsSix = document.querySelectorAll('.welcome__container .welcome__container__img');
// console.log(elemsSix)
// Поиск по ID
const elemsSeven = document.querySelectorAll('#Home');
// console.log(elemsSeven)
// Поиск по атрибуту в html абсолютно любым может быть атрибут к которому мы можем обратиться <li data-item="40"></li>
const elemsEight = document.querySelectorAll('[data-item]');
// console.log(elemsEight)
// Поиск по атрибуту со значением
const elemsNine = document.querySelectorAll('[data-item="40"]');
// console.log(elemsNine)

// const elems = document.querySelectorAll('li'); // присваиваем переменной значение коллекции объекта по тегу li
// console.log(elems[2]); // вызываем элемент по индексу из коллекции объекта
// for (const item of elems) {
//     console.log(item);
// }
// // так же работает метод forEach хотя это и не массив, но работает
// elems.forEach(item => {
//     console.log(item);
// });

// Ищем теги li только внутри коллекции nav-menu
const subList = document.querySelectorAll('.nav-menu')
const subItems = subList[0].querySelectorAll('li');
// console.log(subItems)

// Ищет один конкретный объект без необходимости получать коллекцию объекта
const burgerItem = document.querySelector('.nav-menu');
console.log(burgerItem)

// Если у элемента есть атрибут id, 
// то мы можем получить его вызовом getElementById(id), где бы он ни находился.
const elem = document.getElementById('About-us')
console.log(elem)


// const button = document.querySelector('.city__bar');

// // button.onclick = function () {
// //     console.log('Click!');
// // }


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