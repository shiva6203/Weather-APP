const apiKey = "3cf19694ab240f9b35bc45b9dcc9d699";

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=hyderabad &units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        
        const data = await response.json();

        document.getElementById("city-name").innerHTML = `City: ${data.name}`;
        document.getElementById("temperature").innerHTML = `Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind-speed").innerHTML = `Wind: ${data.wind.speed} km/h`;
        
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        
        const weatherMain = data.weather[0].main.toLowerCase();
        let imagePath = "";

        switch (weatherMain) {
            case "clear":
                imagePath = "images/clear.png";
                break;
            case "clouds":
                imagePath = "images/clouds.png";
                break;
            case "rain":
                imagePath = "images/rain.png";
                break;
            case "snow":
                imagePath = "images/snow.png";
                break;
            case "mist":
                imagePath = "images/mist.png";
                break;
            default:
                imagePath = "images/default.png";
        }

        document.getElementById("custom-weather-image").src = imagePath;

    } catch (error) {
        alert(error.message);
    }
}
