"use strict";

import sunny from "../images/sunny-weather.jpg";
import cloudy from "../images/cloudy-weather.jpg";
import rainy from "../images/rainy-weather.jpg";
import foggy from "../images/foggy-weather.jpg";
import snowy from "../images/snowy-weather.jpg";
import defaultWeather from "../images/default-weather.jpg";

const Background = (() => {
	const determineBackgroundImage = (weather) => {
		let image;
		let linkAuthor;
		let authorName;
		let linkPhoto;
		if (/sunny|clear/gi.test(weather)) {
			image = sunny;
			linkAuthor = "https://unsplash.com/@khyta";
			authorName = "Khyta";
			linkPhoto = "https://unsplash.com/photos/ZEDjKAuS8u0";
		}
		else if (/cloud|overcast/gi.test(weather)) {
			image = cloudy;
			linkAuthor = "https://unsplash.com/@v2306";
			authorName = "Valery Rabchenyuk";
			linkPhoto = "https://unsplash.com/photos/j5rN_3wBy3E";
		}
		else if (/rain|shower|drizzle/gi.test(weather)) {
			image = rainy;
			linkAuthor = "https://unsplash.com/@noahsilliman";
			authorName = "Noah Silliman";
			linkPhoto = "https://unsplash.com/photos/i2J9jnvaAbU";
		}
		else if (/fog|mist/gi.test(weather)) {
			image = foggy;
			linkAuthor = "https://unsplash.com/@ericmuhr";
			authorName = "Eric Muhr";
			linkPhoto = "https://unsplash.com/photos/Fs-bcmsV-hA";
		}
		else if (/snow|blizzard|sleet/gi.test(weather)) {
			image = snowy;
			linkAuthor = "https://unsplash.com/@aditya1702";
			authorName = "Aditya Vyas";
			linkPhoto = "https://unsplash.com/photos/PzhmEp_aDU4";
		}
		else {
			image = defaultWeather;
			linkAuthor = "https://unsplash.com/@noaa";
			authorName = "NOAA";
			linkPhoto = "https://unsplash.com/photos/99F4mC79j1I";
		}

		return { image, linkAuthor, authorName, linkPhoto };
	};

	const setBackground = (imageObject) => {
		const prevAuthorCredits = document.querySelector(".authorCredits");
		if (prevAuthorCredits) prevAuthorCredits.remove();

		document.body.style.backgroundImage = `url(${imageObject.image})`;
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundPosition = "center";

		const linkAuthorElement = document.createElement("a");
		linkAuthorElement.href = imageObject.linkAuthor;
		linkAuthorElement.textContent = imageObject.authorName;
		linkAuthorElement.target = "_blank";

		const linkPhotoElement = document.createElement("a");
		linkPhotoElement.href = imageObject.linkPhoto;
		linkPhotoElement.textContent = "Unsplash";
		linkPhotoElement.target = "_blank";


		const authorCredits = document.createElement("p");
		authorCredits.classList.add("authorCredits");
		authorCredits.appendChild(linkAuthorElement);
		authorCredits.appendChild(linkPhotoElement);

		linkAuthorElement.before("Photo by ");
		linkAuthorElement.after(" on ");

		const credits = document.querySelector(".credits");
		credits.appendChild(authorCredits);
	};

	return { determineBackgroundImage, setBackground };
})();

export default Background;