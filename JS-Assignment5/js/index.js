// api: http://api.weatherapi.com/v1/search.json?key=107daa5d108941ffab710755250107&q=city_name
//get request
var weather = document.querySelector('.weather-cards-row');
var locationInput = document.querySelector('#locationInput');
var city = 'cairo'; // Default city, can be changed

function fetchWeatherData(city) {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', `https://api.weatherapi.com/v1/forecast.json?key=107daa5d108941ffab710755250107&q=${city}&days=3`, true);
    myRequest.responseType = 'json';

    myRequest.onload = function() {
        if (myRequest.status >= 200 && myRequest.status < 300) {
            var data = myRequest.response;
            if (!data || !data.location || !data.forecast || !data.forecast.forecastday) {
                console.error('Invalid weather data received');
                return;
            }
            
            var forecastDays = data.forecast.forecastday;
            var weatherCards = '';
            
            forecastDays.forEach((dayData, index) => {
                var date = new Date(dayData.date);
                var dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
                var dateText = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                
                if (index === 0) dayName = "Today";
                
                // Use current temp for today, avg temp for other days
                var temperature = index === 0 ? data.current.temp_c : dayData.day.avgtemp_c;
                var iconUrl = index === 0 ? data.current.condition.icon : dayData.day.condition.icon;
                
                // Fix icon URL if needed
                if (iconUrl && !iconUrl.startsWith('https:')) {
                    iconUrl = 'https:' + iconUrl;
                }
                
                weatherCards += `
                <div class="col-12 col-lg-4 ">
                    <div class="card current-weather p-4 h-100 mb-3">
                      <div class="d-flex justify-content-between align-items-start mb-2">
                        <h2 class="day-name mb-0">${dayName}</h2>
                        <span class="date-text">${dateText}</span>
                      </div>
                      <p class="location mb-3">${data.location.name}, ${data.location.country}</p>
                      <div class="weather-main d-flex align-items-center mb-4">
                        <div class="temperature-section">
                          <p class="temperature mb-0">${temperature}°C</p>
                          <p class="description mb-0">${
                            index === 0 ? data.current.condition.text : dayData.day.condition.text
                          }</p>
                        </div>
                        <div class="weather-icon-section ms-3">
                          <img src="${iconUrl}" alt="${dayData.day.condition.text}" style="width: 64px; height: 64px;">
                        </div>
                      </div>
                      <div class="weather-details d-flex justify-content-between">
                        <div class="detail-item">
                          <i class="fas fa-tint me-1"></i>
                          <span>${index === 0 ? data.current.humidity : dayData.day.avghumidity}%</span>
                        </div>
                        <div class="detail-item">
                          <i class="fas fa-wind me-1"></i>
                          <span>${index === 0 ? data.current.wind_kph : dayData.day.maxwind_kph} km/h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
            });
            
            weather.innerHTML = weatherCards;
         } 
    };
    myRequest.send();
}
// Initial load
fetchWeatherData(city);



document.addEventListener('DOMContentLoaded', function() {
  const logoType = document.querySelector('.navbar-brand');
  const currentPage = window.location.pathname.split('/').pop();
  if (logoType&& currentPage === 'contact.html') {
    logoType.addEventListener('click', function() {
      window.location.href = '../index.html'; 
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'contact.html') {
        const restrictedLinks = ['.news','.live-camera','.photos'];
        restrictedLinks.forEach(selector => {
            const link = document.querySelector(selector);
            if (link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    window.location.href = '../pages/error.html';
                });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-btn');
  const currentPage = window.location.pathname.split('/').pop();
  const excludedLinks = ['news', 'live-camera', 'photos'];
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (currentPage === 'index.html' && excludedLinks.some(className => this.classList.contains(className))) {
        e.preventDefault(); 
        return; 
      }
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Search functionality
locationInput.addEventListener('keypress', function(event) {
    city = locationInput.value.trim();
    fetchWeatherData(city);
});