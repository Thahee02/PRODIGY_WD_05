const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const errorMenuEl = document.querySelector('.error-menu');
const cityEl = document.querySelector("#city");
const dateEl = document.querySelector("#date");
const weatherImgEl = document.querySelector(".weather-img > img");
const weatherConditionEl = document.querySelector(
  ".weather-img > .weather-condition"
);
const weatherTempratureEl = document.querySelector(
  ".weather-img > .weather-temprature"
);
const apiKey = "89fb999b61d18e4da72abe28c5a5cdce";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

btnEl.addEventListener("click", () => {
  
});
