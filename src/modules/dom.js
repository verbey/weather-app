"use strict";

import WeatherApi from "./weatherapi";
import Background from "./background";

const Dom = (() => {
	const cityName = document.querySelector(".cityName");
	const country = document.querySelector(".country");
	const localtime = document.querySelector(".localtime");

	const temperature = document.querySelector(".temperature");
	const weather = document.querySelector(".weather");

	const feelsLike = document.querySelector(".feelsLike");
	const humidity = document.querySelector(".humidity");
	const wind = document.querySelector(".wind");

	const searchBtn = document.querySelector("#searchBtn");

	const fillFetchedData = (data, tempInCelsius, distanceInKm) => {
		cityName.textContent = data.location.name;
		country.textContent = data.location.country;
		localtime.textContent = data.location.localtime;

		temperature.textContent = `Temperature: ${tempInCelsius ? `${data.current.temp_c} C` : `${data.current.temp_f} F`}`;
		weather.textContent = data.current.condition.text;

		feelsLike.textContent = `Feels like: ${tempInCelsius ? `${data.current.feelslike_c} C` : `${data.current.feelslike_f} F`}`;
		humidity.textContent = `Humidity: ${data.current.humidity} %`;
		wind.textContent = `Wind: ${distanceInKm ? `${data.current.wind_kph} km/h` : `${data.current.wind_mph} m/h`}`;

		Background.setBackground(Background.determineBackgroundImage(data.current.condition.text));
	};

	const assignCallbackToSearch = () => {
		searchBtn.addEventListener("click", async (event) => {
			event.preventDefault();

			const city = document.getElementById("searchCity").value;

			try {
				const data = await WeatherApi.fetchData(city);
				const useCelsius = document.getElementById("degrees").checked;
				const useKm = document.getElementById("distance").checked;

				fillFetchedData(data, useCelsius, useKm);
			}
			catch (error) {
				console.log("Encountered an error. Most likely means that the API couldn't\n find the city");
				console.error(error);
			}
		});
	};

	return { fillFetchedData, assignCallbackToSearch };
})();

export default Dom;