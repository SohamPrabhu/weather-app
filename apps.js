document.getElementById('weatherBtn').addEventListener('click', weatherClicked);
document.getElementById('infoBtn').addEventListener('click', infoClicked);

function infoClicked(){
    const infoDisplay = document.getElementById('infoDesplay')
    weatherDisplay.innerHTML = 'The Product Manager Accelerator Program is designed to support PM professionals through every stage of their career. From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations.';
    
}
function weatherClicked() {
    const city = document.getElementById('userCity').value;
    getWeather(city);
}

function getWeather(city) {
    const apiKey = 'c257269544ca4f86821de7152c151fab';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No City Found');
            }


            return response.json();


        }).then(data => displayWeather(data))
        
}

function displayWeather(data) {



    const weatherDisplay = document.getElementById('weatherDisplay');
    
    const { city, list } = data;
    
    let inputedTest = `<h1>${city.name}</h1>`;
    
    list.forEach((entry, index) => {
        if (index % 8 === 0) { 
            const { dt, main, weather } = entry;
            inputedTest += `
                <h3>Date - ${new Date(dt * 1000).toDateString()}</h3>

                <p>Temperature - ${main.temp}</p>
                <p>Predicted Conditions - ${weather[0].description}</p>


                <p>Humidity - ${main.humidity}%</p>
                
                
                
                `;
        }
    });

    weatherDisplay.innerHTML = inputedTest;
}
