const API_KEY = "7dbb45ba443f670492678c7204e98b93";

function onGeoOk(location) {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather__weather");
        const temp = document.querySelector(".weather__temp");
        const city = document.querySelector(".weather__city");
        const weatherIcon = document.createElement("img");
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.style.width = "75px";
        weatherIcon.style.height = "75px";
        weather.appendChild(weatherIcon);
        temp.innerText = `${data.main.temp}℃`;
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you. :(")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
        