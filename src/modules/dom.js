"use strict";

const Dom = (() => {
	const cityName = document.querySelector(".cityName");
	const country = document.querySelector(".country");
	const localtime = document.querySelector(".localtime");

	const temperature = document.querySelector(".temperature");
	const weather = document.querySelector(".weather");

	const feelsLike = document.querySelector(".feelsLike");
	const humidity = document.querySelector(".humidity");
	const wind = document.querySelector(".wind");

	const fillFetchedData = (data, tempInCelsius, distanceInKm) => {
		cityName.textContent = data.location.name;
		country.textContent = data.location.country;
		localtime.textContent = data.location.localtime;

		temperature.textContent = tempInCelsius ? data.current.temp_c : data.current.temp_f;
		weather.textContent = data.current.condition.text;

		feelsLike.textContent = tempInCelsius ? data.current.feelslike_c : data.current.feelslike_f;
		humidity.textContent = data.current.humidity;
		wind.textContent = distanceInKm ? data.current.wind_kph : data.current.wind_mph;
	};

	return { fillFetchedData };
})();

export default Dom;