async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(`/api/weather?city=${city}`);
    const weather = await response.json();

    if (weather.error) {
      resultDiv.innerHTML = `Error: ${weather.error}`;
      return;
    }

    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const localTime = new Date(Date.now() + weather.timezone * 1000);
    const formattedTime = localTime.toUTCString().slice(17, 25);

    resultDiv.innerHTML = `
      <h3>${weather.name}</h3>
      <img src="${iconUrl}" alt="Weather icon" />
      <p>🌡 Temperature: ${weather.main.temp}°C</p>
      <p>📋 Condition: ${weather.weather[0].description}</p>
      <p>💧 Humidity: ${weather.main.humidity}%</p>
      <p>🌬 Wind: ${weather.wind.speed} m/s</p>
      <p>⏰ Local Time: ${formattedTime}</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = "Error fetching weather data.";
    console.error(err);
  }
}
