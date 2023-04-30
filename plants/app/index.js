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

// const bodyElement = document.body;
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

// // Первый и последний дочерние элементы
// const firstChild = bodyElement.firstElementChild; 
// const lastChild = bodyElement.lastElementChild;
// // console.log(firstChild)
// // console.log(lastChild)

// const previousSibling = bodyElement.previousElementSibling;
// const nextSibling = bodyElement.nextElementSibling;
// const parentElement = bodyElement.parentElement;
// // console.log(previousSibling)
// // console.log(nextSibling)
// // console.log(parentElement)

// // Поиск по селектору класса
// const elemsOne = document.querySelectorAll('.burger__menu');
// // console.log(elemsOne)
// // Поиск по селектору тега
// const elemsTwo = document.querySelectorAll('li');
// // console.log(elemsTwo)
// // Поиск по смешанному селектору тега и класса
// const elemsThree = document.querySelectorAll('li.about-us__item');
// // console.log(elemsThree)
// // Поиск по тегу первого уровня вложенности
// const elemsFour = document.querySelectorAll('.nav-menu>li');
// // console.log(elemsFour)
// // Поиск по нескольким классам
// const elemsFive = document.querySelectorAll('.burger__menu, .welcome__container');
// // console.log(elemsFive)
// // Поиск по вложенным классам
// const elemsSix = document.querySelectorAll('.welcome__container .welcome__container__img');
// // console.log(elemsSix)
// // Поиск по ID
// const elemsSeven = document.querySelectorAll('#Home');
// // console.log(elemsSeven)
// // Поиск по атрибуту в html абсолютно любым может быть атрибут к которому мы можем обратиться <li data-item="40"></li>
// const elemsEight = document.querySelectorAll('[data-item]');
// // console.log(elemsEight)
// // Поиск по атрибуту со значением
// const elemsNine = document.querySelectorAll('[data-item="40"]');
// // console.log(elemsNine)

// const elems = document.querySelectorAll('li'); // присваиваем переменной значение коллекции объекта по тегу li
// console.log(elems[2]); // вызываем элемент по индексу из коллекции объекта
// for (const item of elems) {
//     console.log(item);
// }
// // так же работает метод forEach хотя это и не массив, но работает
// elems.forEach(item => {
//     console.log(item);
// });

// // Ищем теги li только внутри коллекции nav-menu
// const subList = document.querySelectorAll('.nav-menu')
// const subItems = subList[0].querySelectorAll('li');
// console.log(subItems)

// // Ищет один конкретный объект без необходимости получать коллекцию объекта
// const burgerItem = document.querySelector('.nav-menu');
// console.log(burgerItem)

// // Если у элемента есть атрибут id, 
// // то мы можем получить его вызовом getElementById(id), где бы он ни находился.
// const elem = document.getElementById('About-us')
// console.log(elem)

// const elems = document.getElementsById('About-us')
// console.log(elem)

// // elem.getElementsByTagName(tag)
// // ищет элементы с данным тегом и возвращает их коллекцию.
// // Передав "*" вместо тега, можно получить всех потомков.
// const elems = document.getElementsByTagName('li');
// console.log(elems)

// // elem.getElementsByClassName(className)
// // возвращает элементы, которые имеют данный CSS - класс.
// const elems = document.getElementsByClassName('list-reset')
// console.log(elems)

// // document.getElementsByName(name) возвращает элементы с заданным атрибутом name.
// // Очень редко используется. Поиск только внутри document.
// const elems = document.getElementsByName('list');
// console.log(elems)

// // Получаем статическую коллекцию 
// const listStatic = document.querySelectorAll('item');

// // Получаем "живую" коллекцию
// // Разница в том что статическая не добавляет в html ничего, а просто возвращает нам поиск коллекцииобъекта,
// // а живая коллекция это когда мы добавляем в колллекцию дополнительный объект в реальном времени.  
// const listLive = document.getElementsByClassName('item');
// console.log(listStatic)
// console.log(listLive)

// // Создаём новый HTML-объект. И добавляем его в разметку рядом с указанным классом.
// const lessonList = document.querySelector('.burger__menu');
// lessonList.insertAdjacentHTML(
//     "beforeend",
//     '<li class="lesson__item-list">Новый пункт</li>'
// );

// // elem.closest(css) ищет ближайшего предка, который соответствует CSS - селектору.
// // Сам эемент также включается в поиск
// // Предки элемента это родитель, родитель родителя, его родитель и так далее.
// // Вместе они образуют цепочку иерархии от элемента до вершины.
// // Другими словами, метод closest поднимается ввепх от элемента и проверяет каждого из родителей.
// // Если он соответствует селектору, поиск прекращается. 
// // Метод возвращает либо предка, либо null, если такой элемент не найден.
// const elem = document.querySelector('.lesson__item-sub-list');
// const parentList = elem.closest('.lesson__list');
// console.log(parentList);

// // Стоит добавить, что получив объект тем или иным способом мы можем применять свойства навигации о которых говорили ранее
// const text = document.querySelector('.lesson__text');
// const list = text.nextElementSibling;
// console.log(list);

