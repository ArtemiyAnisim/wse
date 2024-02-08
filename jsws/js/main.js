//Задачи для решения

//Работа с классами

//1

//document.getElementById('elem').classList.add('www');


//2

//document.getElementById('elem').classList.remove('www');


//3

//let hasClass = document.getElementById('elem').classList.contains('www');


//4

//document.getElementById('elem').classList.toggle('www');


//5

//let classCount = document.getElementById('elem').classList.length;


//6

//let classes = document.getElementById('elem').classList;
//classes.forEach(function(className) {
//    alert(className);
//});


//Работа с CSS

//1

//document.getElementById('elem').style.cssText = 'color: red; font-size: 30px; border: 1px solid black;';

//Свойство tagName

//1

//document.getElementById('elem').addEventListener('click', function() {
//	alert(this.tagName);
//});


//2

//document.getElementById('elem').addEventListener('click', function() {
//	alert(this.tagName.toLowerCase());
//});



//3

//let elements = document.querySelectorAll('.www');
//elements.forEach(function(element) {
//    let tagName = element.tagName.toLowerCase();
//    element.innerHTML += ' ' + tagName;
//});



//Вставка элементов через appendChild

//1

//let ol = document.querySelector('ol');
//let li = document.createElement('li');
//li.textContent = 'пункт';
//ol.appendChild(li);



//2

//let ul = document.querySelector('ul');
//let array = ['элемент1', 'элемент2', 'элемент3']; // Ваш массив данных
//array.forEach(function(item) {
//    let li = document.createElement('li');
//    li.textContent = item;
//    ul.appendChild(li);
//});

//На величину границы

//1

//document.getElementById('button').addEventListener('click', function() {
//	let element = document.getElementById('elem');
//	let borderTopWidth = element.clientTop;
//	alert('Толщина верхней границы: ' + borderTopWidth + 'px');
//});


//2

//document.getElementById('button').addEventListener('click', function() {
//	let element = document.getElementById('elem');
//	let borderLeftWidth = element.clientLeft;
//	alert('Толщина левой границы: ' + borderLeftWidth + 'px');
//});


//На полный размер элемента

//1

//document.getElementById('button').addEventListener('click', function() {
//	let element = document.getElementById('elem');
//	let fullWidth = element.offsetWidth;
//	alert('Полная ширина с учетом границы и padding: ' + fullWidth + 'px');
//});


//2

//document.getElementById('button').addEventListener('click', function() {
//	let element = document.getElementById('elem');
//	let fullWidth = element.offsetWidth;
//	alert('Полная ширина с учетом границы и padding: ' + fullWidth + 'px');
//});


//На размер элемента без границ, но с padding

//1

//document.getElementById('button').addEventListener('click', function() {
//	let element = document.getElementById('elem');
//	let clientWidth = element.clientWidth;
//	alert('Полная ширина без учета границы, но с padding: ' + clientWidth + 'px');
//});


//2

//document.getElementById('button').addEventListener('click', function() {
//	let element = document.getElementById('elem');
//	let clientHeight = element.clientHeight;
//	alert('Полная высота без учета границы, но с padding: ' + clientHeight + 'px');
//});

//Вставка элементов через insertAdjacentHTML

//1

//document.getElementById('elem').insertAdjacentHTML('beforebegin', '<span>!!!</span>');


//2

//document.getElementById('elem').insertAdjacentHTML('afterend', '<span>!!!</span>');


//3

//document.getElementById('elem').insertAdjacentHTML('afterbegin', '<span>!!!</span>');


//4

//document.getElementById('elem').insertAdjacentHTML('beforeend', '<span>!!!</span>');


//Удаление и клонирование

//1

//let parent = document.getElementById('parent');
//let child = document.getElementById('child');
//let button = document.getElementById('button');

//button.addEventListener('click', function() {
//    parent.removeChild(child);
//});


//2

