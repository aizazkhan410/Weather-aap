const apikey = "734d7f88bb518f0396d8fbbd539fb5c8";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(document.weather[0].main == "clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(document.weather[0].main == "clear"){
       weatherIcon.src = "images/clear-sky.png"
    }
    else if(document.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png"
     }
     else if(document.weather[0].main == "drizzle"){
        weatherIcon.src = "images/drizzle.png"
     }
     else if(document.weather[0].main == "mist"){
        weatherIcon.src = "images/mist.png"
     }
     else{
        weatherIcon.src = "images/default.png"; 
     }
}  
  
  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
  })


