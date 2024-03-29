"use strict";

const WeatherApi = (() => {
	const fetchData = async (city) => {
		if (!city) return "No city was provided";

		try {
			const response = await fetch(
				`https://api.weatherapi.com/v1/current.json?key=bb18fd6402d04c85a3a234856232408&q=${city}`,
				{ mode: "cors" }
			);

			return await response.json();
		}
		catch (error) {
			return error;
		}
	};

	return { fetchData };
})();

export default WeatherApi;