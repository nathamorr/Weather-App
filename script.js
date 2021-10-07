var button = document.querySelector('.Submit')
var inputValue = document.querySelector('.InputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('api.openweathermap.org/data/2.5/weather?q={new york}&appid={d78f4606c5ba94c8b3d176f95d59163a}')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        var tempValue = data['main']['temp'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        
    })
    .catch(err => alert("Wront location name"))
})

