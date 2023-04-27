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
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
});