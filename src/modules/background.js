"use strict";

import sunny from "../images/sunny-weather.jpg";
import cloudy from "../images/cloudy-weather.jpg";
import rainy from "../images/rainy-weather.jpg";
import foggy from "../images/foggy-weather.jpg";
import snowy from "../images/snowy-weather.jpg";
import defaultWeather from "../images/default-weather.jpg";

const setBackground = (weather) => {
	if (/sunny|clear/gi.test(weather)) document.body.style.backgroundImage = `url(${sunny})`;
	else if (/cloud|overcast/gi.test(weather)) document.body.style.backgroundImage = `url(${cloudy})`;
	else if (/rain|shower|drizzle/gi.test(weather)) document.body.style.backgroundImage = `url(${rainy})`;
	else if (/fog|mist/gi.test(weather)) document.body.style.backgroundImage = `url(${foggy})`;
	else if (/snow|blizzard|sleet/gi.test(weather)) document.body.style.backgroundImage = `url(${snowy})`;
	else document.body.style.backgroundImage = `url(${defaultWeather})`;
};

export default setBackground;