//let button = document.getElementById('button');
//button.addEventListener('click', function() {
//    let ol = document.querySelector('ol');
//    let lastChild = ol.lastElementChild;
//    ol.removeChild(lastChild);
//});


//3

//let element = document.getElementById('elem');
//element.addEventListener('click', function() {
//    this.parentNode.removeChild(this);
//});


//4

//let lis = document.querySelectorAll('li');
//lis.forEach(function(li) {
//    li.addEventListener('click', function() {
//        this.parentNode.removeChild(this);
//    });
//});


//5

//let button = document.getElementById('button');
//button.addEventListener('click', function() {
//    let input = document.querySelector('input');
//    let clonedInput = input.cloneNode(true);
//    input.parentNode.insertBefore(clonedInput, input.nextSibling);
//});

//Потомки

//1

//let elem = document.getElementById('elem');
//let firstChild = elem.firstElementChild;
//firstChild.style.color = 'red';


//2

//let elem = document.getElementById('elem');
//let lastChild = elem.lastElementChild;
//lastChild.style.color = 'red';


//3

//let elem = document.getElementById('elem');
//let children = elem.children;
//for (let i = 0; i < children.length; i++) {
//    children[i].textContent += '!';
//}


//Соседи

//1

//let elem = document.getElementById('elem');
//let prevSibling = elem.previousElementSibling;
//prevSibling.textContent += '!';


//2

//let elem = document.getElementById('elem');
//let nextSibling = elem.nextElementSibling;
//nextSibling.textContent += '!';


//3

//let elem = document.getElementById('elem');
//let nextSibling = elem.nextElementSibling;
//if (nextSibling) {
//    let nextNextSibling = nextSibling.nextElementSibling;
//    if (nextNextSibling) {
//        nextNextSibling.textContent += '!';
//    }
//}

//Родители

//1

//let elem = document.getElementById('elem');
//let parent = elem.parentElement;
//parent.style.color = 'red';


//2

//let elem = document.getElementById('elem');
//let grandParent = elem.parentElement.parentElement;
//grandParent.style.color = 'red';

//Работа с getComputedStyle

//1

//let elem = document.getElementById('elem');
//let style = getComputedStyle(elem);
//let width = elem.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
//let height = elem.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);


//Прокрутка элемента

//1

//let elem = document.getElementById('elem');
//let scrollTop = elem.scrollTop;


//2

//let elem = document.getElementById('elem');
//let scrollLeft = elem.scrollLeft;


//3

//let elem = document.getElementById('elem');
//elem.scrollTop = 100;


//4

//let elem = document.getElementById('elem');
//elem.scrollTop += 100;

//Прокрутка элемента

//1

//let elem = document.getElementById('elem');
//let realHeight = elem.scrollHeight;


//2

//let elem = document.getElementById('elem');
//let realWidth = elem.scrollWidth;


//3

//let elem = document.getElementById('elem');
//elem.scrollTop = elem.scrollHeight - elem.clientHeight - 100;


//Прокрутка страницы

//1

//let verticalScrollPosition = window.pageYOffset;


//2

//let horizontalScrollPosition = window.pageXOffset;

//Прокрутка страницы

//1

//document.getElementById('button').addEventListener('click', function() {
//	window.scrollTo(300, 500);
//});


//2

//document.getElementById('button').addEventListener('click', function() {
//	window.scrollBy(0, 300);
//});


//Практика

//1

//document.getElementById('button').addEventListener('click', function() {
//	window.scrollTo(0, document.body.scrollHeight);
//});


//2

//document.getElementById('button').addEventListener('click', function() {
//	window.scrollBy(0, 400);
//});


//3

//document.getElementById('button').addEventListener('click', function() {
//	if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
//		 window.scrollTo(0, 100);
//	}
//});


//4

//document.getElementById('elem').addEventListener('click', function() {
//	this.style.width = (parseFloat(getComputedStyle(this).width) * 2) + 'px';
//	this.style.height = (parseFloat(getComputedStyle(this).height) * 2) + 'px';
//});
