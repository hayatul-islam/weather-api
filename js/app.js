
const currentWeather = () =>{

    // input
    const inputWeather = document.getElementById('weatherInput');
    const inputValue = inputWeather.value;

    inputWeather.value = '';
    
    // api key
    const apiKey = 'ee636c2391131b6e8d81c2f3b877ecb1';

    // weather api
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const weather = document.getElementById('weather');
        weather.textContent = '';

        const div = document.createElement('div');
        div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h1>${data.name}</h1>
        <h3><span>${data.main.temp}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].main}</h1>
        `;
        weather.appendChild(div)
    })

    .catch(err => {
        const weather = document.getElementById('weather');
        const p = document.createElement('p');
        p.innerText = 'City not found!';
        p.style.color = 'red';
        weather.appendChild(p)
    })
}