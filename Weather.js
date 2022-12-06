
		 const API_KEY = `51024565e87a5639fd36b13fa2d4f22e`
		 const form = document.querySelector("form")
		 const weather = document.querySelector("#weather")
		 const search = document.querySelector("#search")

		 const getWeather = async(city) => {
		 	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		 	const response = await fetch(url);
		 	// console.log(response)
		 	const data = await response.json()
		 	// console.log(data)
		 	return showWeather(data)


		 }

		 const showWeather = (data) => {
		 	console.log(data)
		 	weather.innerHTML =
		 	 `<div>
				<img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" height="30px" width="30px">
			</div>
			<div>
				<h2> ${data.main.temp}°C</h2>
				<h4> ${data.weather[0].main}</h4>
			</div>`

		 }
		  form.addEventListener(
               "submit",
             function(event) {
            getWeather(search.value)
            event.preventDefault();
           }
         )
		// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}`
		// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`  
		// 51024565e87a5639fd36b13fa2d4f22e
       
