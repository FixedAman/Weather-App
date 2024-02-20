// Assuming you have HTML elements with IDs like 'cloud_pct', 'temp', 'feels_like', etc.
// Make sure these elements exist in your HTML structure.

async function fetchWeather(city) {
  cityName.innerHTML = city;
  const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "11b4465bcbmshf5450808a59507bp16cc06jsn7dd5c403bd24",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse the response as JSON

    // Assuming you have elements with IDs like 'cloud_pct', 'temp', 'feels_like', etc.
    const cloudPctElement = document.getElementById("cloud_pct");
    const tempElement = document.getElementById("temp");
    const min_tempElement = document.getElementById("min_temp");
    const max_tempElement = document.getElementById("max_temp");
    const feels_likeElement = document.getElementById("feels_like");
    const humidityElement = document.getElementById("humidity");
    const sunriseElement = document.getElementById("sunrise");
    const sunsetElement = document.getElementById("sunset");
    const wind_speedElement = document.getElementById("wind_speed");
    // ... (repeat for other elements)

    // Check if the elements exist before setting their innerHTML
    if (cloudPctElement) {
      cloudPctElement.innerHTML = data.cloud_pct;
    }
    if (tempElement) {
      tempElement.innerHTML = data.temp;
    }
    if (min_tempElement) {
      min_tempElement.innerHTML = data.min_temp;
    }
    if (max_tempElement) {
      max_tempElement.innerHTML = data.max_temp;
    }
    if (feels_likeElement) {
      feels_likeElement.innerHTML = data.feels_like;
    }
    if (humidityElement) {
      humidityElement.innerHTML = data.humidity;
    }
    if (sunriseElement) {
      sunriseElement.innerHTML = data.sunrise;
    }
    if (sunsetElement) {
      sunsetElement.innerHTML = data.sunset;
    }
    if (wind_speedElement) {
      wind_speedElement.innerHTML = data.wind_speed;
    }

    console.log("Weather data fetched successfully:", data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  fetchWeather(city.value);
});

// Call the function to fetch weather data
fetchWeather("Ghatal");
