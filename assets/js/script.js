const btnEl = document.querySelector("button");
const weatherMenuEl = document.querySelector(".weather-menu");
const errorMenuEl = document.querySelector(".error-menu");
const cityEl = document.querySelector("#city");
const dateEl = document.querySelector("#date");
const weatherImgEl = document.querySelector(
  ".weather-menu > .weather-img > img"
);
const weatherConditionEl = document.querySelector(
  ".weather-img > .weather-condition"
);
const weatherTempratureEl = document.querySelector(
  ".weather-img > .weather-temprature"
);

const today = new Date();
const date = today.getDate();
const monthNo = today.getMonth();
let month = "";
const year = today.getFullYear();

switch (monthNo) {
  case 0:
    month = "JAN";
    break;

  case 1:
    month = "FEB";
    break;

  case 2:
    month = "MAR";
    break;

  case 4:
    month = "APR";
    break;

  case 5:
    month = "MAY";
    break;

  case 6:
    month = "JUN";
    break;

  case 7:
    month = "JUL";
    break;

  case 8:
    month = "AUG";
    break;

  case 9:
    month = "SEP";
    break;

  case 10:
    month = "OCT";
    break;

  case 11:
    month = "NOV";
    break;

  default:
    month = "DEC";
    break;
}

function getWeather() {
  const city = document.querySelector("input").value;

  if (city == "") {
    alert("Please enter your city properly");
    document.querySelector("input").focus();
  } else {
    const apiKey = "89fb999b61d18e4da72abe28c5a5cdce";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        if (json.cod == "404") {
          weatherMenuEl.style.display = "none";
          errorMenuEl.style.display = "block";
        } else {
          cityEl.textContent = json.name;
          dateEl.textContent = `${date}-${month}-${year}`;
          let weatherCondition = json.weather[0].main;

          switch (weatherCondition) {
            case "Clouds":
              weatherImgEl.src = "./assets/img/clouds.png";
              break;
            case "Clear":
              weatherImgEl.src = "./assets/img/clear sky.png";
              break;
            case "Tornado":
              weatherImgEl.src = "./assets/img/torando.jpg";
              break;
            case "Snow":
              weatherImgEl.src = "./assets/img/snow.png";
              break;
            case "Rain":
              weatherImgEl.src = "./assets/img/rain.png";
              break;
            case "Drizzle":
              weatherImgEl.src = "./assets/img/drizzle.png";
              break;
            case "Thunderstorm":
              weatherImgEl.src = "./assets/img/thunderstorm.png";
              break;
            default:
              weatherImgEl.src = "./assets/img/not found.png";
              break;
          }

          weatherConditionEl.textContent = json.weather[0].main;

          const temp = Math.floor(json.main.temp);
          weatherTempratureEl.textContent = `${temp}°C`;

          weatherMenuEl.style.display = "block";
          errorMenuEl.style.display = "none";
        }
      });
  }
}

document.querySelector('input').addEventListener('keydown', (e) => {
  if(e.key == 'Enter'){
    getWeather()
  }
})

btnEl.addEventListener("click", () => {
  getWeather();
});
