let news=[
  {id:"animate", content:"Мульт в кино. Выпуск №103. Некогда грустить!", image:"img/image-0.jpg", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {id:"batman", content:"Новый Бэтмен", image:"img/image-1.jpg", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {id:"Hollywood", content:"Однажды... в Голливуде", image:"img/image-2.jpg", desc:"Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."},
  {id:"Strippers", content:"Стриптизёрши", image:"img/image-3.jpg", desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
];

let genres=[
  {id:"comedy", name:"Комедия", icon:"&#128513;", colorFirst:"#F2C94C", colorSecond:"#F29A4A"},
  {id:"drama", name:"Драма", icon:"&#128557;", colorFirst:"#F2994A", colorSecond:"#EB5757"},
  {id:"fantasy", name:"Фантастика", icon:"&#128125;", colorFirst:"#56CCF2", colorSecond:"#2F80ED"},
  {id:"triller", name:"Ужасы", icon:"&#128123;", colorFirst:"#828282", colorSecond:"#333333"}
];


let header=document.getElementById("header");
let footer=document.getElementById("footer");
let nav=document.getElementById("tabs");

let str=`<div class="logo">
  <img src="img/logo.svg" alt="">
  <p class="title">Видеосервис</p>
</div>
<div class="search">
  <input type="text" placeholder="Поиск...">
  <a href="#">Найти</a>
</div>
<button class="btn" onClick="login()">Войти</button>`;
header.insertAdjacentHTML("afterBegin", str);

str=`<section class="size" itemscope="" itemtype="https://schema.org/Organization">
  <img src="img/htc.svg" alt="" itemprop="logo" class="organization">
  <p class="organization" itemprop="address">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
  <p class="organization" itemprop="telephone"><a href="tel:+73412938861">+7 (3412) 93-88-61</a>, <a href="tel:432929">43-29-29</a></p>
  <p class="organization" itemprop="url"><a href="https://htc-cs.ru">htc-cs.ru</a></p>
</section>`;
footer.insertAdjacentHTML("afterBegin", str);

str=`<ul>
  <li><a href="index.html" id="selectMovie">Фильмы</a></li>
  <li><a href="tv.html" id="selectTv">Программа</a></li>
</ul>`;
nav.insertAdjacentHTML("afterBegin", str);


 if(nav.classList.contains("activeMovie")){
   document.querySelector("#selectMovie").classList.add("active");
 }
 if(nav.classList.contains("activeTv")){
   document.querySelector("#selectTv").classList.add("active");
 }



if (document.querySelector("#selectMovie").classList.contains("active")){
  let films=document.getElementById("new");
  news.forEach((item, i) => {
    let str=`
    <article class="movie" id="${item.id}">
      <div class="description">
        <img src="${item.image}" class="movie-icon" alt="">
        <img src="img/fade.svg" alt="" class="gray">
        <p>${item.desc}</p>
      </div>
      <h2>${item.content}</h2>
    </article>`;
    films.insertAdjacentHTML("beforeEnd", str);
  });

  films=document.getElementById("genres");

  genres.forEach((item, i) => {
    let str=`
    <article class="genre" id="${item.id}">
     <div class="icon">${item.icon}</div>
     <p>${item.name}</p>
    </article>`;
    films.insertAdjacentHTML("beforeEnd", str);
    let elem=document.getElementById(`${item.id}`);
    elem.style.background=`linear-gradient(127.83deg, ${item.colorFirst} 8.44%, ${item.colorSecond} 91.36%)`;
  });
}

function login(){
  document.querySelector("#bg").style.display="flex";
}
document.querySelector(".close").onclick=function(){
  document.querySelector("#bg").style.display="none";
}
