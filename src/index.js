import './scss/style.scss';
import $ from 'jquery';

// Массивы постов
const news = [
  { id: 'animate', content: 'Мульт в кино. Выпуск №103. Некогда грустить!', image: 'img/movie/image-0.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 'batman', content: 'Новый Бэтмен', image: 'img/movie/image-1.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  ' },
  { id: 'Hollywood', content: 'Однажды... в Голливуде', image: 'img/movie/image-2.jpg', desc: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.' },
  { id: 'Strippers', content: 'Стриптизёрши', image: 'img/movie/image-3.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
];

const genres = [
  { id: 'comedy', name: 'Комедия', icon: '&#128513;', colorFirst: '#F2C94C', colorSecond: '#F29A4A' },
  { id: 'drama', name: 'Драма', icon: '&#128557;', colorFirst: '#F2994A', colorSecond: '#EB5757' },
  { id: 'fantasy', name: 'Фантастика', icon: '&#128125;', colorFirst: '#56CCF2', colorSecond: '#2F80ED' },
  { id: 'triller', name: 'Ужасы', icon: '&#128123;', colorFirst: '#828282', colorSecond: '#333333' },
];

const channels = [
  {
    name: 'Первый канал',
    icon: 'first.svg',
    program: [
      { time: '13:00', show: 'Новости (с субтитрами)' },
      { time: '14:00', show: 'Давай поженимся' },
      { time: '15:00', show: 'Другие новости' },
    ],
  },
  {
    name: '2x2',
    icon: '2x2.svg',
    program: [
      { time: '13:00', show: 'МУЛЬТ ТВ. Сезон 4, 7 серия' },
      { time: '14:00', show: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия' },
      { time: '15:00', show: 'БУРДАШЕВ. Сезон 1, 20 серия' },
    ],
  },
  {
    name: 'РБК',
    icon: 'rbc.svg',
    program: [
      { time: '13:00', show: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС' },
      { time: '14:00', show: 'ДЕНЬ. Главные темы' },
      { time: '15:00', show: 'Главные новости' },
    ],
  },
  {
    name: 'AMEDIA PREMIUM',
    icon: 'amedia.svg',
    program: [
      { time: '13:00', show: 'Клиент всегда мёртв' },
      { time: '14:00', show: 'Голодные игры: Сойка-пересмешница. Часть I' },
      { time: '15:00', show: 'Секс в большом городе' },
    ],
  },
];

const header = document.getElementById('header');
const footer = document.getElementById('footer');
const nav = document.getElementById('tabs');

// Если есть ник пользователя в localStorage подгружаем авториз. шапку, иначе кнопку входа.
let user = '';
if (Object.prototype.hasOwnProperty.call(localStorage, 'user')) {
  user = ` <input type='text' id='name' value='${localStorage.name}' class='edit_name'>
          <button class='log-out' id='btn_log_out'>Выйти</button>`;
} else {
  user = '<button class="btn" id="btn_open_form">Войти</button>';
}

// // ЗАГРУЗКА ШАПКИ СТРАНИЦЫ
let str = `<div class='logo'>
            <img src='img/logo.svg' alt=''>
            <p class='title'>Видеосервис</p>
          </div>
          <div class='search'>
            <input type='text' placeholder='Поиск...'>
            <a href='#'>Найти</a>
          </div>
          <div id='authorization'>
            ${user}
          </div>`;
header.insertAdjacentHTML('afterBegin', str);

// ЗАГРУЗКА ПОДВАЛА СТРАНИЦЫ
str = ` <section class='container' itemscope='' itemtype='https://schema.org/Organization'>
        <img src='img/htc.svg' alt='' itemprop='logo' class='organization'>
        <p class='organization' itemprop='address'>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
        <p class='organization' itemprop='telephone'><a href='tel:+73412938861'>+7 (3412) 93-88-61</a>, <a href='tel:432929'>43-29-29</a></p>
        <p class='organization' itemprop='url'><a href='https://htc-cs.ru'>htc-cs.ru</a></p>
      </section>`;
footer.insertAdjacentHTML('afterBegin', str);

// ЗАГРУЗКА МОДАЛЬНОГО ОКНА
str = `<div id='bg'>
      <div class='close'></div>
      <div class='modal'>
        <form name='modal'>
          <h1>Вход</h1>
          <input type='text' placeholder='Логин' id='user' class='authorization-form'>
          <input type='password' placeholder='Пароль' id='password' class='authorization-form'>
          <label class='checkbox'>
            <input type='checkbox' id='remember'>
            <span class='checkbox-custom'></span>
            <span class='checkbox-text'>Запомнить</span>
          </label>
          <button class='btn' type='submit'>Войти</button>
        </form>
      </div>
    </div>`;
footer.insertAdjacentHTML('afterEnd', str);

if (!Object.prototype.hasOwnProperty.call(sessionStorage, 'active')) {
  sessionStorage.active = 'movie';
}

// ЗАГРУЗКА НАВИГАЦИИ
str = `<ul>
        <li><a href='#' id='select_movie'>Фильмы</a></li>
        <li><a href='#' id='select_tv'>Программа</a></li>
      </ul>`;
nav.insertAdjacentHTML('afterBegin', str);

function updateMovie() {
  const movie = document.querySelector('#select_movie');
  const tv = document.querySelector('#select_tv');
  const root = document.querySelector('#main_wrapper');

  if (!movie.classList.contains('active')) {
    if (tv.classList.contains('active')) {
      tv.classList.remove('active');
    }
    movie.classList.add('active');
    $(root).empty();
  }

  str = `<section class='new'>
              <h1 class='fire title'> Новинки</h1>
              <div class='films' id='new'> </div>
            </section>

            <section class='genres'>
              <h1 class='title'>Жанры</h1>
              <div class='films' id='genres'> </div>
            </section>`;
  root.insertAdjacentHTML('beforeEnd', str);

  let films = document.getElementById('new');
  news.forEach((item) => {
    str = `
    <article class='movie' id='${item.id}'>
      <a href='#'>
        <div class='movie__description'>
          <img src='${item.image}' class='movie__image' alt=''>
          <img src='img/movie/fade.svg' alt='' class='movie__bg'>
          <p class="movie__paragraph">${item.desc}</p>
        </div>
        <h2>${item.content}</h2>
      </a>
    </article>`;
    films.insertAdjacentHTML('beforeEnd', str);
  });

  films = document.getElementById('genres');
  genres.forEach((item) => {
    str = `
    <article class='genre' id='${item.id}'>
      <a href='#'>
        <div class='icon'>${item.icon}</div>
        <p class="genre__paragraph">${item.name}</p>
      </a>
    </article>`;
    films.insertAdjacentHTML('beforeEnd', str);

    const elem = document.getElementById(`${item.id}`);
    elem.style.background = `linear-gradient(127.83deg, ${item.colorFirst} 8.44%, ${item.colorSecond} 91.36%)`;
  });
}

function updateTv() {
  const movie = document.querySelector('#select_movie');
  const tv = document.querySelector('#select_tv');
  const root = document.querySelector('#main_wrapper');

  if (!tv.classList.contains('active')) {
    if (movie.classList.contains('active')) {
      movie.classList.remove('active');
    }
    tv.classList.add('active');
    $(root).empty();
  }

  tv.classList.add('active');
  root.insertAdjacentHTML('beforeEnd', '<div id="channels"></div>');

  const component = channels.reduce((acc, item) => {
    acc += `<article class='channel'>
            <div class='image'>
              <img src='img/channels/${item.icon}' alt=''>
            </div>
            <div class='schedule'>
              <h1>${item.name}</h1>
              <ul>`;
    item.program.forEach((items) => {
      acc += `<li><span class='time'>${items.time}</span>${items.show}</li>`;
      return acc;
    });
    acc += '</ul> </div> </article>';
    return acc;
  }, '');
  document.querySelector('#channels').insertAdjacentHTML('beforeEnd', component);
}

// ВЫДЕЛЕНИЕ АКТИВНОЙ СТРАНИЦЫ В НАВИГАЦИИ
if (sessionStorage.active === 'movie') {
  updateMovie();
}

if (sessionStorage.active === 'tv') {
  updateTv();
}

$('#select_movie').on('click', (() => {
  if (sessionStorage.active !== 'movie') {
    sessionStorage.active = 'movie';
    updateMovie();
  }
}));

$('#select_tv').on('click', (() => {
  if (sessionStorage.active !== 'tv') {
    sessionStorage.active = 'tv';
    updateTv();
  }
}));

// КНОПКА 'ВЫЙТИ' ИЗ АВТОРИЗОВАННОЙ ШАПКИ
$('#btn_log_out').on('click', (() => {
  localStorage.clear();
  document.getElementById('authorization').innerHTML = '';
  document.getElementById('authorization').insertAdjacentHTML('afterBegin', '<button class="btn" id="btn_open_form">Войти</button>');
  $('#btn_open_form').on('click', (() => {
    document.querySelector('#bg').style.display = 'flex';
  }));
}));

// ПЕРЕЗАПИСЬ ИМЕНИ ПОЛЬЗОВАТЕЛЯ
$('.edit_name').focusout(() => {
  localStorage.name = document.getElementById('name').value;
});

// ОТКРЫТИЕ И ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
$('#btn_open_form').on('click', (() => {
  document.querySelector('#bg').style.display = 'flex';
}));
$('.close').on('click', (() => {
  document.querySelector('#bg').style.display = 'none';
}));

document.forms.modal.onsubmit = (() => {
  Array.from(document.querySelectorAll('.authorization-form')).forEach((item) => {
    localStorage[item.id] = item.value;
  });
  localStorage.name = localStorage.user;
});
