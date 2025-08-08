// Redirect to login if not logged in
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'cb9c840a20b68142a9295b388ec81e67';
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

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
