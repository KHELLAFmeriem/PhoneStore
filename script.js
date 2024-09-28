var right = document.querySelector(".right");
var images = [
  {
    background: "url('img/2-removebg-preview.png')",
  },
  {
    background: "url('img/1-removebg-preview.png')",
  },
  {
    background: "url('img/3.png')",
  },
  {
    background: "url('img/4-removebg-preview.png')",
  },
  {
    background: "url('img/5-removebg-preview (2).png')",
  },
];

var i = 1;
function change() {
  right.style.backgroundImage = images[i].background;
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}
setInterval(change, 3000);

var seemore = document.querySelector(".seemore");
var titre1 = document.querySelector(".titre1");
var price1 = document.querySelector(".price1");
var titre2 = document.querySelector(".titre2");
var price2 = document.querySelector(".price2");
var image1 = document.querySelector(".top1");
var image2 = document.querySelector(".top2");

var phones = [
  {
    titre1: "Iphone 16",
    price1: "$1.500",
    background: "url('img/16-removebg-preview.png')",
  },

  {
    titre1: "Iphone 16 Pro",
    price1: "$1.900",
    background: "url('img/16_pro-removebg-preview.png')",
  },
  {
    titre1: "Iphone 14 Pro",
    price1: "$1.300",
    background: "url('img/14-removebg-preview.png')",
  },
];
var phones2 = [
  {
    titre2: "Galaxy s24",
    price2: "$680",
    background: "url('img/galaxy_s24-removebg-preview.png')",
  },

  {
    titre2: "Samsung Galaxy Z Flip4",
    price2: "$2.100",
    background: "url('img/4-removebg-preview.png')",
  },

  {
    titre2: "Samsung Galaxy a35",
    price2: "$1.500",
    background: "url('img/a35-removebg-preview.png')",
  },
];
i = 1;
j = 1;
seemore.addEventListener("click", function () {
  titre1.innerHTML = phones[i].titre1;
  price1.innerHTML = phones[i].price1;
  image1.style.backgroundImage = phones[i].background;
  i = i + 1;
  if (i >= phones.length) {
    i = 0;
  }
  titre2.innerHTML = phones2[j].titre2;
  price2.innerHTML = phones2[j].price2;
  image2.style.backgroundImage = phones2[j].background;
  j = j + 1;
  if (j >= phones2.length) {
    j = 0;
  }
});

const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
var active = document.querySelector(".acive");

const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach((card) => {
    card.classList.add("hide");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

var menu = document.querySelector(".logo i");
var list = document.querySelector(".navbar .list1 ul");
menu.addEventListener("click", function () {
  list.classList.toggle("show");
});

var dark = false;
var white = document.querySelector(".white");
var body = document.querySelector("body");
white.addEventListener("click", function () {
  body.classList.toggle("whiteMode");
  if (dark == false) {
    white.innerHTML = "Dark Mode"
    dark = true
  } 
else{
    white.innerHTML = "Light Mode"
    dark = false
  } 
 
});


white.addEventListener("click" ,function(){
  var img = document.querySelector(".image");
  img.src = "img/logo2-removebg-preview.png";
  
})
