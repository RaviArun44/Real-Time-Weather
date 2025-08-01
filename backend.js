async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.main) {
      document.getElementById('output').innerText = 
        `Temperature in ${city}: ${data.main.temp}°C`;
    } else {
      document.getElementById('output').innerText = 
        `City not found!`;
    }
  } catch (error) {
    document.getElementById('output').innerText = 
      `Error fetching data.`;
  }
}
