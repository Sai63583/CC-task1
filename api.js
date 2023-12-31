document.addEventListener("DOMContentLoaded", function () {
    // Your API key
    const apiKey = "YOUR_API_KEY";

    // API endpoint URL
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

    // Function to fetch weather data
    async function getWeather(city) {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        return data;
    }

    // Function to update HTML with weather information
    function updateWeatherInfo(weather) {
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `
            <h2>${weather.name}, ${weather.sys.country}</h2>
            <p>Temperature: ${weather.main.temp} &deg;C</p>
            <p>Weather: ${weather.weather[0].description}</p>
            <p>Humidity: ${weather.main.humidity}%</p>
        `;
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        const cityInput = document.getElementById("city-input");
        const city = cityInput.value;

        // Fetch weather data for the specified city
        getWeather(city)
            .then(updateWeatherInfo)
            .catch(error => console.error("Error fetching weather data:", error));
    }

    // Add event listener for form submission
    const form = document.getElementById("weather-form");
    form.addEventListener("submit", handleFormSubmit);
});
