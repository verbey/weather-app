"use strict";

import WeatherApi from "./modules/weatherapi";
import Dom from "./modules/dom";

const data = await WeatherApi.fetchData("Washington");

Dom.fillFetchedData(data, true, true);