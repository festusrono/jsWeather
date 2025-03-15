
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

}