// // Получаем объект
// const textElement = document.querySelector('.burger__menu');
// // Получаем содержимое объекта "как есть" вместе с HTML
// const textElementContent = textElement.innerHTML;
// console.log(textElementContent);
// // Перезаписываем содержимое объекта
// textElement.innerHTML = `Живи, а работай в свободное время!`;

// // Получаем объект
// const textElement = document.querySelector('.burger__menu');
// // Получаем содержимое объекта "как есть" вместе с HTML
// const textElementContent = textElement.innerHTML;
// console.log(textElementContent);
// // Дописываем содержимое объекта
// textElement.innerHTML = 
//     `<p>${textElementContent}</p> <p>Живи, а работай в 
//     <span class="yellow">свободное</span> время!</p>`;
// console.log(textElement.innerHTML);

// const textElement = document.querySelector('.burger__menu');
// // Получаем содержимое объекта "как есть"
// // вместе с HTML, а также сам элемент
// const textElementContent = textElement.outerHTML;
// console.log(textElementContent);
// // Дописываем содержимое объекта
// textElement.outerHTML = 
//     `<p>${textElementContent}</p> <p>Живи, а работай в 
//     <span class="yellow">свободное</span> время!</p>`;
// console.log(textElement.outerHTML);

// // textContent - записывать текст "безопасным способом".
// const textElement = document.querySelector('.logo__list');
// const textElementContent = textElement.textContent;
// console.log(textElementContent);

// // Получаем объект
// const textElement = document.querySelector('.burger__menu');
// const getComment = textElement.nextSibling;
// console.log(getComment)
// // Изменение текстового узла/комментария
// getComment.data = 'Привет'
// console.log(getComment.data)

// // Создание нового элемента (тега)
// const newElement = document.createElement('div');
// // console.log(newElement)
// // Наполняем новый элемент
// newElement.innerHTML = `Живи, а работай в 
//     <span class="blue">свободное</span> время!`;
// console.log(newElement);

// // Создание нового текстового узла
// const newText = document.createTextNode('Привет!');
// console.log(newText);

// // Получаем объект
// const textElement = document.querySelector('.lesson__text');
// // Создание нового элемента (тега)
// const newElement = document.createElement('div');
// // Наполняем новый элемент
// newElement.innerHTML = `Живи, а работай в 
// //     <span class="blue">свободное</span> время!`;
// // Вставляем новый элемент... 
// // ...перед объектом
// textElement.before(newElement);
// // ...после объекта
// textElement.after(newElement);
// // ...внутрь и в начало объекта
// textElement.prepend(newElement);
// // ...внутрь и в конец объекта
// textElement.append(newElement);

// textElement.append(newElement, "Привет!");
// можно вставить обычную строку(текст) таким же способом
// textElement.append(`Живи, а работай в 
//     <span class="blue">свободное</span> время!`);

// // более наглядный пример
// // before
// <ul class="lesson__list">
// {/* prepend */}
//     <li>Пункт №1</li>
//     <li>Пункт №2</li>
//     <li>Пункт №3</li>
// {/* append */}
// </ul>
// // after

/*
// Вставляем текст, HTML, элемент
textElement.insertAdjacentHTML(
    "afterend",
    `<p>Живи, а работай в 
    <span class="blue">свободное</span> время!</p>`
);
*/
/*
beforebegin - вставить html непосредственно перед textElement,
afterbegin - вставить html в начало textElement,
beforeend - вставить html в конец textElement,
afterend - вставить html непосредственно после textElement.
*/

// // beforebegin
// <ul class="lesson__list">
// {/* afterbegin */}
//     <li>Пункт №1</li>
//     <li>Пункт №2</li>
//     <li>Пункт №3</li>
// {/* beforeend */}
// </ul>
// // afterend

// const textElement = document.querySelector('.lesson__text');
// // вставляем текст
// textElement.insertAdjacentText(
//     "beforeend",
//     `Живи, а работай в 
//     <span class="blue">свободное</span> время!`
// );
// // создание нового элемента (тега)
// const newElement = document.createElement('div');
// // наполняем новый элемент
// newElement.innerHTML = `Живи, а работай в 
// <span class="blue">свободное</span> время!`;
// // вставляем элемент
// textElement.insertAdjacentElement(
//     'beforeend',
//     newElement
// )

/*
Мы можем вставлять не только новые узлы, но и переносить существующие.
Все методы вставки автоматически удаляют узлы со старых мест. 
*/

// const lessonBlock = document.querySelector('.lesson');
// const title = document.querySelector('h3');
// // переносим title в конец блока lessonBlock
// lessonBlock.append(title);

// // клонирование узлов cloneNode
// // если нужен не перенос, а именно копия элемента
// const textElement = document.querySelector('.lesson__text');
// // Клоинирование без дочерних элементов
// // const cloneTextElement = textElement.cloneNode();
// // Глубоеое клонирование вместе с содержимым
// const cloneTextElement = textElement.cloneNode(true);
// const lessonBlock = document.querySelector('.lesson');
// lessonBlock.append(cloneTextElement);

// // удаление узлов
// // удаляет полностью объект
// textElement.remove();








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