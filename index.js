
const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b79c85480c3fe775d518c'
$(document).ready(function () {
    weatherFn('pune');
});

async function weatherFn(cName) {
    const temp = '${url}?q=${cName}&appid={apiKey}&units=metric';
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);

        } else {
            alert('City Not Found. Please Try Again');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

}
function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().
    format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').
    html('${data.main.temp}°C');
    $('#description').text(data.weather[0].description);
    $('#wind-speed').
    html('Wind Speed: ${data.wind.speed} m/s');
    
}