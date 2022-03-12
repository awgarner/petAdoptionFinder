var averageClimate = document.querySelector('ul');

function getApi() {

    var requestUrl = 'https://api.worldweatheronline.com/premium/v1/weather.ashx?key=a3558699fd5644739f4160157221203&q=London&mca=yes&fx=no&cc=no&format=json';
  
    fetch(requestUrl)
      .then(function(response) {
          console.log(response);
        return response.json();
      })
      .then(function(data) {
          console.log(data)
              var listItem = document.createElement('li');
              listItem.innerHTML = data.ClimateAverages[0].month;
              averageClimate.appendChild(listItem);
      });
}


    getApi();
