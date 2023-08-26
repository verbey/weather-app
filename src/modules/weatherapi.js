"use strict";

const WeatherApi = (() => {
	let lastFetchedData;

	const fetchData = async (city) => {
		if (!city) return "No city was provided";

		try {
			const response = await fetch(
				`https://api.weatherapi.com/v1/current.json?key=bb18fd6402d04c85a3a234856232408&q=${city}`,
				{ mode: "cors" }
			);

			const weatherData = await response.json();

			lastFetchedData = weatherData;
			return weatherData;
		}
		catch (error) {
			return error;
		}
	};

	return { fetchData, lastFetchedData };
})();

export default WeatherApi;