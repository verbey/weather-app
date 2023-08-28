"use strict";

import WeatherApi from "./modules/weatherapi";
import Dom from "./modules/dom";

try {
	const data = await WeatherApi.fetchData("Washington");
	Dom.fillFetchedData(data, true, true);
}
catch (error) {
	console.log("Encountered an error. Most likely means that the API couldn't\n find the city");
	console.error(error);
}

Dom.assignCallbackToSearch();