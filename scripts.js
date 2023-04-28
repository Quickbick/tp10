// wait for the DOM to load
document.addEventListener("DOMContentLoaded", function(){
    
    //loads API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '50d6cc1196msh200e8c32532ed6dp178d08jsn45f01b52ee12',
		    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }
    
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=99163', options)
        .then(response => response.json())
        .then(function(response){
            document.querySelector("#location span").innerHTML = response.location.name +" " + response.location.region;
            document.querySelector("#tempF span").innerHTML = response.current.temp_f;
            document.querySelector("#tempC span").innerHTML = response.current.temp_c;
            document.querySelector("#direction").innerHTML = response.current.wind_dir;
            document.querySelector("#speed").innerHTML = response.current.wind_mph;
            document.querySelector("#cloud span").innerHTML = response.current.cloud;
            document.querySelector("#humidity span").innerHTML = response.current.humidity;
            
            return response;
        })
        .catch(err => console.error(err));
    
});