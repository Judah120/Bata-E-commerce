const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "ARVEE 1.5",
        price: 125,
        colors: [
            {
                code: "white",
                img: "img/Arvee white.png",
            },
            {
                code: "black",
                img: "img/Arvee_black-removebg-preview.png",
            },
        ],
    },
    {
        id: 2,
        title: "COURT PALISADES",
        price: 115,
        colors: [
            {
                code: "white",
                img: "img/Palisades white.png",
            },
            {
                code: "black",
                img: "img/Palisades black.png",
            },
        ],
    },
    {
        id: 3,
        title: "RINZLER",
        price: 105,
        colors: [
            {
                code: "white",
                img: "img/rinzler white.png",
            },
            {
                code: "black",
                img: "img/Rinzler black.png",
            },
        ],
    },
    {
        id: 4,
        title: "SLAMM CLASSIC",
        price: 135,
        colors: [
            {
                code: "white",
                img: "img/slam white.png",
            },
            {
                code: "black",
                img: "img/slam black.png",
            },
        ],
    },
]

let chosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach(function(item, index) {
    item.addEventListener("click", function() {
      wrapper.style.transform = "translateX(" + (-100 * index) + "vw)";
      chosenProduct = products[index]

      currentProductTitle.textContent = chosenProduct.title
      currentProductPrice.textContent = "$" + chosenProduct.price
      currentProductImg.src = chosenProduct.colors[0].img
      
    });
  });

  currentProductColors.forEach(function(color, index) {
    color.addEventListener("click", function () {
        currentProductImg.src = chosenProduct.colors[index].img
    })
  }
  );

  currentProductSizes.forEach(function(size, index) {
    size.addEventListener("click", function() {
        currentProductSizes.forEach(function(size) {
            size.style.backgroundColor = "transparent";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black"
        size.style.color = "#ffff59"
    });
  });

  const productButton = document.querySelector(".productBtn")
  const closeButton = document.querySelector(".close")
  const payment = document.querySelector(".payment")

  productButton.addEventListener("click", function() {
    payment.style.display = "flex"
  })

  closeButton.addEventListener("click", function() {
    payment.style.display = "none"
  })

  const cards = document.querySelectorAll('.salesImgs');

function shuffleCards() {
  const random1 = Math.floor(Math.random() * cards.length);
  const random2 = Math.floor(Math.random() * cards.length);
  
  const temp = cards[random1].innerHTML;
  cards[random1].innerHTML = cards[random2].innerHTML;
  cards[random2].innerHTML = temp;
}

setInterval(shuffleCards, 4000);

var countDownDate = new Date("Dec 31, 2027 23:00:00 GMT").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#clockdiv").innerHTML = "EXPIRED";
  }
}, 1000);
