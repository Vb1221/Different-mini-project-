const apiKey = 'd23f6e3e426c42f529a9aa8cc1ff2481';

const getWeather = async () => {
  const city = document.getElementById("city").value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();

  const weatherDiv = document.getElementById("weather");
  const cityTitle = document.querySelector('#titleCity')

  if (data.cod === "404") {
    weatherDiv.innerHTML = "Місто не знайдено";
  } else {
    const forecasts = data.list.filter((forecast) => forecast.dt_txt.includes("12:00:00"));
    cityTitle.innerHTML = `
      <h2>${data.city.name}</h2>
    `;
    forecasts.forEach((forecast) => {
      const date = new Date(forecast.dt_txt);
      const day = date.toLocaleDateString("uk-UA", { weekday: "long" });
      const temp = Math.round(forecast.main.temp - 273.15);
      const description = forecast.weather[0].description;
      const icon = forecast.weather[0].icon;
      weatherDiv.innerHTML += `
        <div>
          <p>${day}</p>
          <p>${temp}°C</p>
          <p>${description}</p>
          <img src="http://openweathermap.org/img/w/${icon}.png">
        </div>
      `;
    });
  }
};

document.getElementById("get-weather").addEventListener("click", getWeather);
