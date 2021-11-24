const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  freeMode: false,
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 4,
      loop: false,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var menuOpen = false;
document.getElementById("menu").onclick = function () {
  if (menuOpen) {
    document.getElementById("menulinks").classList.add("hidden");
    menuOpen = false;
  } else {
    document.getElementById("menulinks").classList.remove("hidden");
    menuOpen = true;
  }
};

var btnindia = document.getElementById("btn-india");
var btnturkey = document.getElementById("btn-turkey");
var btnuae = document.getElementById("btn-uae");
var btngermany = document.getElementById("btn-germany");
var cityselector = document.getElementById("cityselector");

var cities = {
  india: ["New Delhi", "Mumbai"],
  turkey: ["Istanbul", "Ankara"],
  uae: ["Dubai", "Abhu Dhabi"],
  germany: ["Berlin", "Munich"],
};
btnindia.onclick = function () {
  btnindia.classList.add("atv-country");
  btnturkey.classList.remove("atv-country");
  btnuae.classList.remove("atv-country");
  btngermany.classList.remove("atv-country");
  cityselector.innerHTML = "";
  cities["india"].forEach((e) => {
    cityselector.innerHTML += `<option>${e}</option>`;
  });
};
btnturkey.onclick = function () {
  btnindia.classList.remove("atv-country");
  btnturkey.classList.add("atv-country");
  btnuae.classList.remove("atv-country");
  btngermany.classList.remove("atv-country");
  cityselector.innerHTML = "";
  cities["turkey"].forEach((e) => {
    cityselector.innerHTML += `<option>${e}</option>`;
  });
};
btnuae.onclick = function () {
  btnindia.classList.remove("atv-country");
  btnturkey.classList.remove("atv-country");
  btnuae.classList.add("atv-country");
  btngermany.classList.remove("atv-country");
  cityselector.innerHTML = "";
  cities["uae"].forEach((e) => {
    cityselector.innerHTML += `<option>${e}</option>`;
  });
};
btngermany.onclick = function () {
  btnindia.classList.remove("atv-country");
  btnturkey.classList.remove("atv-country");
  btnuae.classList.remove("atv-country");
  btngermany.classList.add("atv-country");
  cityselector.innerHTML = "";
  cities["germany"].forEach((e) => {
    cityselector.innerHTML += `<option>${e}</option>`;
  });
};
