var city_name = localStorage.getItem('city_name');
localStorage.removeItem('city_name');

document.querySelector(".title").innerHTML = "Weather in "+city_name;
document.querySelector(".titleBlock").innerHTML = "Weather in "+city_name;
document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+city_name+"')";

let weather = {
    API_Key : "d78f4606c5ba94c8b3d176f95d59163a",
    fetchWeather: function(city_searched) {
      fetch(
        'https://api.openweathermap.org/data/2.5/weather?q='
        +city_searched
        +'&units=metric&appid='
        +this.API_Key
  
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
      const{name} = data;
      const{icon, description} = data.weather[0];
      const{temp, humidity} = data.main;
      const{speed} = data.wind;
      console.log(name,icon,description,temp,humidity,speed);
    
      //document.querySelector(".icon_"+name).src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
      document.querySelector(".name").innerHTML = name;
      document.querySelector(".desc").innerHTML = description;
      document.querySelector(".temp").innerHTML = temp+"°C";
      document.querySelector(".humidity").innerHTML = "Humidity : "+humidity+"%";
      document.querySelector(".wind").innerHTML = "Wind speed: "+speed+"km/h";
    },
};

window.onload = function() {
    weather.fetchWeather(city_name);
  };